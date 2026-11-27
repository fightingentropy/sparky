import { describe, expect, it } from "vitest";
import { CHEAT_SHEET_SECTIONS } from "./cheatSheetSections";
import { EXAM_REGISTRY } from "./examRegistry";
import {
  findLearnNode,
  isLearnProgress,
  LEARN_ROADMAP,
  LEARN_TOPICS,
  LEARN_TRACKABLE_NODES
} from "./learnRoadmap";
import { LEARN_COPY } from "./learnRoadmapCopy";

const allNodes = LEARN_TOPICS.flatMap((topic) => [topic, ...topic.branches]);
const noteIds = new Set(CHEAT_SHEET_SECTIONS.map((section) => section.id));
const examIds = new Set<string>(EXAM_REGISTRY.map((exam) => exam.id));

describe("Learn roadmap structure", () => {
  it("gives every stage, topic and branch a unique id", () => {
    const ids = [...LEARN_ROADMAP.stages.map((stage) => stage.id), ...allNodes.map((node) => node.id)];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("links only to notes and exams that exist", () => {
    for (const node of allNodes) {
      for (const id of node.noteIds) expect(noteIds, `${node.id} → note ${id}`).toContain(id);
      for (const id of node.examIds) expect(examIds, `${node.id} → exam ${id}`).toContain(id);
    }
  });

  it("gives every exam node exactly one exam and no progress", () => {
    for (const node of allNodes.filter((item) => item.kind === "exam")) {
      expect(node.examIds, node.id).toHaveLength(1);
      expect(LEARN_TRACKABLE_NODES.some((item) => item.id === node.id)).toBe(false);
    }
  });

  it("gives every topic at least one branch on the map", () => {
    for (const topic of LEARN_TOPICS) expect(topic.branches.length, topic.id).toBeGreaterThan(0);
  });

  it("finds nodes with their stage and topic", () => {
    const found = findLearnNode("dead-ir");
    expect(found?.node.title).toBe("Insulation resistance");
    expect(found?.topic.id).toBe("dead-tests");
    expect(found?.stage.id).toBe("stage-testing");
    expect(findLearnNode("missing")).toBeUndefined();
  });
});

describe("Learn roadmap copy", () => {
  it("has copy for the roadmap, every stage and every node, and nothing else", () => {
    const expected = new Set(["roadmap", ...LEARN_ROADMAP.stages.map((stage) => stage.id), ...allNodes.map((node) => node.id)]);
    expect(new Set(Object.keys(LEARN_COPY))).toEqual(expected);
  });

  it("keeps every summary short enough to read at a glance", () => {
    for (const [id, copy] of Object.entries(LEARN_COPY)) {
      expect(copy.summary.trim().length, id).toBeGreaterThan(0);
      expect(copy.summary.length, id).toBeLessThanOrEqual(240);
    }
  });

  it("gives topics and subtopics key points, and exam nodes only a summary", () => {
    for (const node of allNodes) {
      if (node.kind === "exam") {
        expect(node.points, node.id).toEqual([]);
        expect(node.watchFor, node.id).toEqual([]);
        continue;
      }
      expect(node.points.length, node.id).toBeGreaterThanOrEqual(3);
      expect(node.points.length, node.id).toBeLessThanOrEqual(5);
      for (const point of [...node.points, ...node.watchFor]) {
        expect(point.trim(), node.id).not.toBe("");
        expect(point.length, `${node.id}: ${point}`).toBeLessThanOrEqual(160);
      }
    }
  });
});

describe("isLearnProgress", () => {
  it("accepts a map of known statuses", () => {
    expect(isLearnProgress({ "dead-ir": "done", "ac-sine": "learning" })).toBe(true);
    expect(isLearnProgress({})).toBe(true);
  });

  it("rejects anything else", () => {
    expect(isLearnProgress({ "dead-ir": "skipped" })).toBe(false);
    expect(isLearnProgress(["dead-ir"])).toBe(false);
    expect(isLearnProgress(null)).toBe(false);
    expect(isLearnProgress("done")).toBe(false);
  });
});
