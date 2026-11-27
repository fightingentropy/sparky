import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { CHEAT_SHEET_SECTIONS } from "./cheatSheetSections";
import { EXAM_REGISTRY, type ExamId } from "./examRegistry";
import {
  LEARN_ROADMAP,
  LEARN_TRACKABLE_NODES,
  findLearnNode,
  isLearnProgress,
  type LearnBranch,
  type LearnNode,
  type LearnNodeKind,
  type LearnStage,
  type LearnStatus,
  type LearnTopic
} from "./learnRoadmap";
import { scrollIntoViewSafely } from "./scroll";
import { useFocusTrap } from "./useFocusTrap";
import { usePersistedState } from "./usePersistedState";
import "./LearnPage.css";

/*
 * The Learn tab: one roadmap drawn like roadmap.sh. A solid spine runs down the
 * middle, interrupted by stage headings; yellow core topics sit on it and their
 * subtopics (cream) and practice exams (blue) hang off either side on dotted
 * lines. Tapping a topic or subtopic opens its detail drawer; exams open directly.
 *
 * The map has three layouts, picked from the map's own width:
 * - wide (desktop/tablet): [left cluster | topic | right cluster], with curved
 *   dotted connectors measured from the rendered nodes and drawn in an SVG;
 * - compact (phones): the topic, then two columns flanking the spine, each with
 *   a dotted rail through its nodes (pure CSS);
 * - single (very narrow): one column with a dotted rail on its left.
 */

export const LEARN_PROGRESS_STORAGE_KEY = "learn-roadmap-progress-v1";

export type LearnProgress = Record<string, LearnStatus>;
export type LearnLayout = "wide" | "compact" | "single";

type Point = { x: number; y: number };
type Connector = { key: string; d: string };

type Props = {
  isActive: boolean;
  /** A node to reveal and open, e.g. chosen in the command palette. */
  target: { nodeId: string; nonce: number } | null;
  onOpenExam: (examId: ExamId) => void;
  onOpenNote: (noteId: string) => void;
};

const KIND_LABELS: Record<LearnNodeKind, string> = {
  topic: "Core topic",
  subtopic: "Subtopic",
  exam: "Practice exam"
};

const STATUS_LABELS: Record<LearnStatus, string> = {
  learning: "Learning",
  done: "Done"
};

const STATUS_OPTIONS: { value: LearnStatus | null; label: string }[] = [
  { value: null, label: "Not started" },
  { value: "learning", label: "Learning" },
  { value: "done", label: "Done" }
];

const NOTE_TITLES = new Map(CHEAT_SHEET_SECTIONS.map((section) => [section.id, section.title]));
const EXAM_TITLES = new Map<string, string>(EXAM_REGISTRY.map((exam) => [exam.id, exam.title]));

const STAGE_TRACKABLES = new Map<string, LearnNode[]>(
  LEARN_ROADMAP.stages.map((stage) => [stage.id, trackableNodesIn(stage)])
);

function trackableNodesIn(stage: LearnStage): LearnNode[] {
  return stage.topics.flatMap((topic) => [topic, ...topic.branches.filter((branch) => branch.kind !== "exam")]);
}

export function learnLayoutForWidth(width: number): LearnLayout {
  if (width >= 700) return "wide";
  if (width < 340) return "single";
  return "compact";
}

/** Counts done nodes among `nodes`; ids that are not on the roadmap never count. */
export function countDone(nodes: readonly LearnNode[], progress: LearnProgress): number {
  return nodes.reduce((total, node) => total + (progress[node.id] === "done" ? 1 : 0), 0);
}

/** The node "Continue" goes to: the first one being learnt, else the first not done. */
export function nextLearnNode(progress: LearnProgress): LearnNode | null {
  return (
    LEARN_TRACKABLE_NODES.find((node) => progress[node.id] === "learning") ??
    LEARN_TRACKABLE_NODES.find((node) => progress[node.id] !== "done") ??
    null
  );
}

