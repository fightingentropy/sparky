import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useTweened } from "./diagramMotion";
import "./BendCutDiagram.css";

/*
 * Interactive containment bend for the bend-cut calculator (mirrors the iOS diagram).
 *
 * Top: the containment seen from above, bent at its notches. Drag the round handle (or use
 * the arrow keys on it) to open or close the bend; the angle field and every result follow.
 * Bottom: the same length laid flat with the V-notches to mark. Closing a V shortens the edge
 * it opens on, so each V opens on the inside of the bend by tan(bend per cut / 2) x width
 * either side of its centre mark, and keeps its point on the outside edge, where it hinges.
 */

type Props = {
  angle: string;
  cuts: string;
  /** The calculator's rounded "cut each side" value, e.g. "100 mm" ("" when invalid). */
  cutEachSide: string;
  onAngleChange: (value: string) => void;
};

const MIN = 1;
const MAX = 179;
const SNAPS = [30, 45, 60, 90, 120, 135];

// Preview geometry, in viewBox units. Screen-style coordinates: y grows downwards and the bend
// turns the free end upwards, so the top edge of the fixed length is the inside of the bend.
const VIEW_W = 360;
const VIEW_H = 210;
const STRIP = 32;
const PIVOT = { x: VIEW_W * 0.56, y: VIEW_H - STRIP - 14 };
const START_X = 12;
const ARM = Math.min(VIEW_H - STRIP - 46, VIEW_W * 0.4);

type Point = { x: number; y: number };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const radians = (degrees: number) => (degrees * Math.PI) / 180;
const dir = (degrees: number): Point => ({ x: Math.cos(radians(degrees)), y: -Math.sin(radians(degrees)) });
/** Normal pointing to the outside of the bend for a length heading `degrees`. */
const outward = (degrees: number): Point => ({ x: Math.sin(radians(degrees)), y: Math.cos(radians(degrees)) });
const add = (p: Point, v: Point, scale = 1): Point => ({ x: p.x + v.x * scale, y: p.y + v.y * scale });
const pts = (points: Point[]) => points.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");

function parseAngle(value: string): number {
  const parsed = Number.parseFloat(value.replace(",", "."));
  return clamp(Number.isFinite(parsed) ? parsed : 90, MIN, MAX);
}

function parseCuts(value: string): number {
  const parsed = Number.parseInt(value, 10);
  // Very high cut counts are drawn as 8; the shape reads the same.
  return clamp(Number.isFinite(parsed) && parsed >= 1 ? parsed : 1, 1, 8);
}

function bendGeometry(angle: number, cuts: number) {
  const step = angle / cuts;
  const segment = cuts > 1 ? Math.min(STRIP * 0.9, 120 / cuts) : 0;
  // Inside-edge corners where each closed notch's cut faces meet.
  const corners: Point[] = [PIVOT];
  for (let i = 1; i < cuts; i += 1) corners.push(add(corners[i - 1], dir(i * step), segment));
  const end = add(corners[corners.length - 1], dir(angle), ARM);
  // Outside corners: each V's point. A sharp single bend makes a long point; cap it.
  const mitreLength = Math.min(STRIP / Math.cos(radians(step / 2)), STRIP * 4);
  const mitres = corners.map((corner, i) => add(corner, outward(i * step + step / 2), mitreLength));
  const outsideStart = add({ x: START_X, y: PIVOT.y }, outward(0), STRIP);
  const outsideEnd = add(end, outward(angle), STRIP);
  const handle = add(add(end, outward(angle), STRIP / 2), dir(angle), 6);
  return { corners, end, mitres, outsideStart, outsideEnd, handle };
}

