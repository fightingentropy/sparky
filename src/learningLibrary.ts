import { COURSE_GUIDES, type CourseGuide } from "./courseGuides";

function words(value: string): string[] {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("en-GB").match(/[a-z0-9]+/g) ?? [];
}

const searchIndex = new Map(COURSE_GUIDES.map((guide) => [guide.id, words([
  guide.title, guide.kicker, guide.summary, guide.examLabel ?? "",
  ...guide.facts.flatMap((fact) => [fact.label, fact.value]),
  ...guide.sections.flatMap((section) => [section.title, ...section.items]),
  ...guide.pitfalls, ...guide.nextActions
].join(" "))]));

export function findLearningGuides(query: string): CourseGuide[] {
  if (!query.trim()) return COURSE_GUIDES;
  const terms = words(query);
  if (!terms.length) return [];
  return COURSE_GUIDES.filter((guide) =>
    terms.every((term) => searchIndex.get(guide.id)?.some((word) => word.startsWith(term)))
  );
}

export function suggestedLearningGuide(completedIds: readonly string[], lastOpenedId: string): CourseGuide | undefined {
  const unread = COURSE_GUIDES.filter((guide) => !completedIds.includes(guide.id));
  return unread.find((guide) => guide.id === lastOpenedId) ?? unread[0];
}
