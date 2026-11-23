import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useTweened } from "./diagramMotion";
import "./BendCutDiagram.css";

/*
 * Interactive angle drop (side view) for the angle-drop calculator; mirrors the iOS diagram.
 *
 * A top run drops to a bottom run through an angled piece. The vertical drop is what you
 * measured, so it stays fixed: drag the handle on the lower joint (or use the arrow keys on it)
 * to make the slope steeper or shallower, and the angle field and results follow. Prefab bends
 * take up `bend height` of the drop at each end; the cut piece (green) covers what is left,
 * which is the calculator's "angled piece": (drop - bends x bend height) / sin(angle).
 */

type Props = {
  angle: string;
  drop: string;
  unit: string;
  topBend: boolean;
  bottomBend: boolean;
  bendHeight: string;
  /** Calculator outputs ("--" when invalid). */
  angledLength: string;
  offset: string;
  onAngleChange: (value: string) => void;
};

const MIN = 5;
const MAX = 85;
const SNAPS = [15, 22.5, 30, 45, 60, 75];

const VIEW_W = 360;
const VIEW_H = 200;
const THICK = 9;
const MARGIN = 14;
const TOP_Y = 34;
const TOP_RUN = 70;
const BOTTOM_RUN = 56;
const MAX_DROP = VIEW_H - TOP_Y - 44;

type Point = { x: number; y: number };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const radians = (degrees: number) => (degrees * Math.PI) / 180;
const fmt = (value: number) => value.toFixed(2);

function parseNumber(value: string): number {
  return Number.parseFloat(value.replace(",", "."));
}

function geometry(angle: number) {
  const tangent = Math.tan(radians(angle));
  // Keep the true proportions: the whole drop and offset have to fit the box.
  const room = VIEW_W - MARGIN * 2 - TOP_RUN - BOTTOM_RUN;
  const dropPx = Math.min(MAX_DROP, room * tangent);
  const offsetPx = dropPx / tangent;
  const top: Point = { x: MARGIN + TOP_RUN, y: TOP_Y };
  const bottom: Point = { x: top.x + offsetPx, y: TOP_Y + dropPx };
  return { top, bottom, dropPx, offsetPx };
}