export function BendCutDiagram({ angle: angleText, cuts: cutsText, cutEachSide, onAngleChange }: Props) {
  const target = parseAngle(angleText);
  const cuts = parseCuts(cutsText);
  const [dragging, setDragging] = useState(false);
  const angle = useTweened(target, dragging);
  const svgRef = useRef<SVGSVGElement | null>(null);
  // Latest committed angle, so key repeats in one tick build on each other.
  const latestRef = useRef(target);
  useEffect(() => {
    latestRef.current = target;
  }, [target]);

  const { corners, end, mitres, outsideStart, outsideEnd, handle } = bendGeometry(angle, cuts);
  const step = angle / cuts;
  const tooSharp = target / cuts > 90;

  function commit(degrees: number, fromDrag = false) {
    let next = clamp(Math.round(degrees), MIN, MAX);
    if (fromDrag) next = SNAPS.find((snap) => Math.abs(snap - next) <= 2) ?? next;
    latestRef.current = next;
    if (String(next) !== angleText) onAngleChange(String(next));
  }

  function angleAt(event: PointerEvent<SVGElement>): number | null {
    const svg = svgRef.current;
    const matrix = svg?.getScreenCTM();
    if (!svg || !matrix) return null;
    const local = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    const dx = local.x - PIVOT.x;
    const dy = PIVOT.y - local.y;
    const degrees = (Math.atan2(dy, dx) * 180) / Math.PI;
    return degrees < 0 ? (dx < 0 ? MAX : MIN) : degrees;
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
    const delta: Record<string, number> = {
      ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, PageUp: 5, PageDown: -5,
    };
    if (event.key === "Home") commit(MIN);
    else if (event.key === "End") commit(MAX);
    else if (event.key in delta) commit(latestRef.current + delta[event.key] * (event.shiftKey ? 10 : 1));
    else return;
    event.preventDefault();
  }

  // Flat template: the strip height stands for the containment width.
  const templateTop = 30;
  const templateLeft = 12;
  const templateWidth = VIEW_W - 24;
  const halfOpening = STRIP * Math.tan(radians(step / 2));
  const centres = Array.from({ length: cuts }, (_, i) => templateLeft + (templateWidth * (i + 1)) / (cuts + 1));
  const first = centres[0];
  const reach = Math.min(halfOpening, templateLeft + templateWidth - first);
  const labelX = clamp(first + reach / 2, templateLeft + 24, templateLeft + templateWidth - 24);
  const valueText = `${Math.round(target)} degree bend${cutEachSide ? `, cut ${cutEachSide} each side of each mark` : ""}`;

  return (
    <div className={`bend-diagram${dragging ? " is-dragging" : ""}`}>
      <div className="bend-diagram-head">
        <span className="bend-diagram-eyebrow">Drag to bend</span>
        <span className="bend-diagram-angle">{Math.round(angle)}°</span>
      </div>

      <svg ref={svgRef} className="bend-diagram-preview" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}>
        <g className="bend-ghost">
          <line x1={PIVOT.x} y1={PIVOT.y} x2={VIEW_W - 4} y2={PIVOT.y} />
          <line x1={PIVOT.x} y1={PIVOT.y + STRIP} x2={VIEW_W - 4} y2={PIVOT.y + STRIP} />
        </g>
        {cuts === 1 ? (
          <path
            className="bend-arc"
            d={`M ${PIVOT.x + STRIP + 24} ${PIVOT.y} A ${STRIP + 24} ${STRIP + 24} 0 ${angle > 180 ? 1 : 0} 0 ${
              PIVOT.x + (STRIP + 24) * Math.cos(radians(angle))
            } ${PIVOT.y - (STRIP + 24) * Math.sin(radians(angle))}`}
          />
        ) : null}
        <polygon
          className="bend-body"
          points={pts([{ x: START_X, y: PIVOT.y }, ...corners, end, outsideEnd, ...[...mitres].reverse(), outsideStart])}
        />
        <polyline className="bend-inside" points={pts([{ x: START_X, y: PIVOT.y }, ...corners, end])} />
        <polyline className="bend-outside" points={pts([outsideStart, ...mitres, outsideEnd])} />
        {corners.map((corner, i) => (
          <line key={i} className="bend-seam" x1={corner.x} y1={corner.y} x2={mitres[i].x} y2={mitres[i].y} />
        ))}
        <g
          className="bend-handle"
          transform={`translate(${handle.x} ${handle.y})`}
          role="slider"
          tabIndex={0}
          aria-label="Bend angle"
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

      <svg className="bend-diagram-template" viewBox={`0 0 ${VIEW_W} 70`} aria-hidden="true">
        <defs>
          <clipPath id="bend-template-clip">
            <rect x={templateLeft} y={templateTop} width={templateWidth} height={STRIP} rx={3} />
          </clipPath>
        </defs>
        <g clipPath="url(#bend-template-clip)">
          <rect className="bend-template-strip" x={templateLeft} y={templateTop} width={templateWidth} height={STRIP} />
          {centres.map((centre) => (
            <g key={centre}>
              {/* Opens on the inside edge (top), point on the outside edge (bottom). */}
              <polygon
                className="bend-notch"
                points={pts([
                  { x: centre, y: templateTop + STRIP },
                  { x: centre + halfOpening, y: templateTop },
                  { x: centre - halfOpening, y: templateTop },
                ])}
              />
              <line className="bend-mark" x1={centre} y1={templateTop} x2={centre} y2={templateTop + STRIP} />
            </g>
          ))}
        </g>
        {cutEachSide ? (
          <g className="bend-dimension">
            <path
              d={`M ${first} ${templateTop - 8} H ${first + reach} M ${first} ${templateTop - 12} V ${templateTop - 4} M ${
                first + reach
              } ${templateTop - 12} V ${templateTop - 4}`}
            />
            <text x={labelX} y={templateTop - 16} textAnchor="middle">
              {cutEachSide}
            </text>
          </g>
        ) : null}
      </svg>

      <p className={`bend-diagram-note${tooSharp ? " is-warning" : ""}`}>
        {tooSharp
          ? "Each notch here is wider than the containment. Add cuts to spread the bend."
          : "Mark each V from its centre line on the inside edge; the point sits on the outside edge."}
      </p>
    </div>
  );
}
