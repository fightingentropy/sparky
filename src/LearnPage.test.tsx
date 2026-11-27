import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  LearnDetail,
  LEARN_PROGRESS_STORAGE_KEY,
  LearnPage,
  connectorPath,
  countDone,
  learnLayoutForWidth,
  nextLearnNode,
  nodeElementId,
  type LearnProgress
} from "./LearnPage";
import { LEARN_ROADMAP, LEARN_TOPICS, LEARN_TRACKABLE_NODES, findLearnNode } from "./learnRoadmap";

const noop = () => {};

function renderPage() {
  return renderToStaticMarkup(<LearnPage isActive target={null} onOpenExam={noop} onOpenNote={noop} />);
}

function renderDetail(nodeId: string, progress: LearnProgress = {}) {
  return renderToStaticMarkup(
    <LearnDetail
      nodeId={nodeId}
      progress={progress}
      onStatusChange={noop}
      onSelectNode={noop}
      onOpenExam={noop}
      onOpenNote={noop}
      onClose={noop}
    />
  );
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

describe("Learn roadmap page", () => {
  it("draws every stage heading and every node as one labelled button", () => {
    const markup = renderPage();

    expect(markup).toContain("Electrician roadmap");
    LEARN_ROADMAP.stages.forEach((stage, index) => {
      expect(markup).toContain(`>Stage ${index + 1}<`);
      expect(markup).toContain(`>${escapeHtml(stage.title)}</h3>`);
    });
    for (const topic of LEARN_TOPICS) {
      expect(markup).toContain(`id="${nodeElementId(topic.id)}"`);
      expect(markup).toContain(`aria-label="${escapeHtml(`${topic.title}, Core topic`)}"`);
      for (const branch of topic.branches) {
        const kind = branch.kind === "exam" ? "Practice exam" : "Subtopic";
        expect(markup).toContain(`aria-label="${escapeHtml(`${branch.title}, ${kind}`)}"`);
      }
    }
  });

  it("starts with no progress and offers the first topic", () => {
    const markup = renderPage();

    expect(markup).toContain(`<strong>0</strong> of ${LEARN_TRACKABLE_NODES.length} topics done`);
    expect(markup).toContain("Start here");
    expect(markup).toContain(escapeHtml(LEARN_TOPICS[0].title));
    expect(markup).toContain('aria-label="Map key"');
    expect(markup).toContain('aria-label="Stages"');
  });

  it("picks compact, wide and single-column layouts from the map width", () => {
    expect(learnLayoutForWidth(320)).toBe("single");
    expect(learnLayoutForWidth(343)).toBe("compact");
    expect(learnLayoutForWidth(699)).toBe("compact");
    expect(learnLayoutForWidth(700)).toBe("wide");
    expect(learnLayoutForWidth(1000)).toBe("wide");
  });

  it("draws connectors as horizontal-tangent curves", () => {
    expect(connectorPath({ x: 400, y: 100 }, { x: 300, y: 40 })).toBe("M400 100 C350 100 350 40 300 40");
    expect(connectorPath({ x: 0.04, y: 1.26 }, { x: 10, y: 1 })).toBe("M0 1.3 C5 1.3 5 1 10 1");
  });
});

describe("Learn progress", () => {
  it("continues with a node being learnt before the first node not done", () => {
    const [first, second, third] = LEARN_TRACKABLE_NODES;

    expect(nextLearnNode({})?.id).toBe(first.id);
    expect(nextLearnNode({ [first.id]: "done" })?.id).toBe(second.id);
    expect(nextLearnNode({ [first.id]: "done", [third.id]: "learning" })?.id).toBe(third.id);
  });

  it("has nothing to continue once everything is done", () => {
    const allDone = Object.fromEntries(LEARN_TRACKABLE_NODES.map((node) => [node.id, "done" as const]));
    expect(nextLearnNode(allDone)).toBeNull();
    expect(countDone(LEARN_TRACKABLE_NODES, allDone)).toBe(LEARN_TRACKABLE_NODES.length);
  });

  it("never counts ids that are not on the roadmap", () => {
    expect(countDone(LEARN_TRACKABLE_NODES, { "no-such-node": "done" })).toBe(0);
  });

  it("reads saved progress and marks done and learning nodes on the map", () => {
    const [topic] = LEARN_TOPICS;
    const subtopic = topic.branches.find((branch) => branch.kind === "subtopic")!;
    const saved = new Map([
      [LEARN_PROGRESS_STORAGE_KEY, JSON.stringify({ [topic.id]: "done", [subtopic.id]: "learning" })]
    ]);
    const storage = {
      getItem: (key: string) => saved.get(key) ?? null,
      setItem: (key: string, value: string) => void saved.set(key, value),
      removeItem: (key: string) => void saved.delete(key)
    };
    const original = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
    Object.defineProperty(globalThis, "localStorage", { value: storage, configurable: true });
    try {
      const markup = renderPage();
      expect(markup).toContain(`aria-label="${escapeHtml(`${topic.title}, Core topic, Done`)}"`);
      expect(markup).toContain(`aria-label="${escapeHtml(`${subtopic.title}, Subtopic, Learning`)}"`);
      expect(markup).toContain("learn-badge is-done");
      expect(markup).toContain("learn-badge is-learning");
      expect(markup).toContain(`<strong>1</strong> of ${LEARN_TRACKABLE_NODES.length} topics done`);
      expect(markup).toContain("Continue");
    } finally {
      if (original) Object.defineProperty(globalThis, "localStorage", original);
      else delete (globalThis as { localStorage?: unknown }).localStorage;
    }
  });
});

describe("Learn detail drawer", () => {
  it("lists a topic's branches, notes and exams, and the status control", () => {
    const entry = findLearnNode("site-safety");
    expect(entry).toBeDefined();
    const node = entry!.node;
    const markup = renderDetail(node.id, { "safety-law": "done" });

    expect(markup).toContain('role="dialog"');
    expect(markup).toContain("Stage 1 · Getting started");
    expect(markup).toContain("In this topic");
    expect(markup).toContain(`aria-label="${escapeHtml("Health & safety law, Subtopic, Done")}"`);
    expect(markup).toContain("Revise in Notes");
    expect(markup).toContain("Practise");
    expect(markup).toContain('aria-pressed="true"');
    expect(markup).toContain("Not started");
  });

  it("hides sections that have no copy yet and links a subtopic to its topic", () => {
    const entry = findLearnNode("route-adult");
    expect(entry).toBeDefined();
    const node = entry!.node;
    const markup = renderDetail(node.id, { [node.id]: "learning" });

    expect(markup.includes("Key points")).toBe(node.points.length > 0);
    expect(markup.includes("Watch out for")).toBe(node.watchFor.length > 0);
    expect(markup.includes("learn-sheet-summary")).toBe(node.summary.length > 0);
    expect(markup).not.toContain("In this topic");
    expect(markup).toContain(`Part of <strong>${escapeHtml(entry!.topic.title)}</strong>`);
    expect(markup).toMatch(/is-learning is-selected" aria-pressed="true"/);
  });

  it("renders nothing for an unknown node", () => {
    expect(renderDetail("not-a-node")).toBe("");
  });
});