export function AngleDropDiagram(props: Props) {
  const { angle: angleText, onAngleChange, unit, angledLength, offset } = props;
  const parsedAngle = parseNumber(angleText);
  const target = clamp(Number.isFinite(parsedAngle) ? parsedAngle : 45, MIN, MAX);
  const [dragging, setDragging] = useState(false);
  const angle = useTweened(target, dragging);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const latestRef = useRef(target);
  useEffect(() => {
    latestRef.current = target;
  }, [target]);

  const { top, bottom, dropPx, offsetPx } = geometry(angle);
  // Shallow angles shrink the whole drawing (drop included) so the long run fits.
  const scaledToFit = dropPx < MAX_DROP - 0.5;
  const drop = parseNumber(props.drop);
  const bendHeight = parseNumber(props.bendHeight);
  const bendFraction =
    Number.isFinite(drop) && drop > 0 && Number.isFinite(bendHeight) && bendHeight > 0
      ? clamp(bendHeight / drop, 0, 1)
      : 0;
  const bendCount = (props.topBend ? 1 : 0) + (props.bottomBend ? 1 : 0);
  const bendsFillDrop = bendCount > 0 && bendFraction * bendCount >= 1;
  const slopeLength = Math.hypot(offsetPx, dropPx);
  const unitVector = { x: offsetPx / slopeLength, y: dropPx / slopeLength };
  const along = (fraction: number): Point => ({
    x: top.x + unitVector.x * slopeLength * fraction,
    y: top.y + unitVector.y * slopeLength * fraction,
  });
  const cutStart = along(props.topBend ? bendFraction : 0);
  const cutEnd = along(props.bottomBend ? 1 - bendFraction : 1);
  const valid = angledLength !== "--";
  const dropLabel = Number.isFinite(drop) && drop > 0 ? `${props.drop} ${unit}` : "";

  function commit(degrees: number, fromDrag = false) {
    let next = clamp(Math.round(degrees), MIN, MAX);
    if (fromDrag) {
      const snap = SNAPS.find((value) => Math.abs(value - degrees) <= 1.5);
      if (snap !== undefined) next = snap;
    }
    latestRef.current = next;
    if (String(next) !== angleText) onAngleChange(String(next));
  }

  function angleAt(event: PointerEvent<SVGElement>): number | null {
    const matrix = svgRef.current?.getScreenCTM();
    if (!matrix) return null;
    const local = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    const dx = local.x - top.x;
    const dy = local.y - top.y;
    if (dx <= 0) return MAX;
    if (dy <= 0) return MIN;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }

  function onPointerDown(event: PointerEvent<SVGGElement>) {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function onPointerMove(event: PointerEvent<SVGGElement>) {
    if (!dragging) return;
    const degrees = angleAt(event);
    if (degrees !== null) commit(degrees, true);
  }

  function endDrag(event: PointerEvent<SVGGElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
  }

  function onKeyDown(event: KeyboardEvent<SVGGElement>) {
    // Up/right makes the slope steeper.
    const delta: Record<string, number> = {
      ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, PageUp: 5, PageDown: -5,
    };
    if (event.key === "Home") commit(MIN);
    else if (event.key === "End") commit(MAX);
    else if (event.key in delta) commit(latestRef.current + delta[event.key] * (event.shiftKey ? 10 : 1));
    else return;
    event.preventDefault();
  }

  // Bars are drawn as thick round-capped strokes along the centre line.
  const runPath = `M ${MARGIN} ${fmt(top.y)} H ${fmt(top.x)} L ${fmt(bottom.x)} ${fmt(bottom.y)} H ${VIEW_W - MARGIN}`;
  const arcRadius = Math.min(40, slopeLength * 0.45);
  const arcEnd = { x: top.x + arcRadius * Math.cos(radians(angle)), y: top.y + arcRadius * Math.sin(radians(angle)) };
  const labelAngle = (Math.atan2(dropPx, offsetPx) * 180) / Math.PI;
  const mid = along(0.5);
  const normal = { x: unitVector.y, y: -unitVector.x };
  const lengthLabel = { x: mid.x + normal.x * 16, y: mid.y + normal.y * 16 };
  const valueText = `${Math.round(target)} degrees from horizontal${valid ? `, angled piece ${angledLength}` : ""}`;

  return (
    <div className={`bend-diagram${dragging ? " is-dragging" : ""}`}>
      <div className="bend-diagram-head">
        <span className="bend-diagram-eyebrow">Drag to set the angle</span>
        <span className="bend-diagram-head-end">
          {scaledToFit ? <span className="drop-scale-note">Scaled to fit</span> : null}
          <span className="bend-diagram-angle">{Math.round(angle)}°</span>
        </span>
      </div>

      <svg ref={svgRef} className="bend-diagram-preview" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}>
        {/* Horizontal reference through the top joint, and the angle it makes with the slope. */}
        <line className="drop-ghost" x1={top.x} y1={top.y} x2={VIEW_W - MARGIN} y2={top.y} />
        <path
          className="bend-arc"
          d={`M ${fmt(top.x + arcRadius)} ${fmt(top.y)} A ${fmt(arcRadius)} ${fmt(arcRadius)} 0 0 1 ${fmt(arcEnd.x)} ${fmt(arcEnd.y)}`}
        />

        <path className="drop-run" d={runPath} style={{ strokeWidth: THICK }} />
        {valid ? (
        <line
          className="drop-cut"
          x1={fmt(cutStart.x)}
          y1={fmt(cutStart.y)}
          x2={fmt(cutEnd.x)}
          y2={fmt(cutEnd.y)}
          style={{ strokeWidth: THICK }}
        />
        ) : null}
        {valid && props.topBend && bendFraction > 0 ? <circle className="drop-joint" cx={fmt(cutStart.x)} cy={fmt(cutStart.y)} r={2.5} /> : null}
        {valid && props.bottomBend && bendFraction > 0 ? <circle className="drop-joint" cx={fmt(cutEnd.x)} cy={fmt(cutEnd.y)} r={2.5} /> : null}

        {/* Drop: vertical dimension left of the top joint. */}
        {dropLabel ? (
          <g className="bend-dimension">
            <path
              d={`M ${fmt(top.x - 18)} ${fmt(top.y)} V ${fmt(bottom.y)} M ${fmt(top.x - 22)} ${fmt(top.y)} H ${fmt(top.x - 14)} M ${fmt(
                top.x - 22
              )} ${fmt(bottom.y)} H ${fmt(top.x - 14)}`}
            />
            <text x={fmt(top.x - 26)} y={fmt((top.y + bottom.y) / 2 + 4)} textAnchor="end">
              {dropLabel}
            </text>
          </g>
        ) : null}

        {/* Offset: horizontal dimension under the slope. */}
        {valid && cutEnd.x - cutStart.x > 18 ? (
          <g className="bend-dimension is-muted">
            {/* The calculator's offset is the cut piece's run, so measure that, not the bends. */}
            <path
              d={`M ${fmt(cutStart.x)} ${fmt(bottom.y + 20)} H ${fmt(cutEnd.x)} M ${fmt(cutStart.x)} ${fmt(bottom.y + 16)} V ${fmt(
                bottom.y + 24
              )} M ${fmt(cutEnd.x)} ${fmt(bottom.y + 16)} V ${fmt(bottom.y + 24)}`}
            />
            <text x={fmt((cutStart.x + cutEnd.x) / 2)} y={fmt(bottom.y + 36)} textAnchor="middle">
              {offset}
            </text>
          </g>
        ) : null}

        {valid ? (
          <text
            className="drop-length"
            x={fmt(lengthLabel.x)}
            y={fmt(lengthLabel.y)}
            textAnchor="middle"
            transform={`rotate(${fmt(labelAngle)} ${fmt(lengthLabel.x)} ${fmt(lengthLabel.y)})`}
          >
            {angledLength}
          </text>
        ) : null}

        <g
          className="bend-handle"
          transform={`translate(${fmt(bottom.x)} ${fmt(bottom.y)})`}
          role="slider"
          tabIndex={0}
          aria-label="Angle from horizontal"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={Math.round(target)}
          aria-valuetext={valueText}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={onKeyDown}
        >
          <circle className="bend-handle-hit" r={26} />
          <circle className="bend-handle-dot" r={13} />
          <path className="bend-handle-glyph" d="M0 -6 V6 M-6 0 H6 M-2.5 -3.5 L0 -6 L2.5 -3.5 M-2.5 3.5 L0 6 L2.5 3.5 M-3.5 -2.5 L-6 0 L-3.5 2.5 M3.5 -2.5 L6 0 L3.5 2.5" />
        </g>
      </svg>

      <p className={`bend-diagram-note${bendsFillDrop ? " is-warning" : ""}`}>
        {bendsFillDrop
          ? "The prefab bends take up the whole drop. Lower the bend height or use one bend."
          : props.topBend || props.bottomBend
          ? "Green is the length to cut; the dots mark where the prefab bends take over."
          : "Green is the length to cut between the two runs."}
      </p>
    </div>
  );
}