/** An S-curve that leaves `from` and meets `to` horizontally, like roadmap.sh's links. */
export function connectorPath(from: Point, to: Point): string {
  const round = (value: number) => Math.round(value * 10) / 10;
  const mid = round((from.x + to.x) / 2);
  return `M${round(from.x)} ${round(from.y)} C${mid} ${round(from.y)} ${mid} ${round(to.y)} ${round(to.x)} ${round(to.y)}`;
}

export function nodeElementId(nodeId: string): string {
  return `learn-node-${nodeId}`;
}

function stageElementId(stageId: string): string {
  return `learn-stage-${stageId}`;
}

function currentPath(): string {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

// Keeps /learn#<node-id> in step with the open drawer so it can be shared and
// restored with Back. Only while the address is actually the Learn page.
function writeNodeHash(nodeId: string | null) {
  if (currentPath() !== "/learn") return;
  const next = nodeId ? `/learn#${encodeURIComponent(nodeId)}` : "/learn";
  if (`${window.location.pathname}${window.location.hash}` === next) return;
  window.history.replaceState(window.history.state, "", next);
}

function nodeIdFromHash(): string | null {
  const raw = window.location.hash.slice(1);
  if (!raw) return null;
  try {
    return decodeURIComponent(raw);
  } catch {
    return null;
  }
}

function scrollToNode(nodeId: string) {
  scrollIntoViewSafely(document.getElementById(nodeElementId(nodeId)), { block: "center" });
}

function nodeAriaLabel(node: LearnNode, status: LearnStatus | undefined): string {
  return [node.title, KIND_LABELS[node.kind], status ? STATUS_LABELS[status] : ""].filter(Boolean).join(", ");
}

// ── Glyphs ─────────────────────────────────────────────────────────────────

function CheckGlyph() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="m4 8.4 2.6 2.6L12 5.6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HalfGlyph() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="4.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3.4a4.6 4.6 0 0 1 0 9.2z" fill="currentColor" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M5.5 3.8v8.4L12 8z" fill="currentColor" />
    </svg>
  );
}

function NoteGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}

function ChevronGlyph() {
  return (
    <svg className="learn-row-chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function StatusMark({ kind, status }: { kind: LearnNodeKind | "note"; status?: LearnStatus }) {
  if (kind === "note") {
    return <span className="learn-mark is-note"><NoteGlyph /></span>;
  }
  if (kind === "exam") {
    return <span className="learn-mark is-exam"><PlayGlyph /></span>;
  }
  if (status === "done") return <span className="learn-mark is-done"><CheckGlyph /></span>;
  if (status === "learning") return <span className="learn-mark is-learning"><HalfGlyph /></span>;
  return <span className="learn-mark is-none" />;
}

// ── Map ────────────────────────────────────────────────────────────────────

function MapNode({
  node,
  side,
  status,
  onSelect
}: {
  node: LearnNode;
  side?: LearnBranch["side"];
  status: LearnStatus | undefined;
  onSelect: (node: LearnNode) => void;
}) {
  const shownStatus = node.kind === "exam" ? undefined : status;
  return (
    <button
      type="button"
      id={nodeElementId(node.id)}
      className={`learn-node is-${node.kind}${shownStatus ? ` is-${shownStatus}` : ""}`}
      data-node-id={node.id}
      data-side={side}
      data-role={node.kind === "topic" ? "topic" : "branch"}
      aria-label={nodeAriaLabel(node, shownStatus)}
      onClick={() => onSelect(node)}
    >
      <span className="learn-node-title">{node.title}</span>
      {node.kind === "exam" ? (
        <span className="learn-node-play">
          <PlayGlyph />
        </span>
      ) : null}
      {shownStatus ? (
        <span className={`learn-badge is-${shownStatus}`} aria-hidden="true">
          {shownStatus === "done" ? <CheckGlyph /> : <HalfGlyph />}
        </span>
      ) : null}
    </button>
  );
}

function TopicBlock({
  topic,
  progress,
  onSelect
}: {
  topic: LearnTopic;
  progress: LearnProgress;
  onSelect: (node: LearnNode) => void;
}) {
  const sides = (["left", "right"] as const).map((side) => ({
    side,
    branches: topic.branches.filter((branch) => branch.side === side)
  }));
  return (
    <div className="learn-topic-block" data-topic-block="">
      <div className="learn-topic-slot">
        <MapNode node={topic} status={progress[topic.id]} onSelect={onSelect} />
      </div>
      {sides.map(({ side, branches }) =>
        branches.length ? (
          <ul key={side} className={`learn-cluster is-${side}`}>
            {branches.map((branch) => (
              <li key={branch.id}>
                <MapNode node={branch} side={side} status={progress[branch.id]} onSelect={onSelect} />
              </li>
            ))}
          </ul>
        ) : null
      )}
    </div>
  );
}

// Measures the rendered nodes and returns one curved path per branch, in the
// map body's coordinates. Only runs in the wide layout while the page shows.
function useConnectors(
  bodyRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean
): Connector[] {
  const [connectors, setConnectors] = useState<Connector[]>([]);

  useLayoutEffect(() => {
    const body = bodyRef.current;
    if (!enabled || !body) return;

    let frame = 0;
    const measure = () => {
      const origin = body.getBoundingClientRect();
      if (origin.width === 0) return;
      const next: Connector[] = [];
      body.querySelectorAll<HTMLElement>("[data-topic-block]").forEach((block) => {
        const topicEl = block.querySelector<HTMLElement>('[data-role="topic"]');
        if (!topicEl) return;
        const topic = topicEl.getBoundingClientRect();
        const y1 = topic.top + topic.height / 2 - origin.top;
        block.querySelectorAll<HTMLElement>("[data-side]").forEach((branchEl) => {
          const branch = branchEl.getBoundingClientRect();
          const left = branchEl.dataset.side === "left";
          next.push({
            key: branchEl.dataset.nodeId ?? `${next.length}`,
            d: connectorPath(
              { x: (left ? topic.left : topic.right) - origin.left, y: y1 },
              { x: (left ? branch.right : branch.left) - origin.left, y: branch.top + branch.height / 2 - origin.top }
            )
          });
        });
      });
      setConnectors((current) =>
        current.length === next.length && current.every((item, index) => item.d === next[index].d) ? current : next
      );
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", schedule);
      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", schedule);
      };
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(body);
    body.querySelectorAll("[data-topic-block], [data-node-id]").forEach((element) => observer.observe(element));
    document.fonts?.ready.then(schedule).catch(() => {});
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [bodyRef, enabled]);

  return enabled ? connectors : [];
}

function useMapLayout(mapRef: React.RefObject<HTMLDivElement | null>): LearnLayout {
  const [layout, setLayout] = useState<LearnLayout>("compact");

  useLayoutEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const update = () => {
      const width = map.clientWidth;
      // A hidden page measures 0 wide; keep the last real layout.
      if (width > 0) setLayout(learnLayoutForWidth(width));
    };
    update();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
    const observer = new ResizeObserver(update);
    observer.observe(map);
    return () => observer.disconnect();
  }, [mapRef]);

  return layout;
}

// ── Detail drawer ──────────────────────────────────────────────────────────

function DetailSection({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <section className={`learn-detail-section${className ? ` ${className}` : ""}`}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function LearnDetail({
  nodeId,
  progress,
  onStatusChange,
  onSelectNode,
  onOpenExam,
  onOpenNote,
  onClose
}: {
  nodeId: string;
  progress: LearnProgress;
  onStatusChange: (nodeId: string, status: LearnStatus | null) => void;
  onSelectNode: (node: LearnNode) => void;
  onOpenExam: (examId: ExamId) => void;
  onOpenNote: (noteId: string) => void;
  onClose: () => void;
}) {
  const trapRef = useFocusTrap<HTMLDivElement>(true);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const entry = findLearnNode(nodeId);

  useEffect(() => {
    // Only while focus is in the drawer: a palette or dialog opened on top
    // takes focus, and its own Escape handling must win.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      if (!(event.target instanceof Node) || !trapRef.current?.contains(event.target)) return;
      event.stopPropagation();
      onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, trapRef]);

  // A new node in the same drawer starts at the top, with focus on its title.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    titleRef.current?.focus({ preventScroll: true });
  }, [nodeId]);

  if (!entry) return null;
  const { node, stage, topic } = entry;
  const stageNumber = LEARN_ROADMAP.stages.indexOf(stage) + 1;
  const status = progress[node.id];
  const branches = node.kind === "topic" ? topic.branches : [];
  const notes = node.noteIds.filter((id) => NOTE_TITLES.has(id));
  const exams = node.examIds.filter((id) => EXAM_TITLES.has(id));

  return (
    <>
      <div className="learn-sheet-backdrop" onClick={onClose} aria-hidden="true" />
      <div
        ref={trapRef}
        className="learn-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="learn-detail-title"
      >
        <span className="learn-sheet-grabber" aria-hidden="true" />
        <header className="learn-sheet-head">
          <p className="learn-eyebrow">
            Stage {stageNumber} · {stage.title}
          </p>
          <button type="button" className="learn-sheet-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </header>

        <div className="learn-sheet-scroll" ref={scrollRef}>
          <span className={`learn-kind is-${node.kind}`}>{KIND_LABELS[node.kind]}</span>
          <h2 id="learn-detail-title" className="learn-sheet-title" ref={titleRef} tabIndex={-1}>
            {node.title}
          </h2>
          {node.summary ? <p className="learn-sheet-summary">{node.summary}</p> : null}

          {node.kind !== "topic" ? (
            <button type="button" className="learn-parent-link" onClick={() => onSelectNode(topic)}>
              <span className="learn-parent-swatch" aria-hidden="true" />
              <span>
                Part of <strong>{topic.title}</strong>
              </span>
              <ChevronGlyph />
            </button>
          ) : null}

          {node.points.length ? (
            <DetailSection title="Key points">
              <ul className="learn-points">
                {node.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </DetailSection>
          ) : null}

          {node.watchFor.length ? (
            <DetailSection title="Watch out for" className="is-watch">
              <ul className="learn-watch-list">
                {node.watchFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailSection>
          ) : null}

          {branches.length ? (
            <DetailSection title="In this topic">
              <ul className="learn-rows">
                {branches.map((branch) => {
                  const branchStatus = branch.kind === "exam" ? undefined : progress[branch.id];
                  return (
                    <li key={branch.id}>
                      <button
                        type="button"
                        className="learn-row"
                        onClick={() => onSelectNode(branch)}
                        aria-label={nodeAriaLabel(branch, branchStatus)}
                      >
                        <StatusMark kind={branch.kind} status={branchStatus} />
                        <span className="learn-row-text">
                          <span className="learn-row-title">{branch.title}</span>
                          <span className="learn-row-meta">
                            {branch.kind === "exam"
                              ? "Practice exam · opens in Exams"
                              : branchStatus
                                ? `Subtopic · ${STATUS_LABELS[branchStatus]}`
                                : "Subtopic"}
                          </span>
                        </span>
                        <ChevronGlyph />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </DetailSection>
          ) : null}

          {notes.length ? (
            <DetailSection title="Revise in Notes">
              <ul className="learn-rows">
                {notes.map((noteId) => (
                  <li key={noteId}>
                    <button type="button" className="learn-row" onClick={() => onOpenNote(noteId)}>
                      <StatusMark kind="note" />
                      <span className="learn-row-text">
                        <span className="learn-row-title">{NOTE_TITLES.get(noteId)}</span>
                        <span className="learn-row-meta">Opens in Notes</span>
                      </span>
                      <ChevronGlyph />
                    </button>
                  </li>
                ))}
              </ul>
            </DetailSection>
          ) : null}

          {exams.length ? (
            <DetailSection title="Practise">
              <ul className="learn-rows">
                {exams.map((examId) => (
                  <li key={examId}>
                    <button type="button" className="learn-row" onClick={() => onOpenExam(examId)}>
                      <StatusMark kind="exam" />
                      <span className="learn-row-text">
                        <span className="learn-row-title">{EXAM_TITLES.get(examId)}</span>
                        <span className="learn-row-meta">Opens in Exams</span>
                      </span>
                      <ChevronGlyph />
                    </button>
                  </li>
                ))}
              </ul>
            </DetailSection>
          ) : null}
        </div>

        <footer className="learn-sheet-foot">
          <div className="learn-status" role="group" aria-label={`Your progress on ${node.title}`}>
            {STATUS_OPTIONS.map((option) => {
              const selected = (status ?? null) === option.value;
              return (
                <button
                  key={option.label}
                  type="button"
                  className={`learn-status-option is-${option.value ?? "none"}${selected ? " is-selected" : ""}`}
                  aria-pressed={selected}
                  onClick={() => onStatusChange(node.id, option.value)}
                >
                  {option.value === "done" ? <CheckGlyph /> : option.value === "learning" ? <HalfGlyph /> : null}
                  {option.label}
                </button>
              );
            })}
          </div>
        </footer>
      </div>
    </>
  );
}

function ResetDialog({ count, onCancel, onConfirm }: { count: number; onCancel: () => void; onConfirm: () => void }) {
  const trapRef = useFocusTrap<HTMLDivElement>(true);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onCancel]);

  return (
    <div className="learn-confirm-backdrop" onClick={onCancel}>
      <div
        ref={trapRef}
        className="learn-confirm"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="learn-reset-title"
        aria-describedby="learn-reset-copy"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="learn-reset-title">Reset your progress?</h2>
        <p id="learn-reset-copy">
          This clears {count} marked {count === 1 ? "topic" : "topics"} on this device. It can’t be undone.
        </p>
        <div className="learn-confirm-actions">
          <button type="button" className="learn-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="learn-button is-danger" onClick={onConfirm}>
            Reset progress
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export function LearnPage({ isActive, target, onOpenExam, onOpenNote }: Props) {
  const [progress, setProgress] = usePersistedState<LearnProgress>(LEARN_PROGRESS_STORAGE_KEY, {}, isLearnProgress);
  const [openNodeId, setOpenNodeId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const handledTargetRef = useRef<number | null>(null);

  const layout = useMapLayout(mapRef);
  const connectors = useConnectors(bodyRef, isActive && layout === "wide");

  const total = LEARN_TRACKABLE_NODES.length;
  const done = countDone(LEARN_TRACKABLE_NODES, progress);
  const marked = LEARN_TRACKABLE_NODES.filter((node) => progress[node.id]).length;
  const next = useMemo(() => nextLearnNode(progress), [progress]);
  const percent = total ? Math.round((done / total) * 100) : 0;

  const openNode = useCallback(
    (node: LearnNode) => {
      if (node.kind === "exam") {
        setOpenNodeId(null);
        onOpenExam(node.examIds[0]);
        return;
      }
      setOpenNodeId(node.id);
      writeNodeHash(node.id);
    },
    [onOpenExam]
  );

  const closeNode = useCallback(() => {
    setOpenNodeId(null);
    writeNodeHash(null);
  }, []);

  // Scrolls a node into view and opens it (exam nodes are only scrolled to).
  const revealNode = useCallback((nodeId: string) => {
    const entry = findLearnNode(nodeId);
    if (!entry) return;
    scrollToNode(nodeId);
    if (entry.node.kind !== "exam") {
      setOpenNodeId(nodeId);
      writeNodeHash(nodeId);
    }
  }, []);

  const setStatus = useCallback(
    (nodeId: string, status: LearnStatus | null) => {
      setProgress((current) => {
        if ((current[nodeId] ?? null) === status) return current;
        const nextProgress = { ...current };
        if (status) nextProgress[nodeId] = status;
        else delete nextProgress[nodeId];
        return nextProgress;
      });
    },
    [setProgress]
  );

  // Leaving the page closes anything floating over it.
  useEffect(() => {
    if (isActive) return;
    setOpenNodeId(null);
    setMenuOpen(false);
    setConfirmReset(false);
  }, [isActive]);

  // /learn#<node-id> deep links, on arrival and when the hash changes. The
  // delay lets the app's scroll-to-top on page change run first.
  useEffect(() => {
    if (!isActive) return;
    const fromHash = () => {
      const nodeId = nodeIdFromHash();
      if (nodeId && findLearnNode(nodeId)) revealNode(nodeId);
    };
    // Going Back to a plain /learn entry means no node is selected any more.
    const onHashChange = () => {
      const nodeId = nodeIdFromHash();
      if (nodeId && findLearnNode(nodeId)) revealNode(nodeId);
      else setOpenNodeId(null);
    };
    const timer = window.setTimeout(fromHash, 80);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [isActive, revealNode]);

  useEffect(() => {
    if (!isActive || !target || handledTargetRef.current === target.nonce) return;
    const timer = window.setTimeout(() => {
      handledTargetRef.current = target.nonce;
      revealNode(target.nodeId);
    }, 80);
    return () => window.clearTimeout(timer);
  }, [isActive, target, revealNode]);

  // The page behind the drawer stays put while it is open.
  const detailOpen = isActive && openNodeId !== null;
  useEffect(() => {
    if (!detailOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [detailOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
    const onPointerDown = (event: PointerEvent) => {
      const targetNode = event.target as Node | null;
      if (targetNode && (menuRef.current?.contains(targetNode) || menuButtonRef.current?.contains(targetNode))) return;
      setMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const handleOpenExam = useCallback(
    (examId: ExamId) => {
      // Leave the hash alone so Back returns to this node's drawer.
      setOpenNodeId(null);
      onOpenExam(examId);
    },
    [onOpenExam]
  );

  const handleOpenNote = useCallback(
    (noteId: string) => {
      setOpenNodeId(null);
      onOpenNote(noteId);
    },
    [onOpenNote]
  );

  // The menu item that opened the dialog is gone by now, so focus goes back
  // to the options button rather than to the top of the document.
  const cancelReset = useCallback(() => {
    setConfirmReset(false);
    menuButtonRef.current?.focus();
  }, []);
  const confirmResetProgress = useCallback(() => {
    setProgress({});
    setConfirmReset(false);
    menuButtonRef.current?.focus();
  }, [setProgress]);

  return (
    <section className={`page page-learn ${isActive ? "is-active" : ""}`} aria-labelledby="learn-page-title">
      <header className="page-header learn-header">
        <div>
          <h1 id="learn-page-title">Learn</h1>
          <p className="page-copy">The UK electrician roadmap, one topic at a time</p>
        </div>
        <div className="learn-menu-wrap">
          <button
            ref={menuButtonRef}
            type="button"
            className="learn-more-button"
            aria-label="Learn options"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
              <circle cx="5" cy="12" r="1.9" />
              <circle cx="12" cy="12" r="1.9" />
              <circle cx="19" cy="12" r="1.9" />
            </svg>
          </button>
          {menuOpen ? (
            <div ref={menuRef} className="learn-menu" role="menu" aria-label="Learn options">
              <button
                type="button"
                role="menuitem"
                className="learn-menu-item"
                disabled={marked === 0}
                onClick={() => {
                  setMenuOpen(false);
                  setConfirmReset(true);
                }}
              >
                Reset progress
                {marked === 0 ? <span className="learn-menu-note">Nothing marked yet</span> : null}
              </button>
            </div>
          ) : null}
        </div>
      </header>

      <section className="learn-progress" aria-label="Your progress">
        <p className="learn-progress-count">
          <strong>{done}</strong> of {total} topics done
        </p>
        <span className="learn-progress-percent" aria-hidden="true">
          {percent}%
        </span>
        <div
          className="learn-progress-bar"
          role="progressbar"
          aria-label="Topics done"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
        >
          <span style={{ width: `${percent}%` }} />
        </div>
        {next ? (
          <button
            type="button"
            className="learn-continue"
            onClick={() => {
              scrollToNode(next.id);
              openNode(next);
            }}
          >
            <span className="learn-continue-label">{marked ? "Continue" : "Start here"}</span>
            <span className="learn-continue-title">{next.title}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        ) : (
          <p className="learn-progress-done">Every topic is done. Revisit any of them below whenever you like.</p>
        )}
      </section>

      <ul className="learn-legend" aria-label="Map key">
        <li><span className="learn-swatch is-topic" aria-hidden="true" />Core topic</li>
        <li><span className="learn-swatch is-subtopic" aria-hidden="true" />Subtopic</li>
        <li><span className="learn-swatch is-exam" aria-hidden="true" />Practice exam</li>
        <li><span className="learn-mark is-done" aria-hidden="true"><CheckGlyph /></span>Done</li>
        <li><span className="learn-mark is-learning" aria-hidden="true"><HalfGlyph /></span>Learning</li>
      </ul>

      <nav className="learn-stage-index" aria-label="Stages">
        {LEARN_ROADMAP.stages.map((stage, index) => {
          const nodes = STAGE_TRACKABLES.get(stage.id) ?? [];
          const stageDone = countDone(nodes, progress);
          const complete = nodes.length > 0 && stageDone === nodes.length;
          return (
            <button
              key={stage.id}
              type="button"
              className={`learn-chip${complete ? " is-complete" : ""}`}
              onClick={() => scrollIntoViewSafely(document.getElementById(stageElementId(stage.id)), { block: "start" })}
              aria-label={`Stage ${index + 1}: ${stage.title}, ${stageDone} of ${nodes.length} done`}
            >
              <span className="learn-chip-number" aria-hidden="true">{complete ? <CheckGlyph /> : index + 1}</span>
              <span className="learn-chip-title">{stage.title}</span>
              <span className="learn-chip-count" aria-hidden="true">
                {stageDone}/{nodes.length}
              </span>
            </button>
          );
        })}
      </nav>

      <div ref={mapRef} className={`learn-map is-${layout}`} data-layout={layout}>
        <h2 className="learn-map-title">{LEARN_ROADMAP.title} roadmap</h2>
        <div ref={bodyRef} className="learn-map-body">
          {layout === "wide" && connectors.length ? (
            <svg className="learn-connectors" aria-hidden="true" focusable="false">
              {connectors.map((connector) => (
                <path key={connector.key} d={connector.d} />
              ))}
            </svg>
          ) : null}
          {LEARN_ROADMAP.stages.map((stage, index) => {
            const nodes = STAGE_TRACKABLES.get(stage.id) ?? [];
            return (
              <section key={stage.id} className="learn-stage" aria-labelledby={`${stageElementId(stage.id)}-title`}>
                <header className="learn-stage-heading" id={stageElementId(stage.id)}>
                  <p className="learn-stage-eyebrow">Stage {index + 1}</p>
                  <h3 id={`${stageElementId(stage.id)}-title`}>{stage.title}</h3>
                  <p className="learn-stage-caption">
                    {countDone(nodes, progress)} of {nodes.length} done
                  </p>
                </header>
                <div className="learn-stage-topics">
                  {stage.topics.map((topic) => (
                    <TopicBlock key={topic.id} topic={topic} progress={progress} onSelect={openNode} />
                  ))}
                </div>
              </section>
            );
          })}
          <span className="learn-spine-end" aria-hidden="true" />
        </div>
      </div>

      <p className="learn-footer">Every topic links to notes and practice exams already in Sparky.</p>

      {detailOpen && openNodeId ? (
        <LearnDetail
          nodeId={openNodeId}
          progress={progress}
          onStatusChange={setStatus}
          onSelectNode={openNode}
          onOpenExam={handleOpenExam}
          onOpenNote={handleOpenNote}
          onClose={closeNode}
        />
      ) : null}

      {confirmReset ? <ResetDialog count={marked} onCancel={cancelReset} onConfirm={confirmResetProgress} /> : null}
    </section>
  );
}
