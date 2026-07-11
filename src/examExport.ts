import type { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import type { ExamChoice, ExamQuestion } from "./exams/types";

type ExamSectionGroup = { questions: ExamQuestion[] };
type ExportExtension = "md" | "pdf";

const LETTERS: ExamChoice[] = ["A", "B", "C", "D"];

function flattenQuestions(sectionGroups: ExamSectionGroup[]): ExamQuestion[] {
  return sectionGroups.flatMap(({ questions }) => questions);
}

function escapeMarkdown(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/([`*_[\]<>])/g, "\\$1")
    .replace(/^#/gm, "\\#");
}

function resolveUrl(url: string, baseUrl: string): string {
  try {
    return new URL(url, baseUrl).href;
  } catch {
    return url;
  }
}

function markdownImage(alt: string, url: string, baseUrl: string): string {
  return `![${alt}](<${resolveUrl(url, baseUrl)}>)`;
}

export function getExamMarkdownText(
  sectionGroups: ExamSectionGroup[],
  baseUrl = "https://sparky.invalid/"
): string {
  return flattenQuestions(sectionGroups)
    .map((question) => {
      const lines = [
        `## Q${question.number}`,
        "",
        escapeMarkdown(question.prompt)
      ];

      for (const [index, imageUrl] of (question.imageUrls ?? []).entries()) {
        lines.push("", markdownImage(`Question ${question.number} image ${index + 1}`, imageUrl, baseUrl));
      }

      lines.push("");
      for (const letter of LETTERS) {
        lines.push(`- **${letter}.** ${escapeMarkdown(question.options[letter])}`);
        const imageUrl = question.optionImageUrls?.[letter];
        if (imageUrl) {
          lines.push(`  ${markdownImage(`Question ${question.number} option ${letter}`, imageUrl, baseUrl)}`);
        }
      }

      lines.push(
        "",
        `**Answer:** **${question.answer}.** ${escapeMarkdown(question.options[question.answer])}`,
        "",
        `**Explanation:** ${escapeMarkdown(question.explanation)}`
      );

      return lines.join("\n");
    })
    .join("\n\n");
}

export function getExamExportFilename(
  examId: string,
  testNumber: number,
  extension: ExportExtension
): string {
  const slug = examId
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "exam";
  return `${slug}-test-${Math.max(1, testNumber)}.${extension}`;
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

export function downloadExamMarkdown(
  sectionGroups: ExamSectionGroup[],
  filename: string,
  baseUrl = window.location.href
): void {
  const markdown = getExamMarkdownText(sectionGroups, baseUrl);
  downloadBlob(new Blob([markdown], { type: "text/markdown;charset=utf-8" }), filename);
}

function questionImageUrls(question: ExamQuestion): string[] {
  return [
    ...(question.imageUrls ?? []),
    ...LETTERS.flatMap((letter) => question.optionImageUrls?.[letter] ?? [])
  ];
}

function imageOrLink(
  imageUrl: string,
  imageDataUrls: ReadonlyMap<string, string>,
  baseUrl: string,
  margin: [number, number, number, number]
): Content {
  const dataUrl = imageDataUrls.get(imageUrl);
  if (dataUrl) {
    return { image: dataUrl, fit: [460, 220], alignment: "center", margin };
  }

  const absoluteUrl = resolveUrl(imageUrl, baseUrl);
  return {
    text: [
      { text: "Image: ", bold: true },
      { text: absoluteUrl, link: absoluteUrl, color: "#8a6320", decoration: "underline" }
    ],
    fontSize: 8.5,
    margin
  };
}

function buildQuestionPdfContent(
  question: ExamQuestion,
  imageDataUrls: ReadonlyMap<string, string>,
  baseUrl: string
): Content[] {
  const content: Content[] = [
    {
      stack: [
        { text: `Q${question.number}`, style: "questionNumber" },
        { text: question.prompt, style: "questionPrompt" }
      ],
      unbreakable: true,
      margin: [0, 0, 0, 8]
    }
  ];

  for (const imageUrl of question.imageUrls ?? []) {
    content.push(imageOrLink(imageUrl, imageDataUrls, baseUrl, [0, 2, 0, 10]));
  }

  for (const letter of LETTERS) {
    content.push({
      text: [
        { text: `${letter}. `, bold: true, color: "#342712" },
        { text: question.options[letter] }
      ],
      style: "option"
    });
    const imageUrl = question.optionImageUrls?.[letter];
    if (imageUrl) {
      content.push(imageOrLink(imageUrl, imageDataUrls, baseUrl, [18, 2, 0, 8]));
    }
  }

  content.push({
    table: {
      widths: ["*"],
      body: [[{
        stack: [
          {
            text: [
              { text: "Answer: ", bold: true, color: "#315c45" },
              { text: `${question.answer}. ${question.options[question.answer]}`, bold: true }
            ],
            margin: [0, 0, 0, 5]
          },
          {
            text: [
              { text: "Explanation: ", bold: true },
              { text: question.explanation }
            ]
          }
        ],
        fillColor: "#f7f3e9",
        margin: [10, 9, 10, 9]
      }]]
    },
    layout: {
      hLineColor: () => "#d9ccb2",
      vLineColor: () => "#d9ccb2",
      hLineWidth: () => 0.8,
      vLineWidth: () => 0.8,
      paddingLeft: () => 0,
      paddingRight: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0
    },
    margin: [0, 8, 0, 22]
  });

  return content;
}

export function getExamPdfDefinition(
  sectionGroups: ExamSectionGroup[],
  imageDataUrls: ReadonlyMap<string, string> = new Map(),
  baseUrl = "https://sparky.invalid/"
): TDocumentDefinitions {
  const content: Content[] = flattenQuestions(sectionGroups).map((question) => ({
    stack: buildQuestionPdfContent(question, imageDataUrls, baseUrl),
    // Text-only questions comfortably fit on A4 and read better without a
    // page turn in the middle. Image questions can be taller than one page,
    // so those remain free to flow naturally.
    unbreakable: questionImageUrls(question).length === 0
  }));

  return {
    pageSize: "A4",
    pageMargins: [52, 50, 52, 48],
    content,
    footer: (currentPage, pageCount) => ({
      text: `Page ${currentPage} of ${pageCount}`,
      alignment: "center",
      color: "#817765",
      fontSize: 8,
      margin: [0, 16, 0, 0]
    }),
    defaultStyle: {
      font: "Roboto",
      fontSize: 10.5,
      lineHeight: 1.28,
      color: "#211d18"
    },
    styles: {
      questionNumber: {
        fontSize: 15,
        bold: true,
        color: "#8a6320",
        margin: [0, 0, 0, 4]
      },
      questionPrompt: {
        fontSize: 11.5,
        bold: true,
        lineHeight: 1.3
      },
      option: {
        margin: [10, 0, 0, 5],
        lineHeight: 1.25
      }
    }
  };
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error ?? new Error("Could not read exam image"));
    reader.readAsDataURL(blob);
  });
}

async function loadImageDataUrl(imageUrl: string, baseUrl: string): Promise<string | null> {
  try {
    const response = await fetch(resolveUrl(imageUrl, baseUrl));
    if (!response.ok) return null;
    const blob = await response.blob();
    if (!/^image\/(?:png|jpe?g)$/i.test(blob.type)) return null;
    return await blobToDataUrl(blob);
  } catch {
    return null;
  }
}

async function loadExamImages(
  sectionGroups: ExamSectionGroup[],
  baseUrl: string
): Promise<Map<string, string>> {
  const urls = Array.from(new Set(flattenQuestions(sectionGroups).flatMap(questionImageUrls)));
  const loaded = await Promise.all(
    urls.map(async (url) => [url, await loadImageDataUrl(url, baseUrl)] as const)
  );
  return new Map(
    loaded.filter((entry): entry is readonly [string, string] => entry[1] !== null)
  );
}

export async function downloadExamPdf(
  sectionGroups: ExamSectionGroup[],
  filename: string,
  baseUrl = window.location.href
): Promise<void> {
  const [pdfMakeModule, vfsModule, imageDataUrls] = await Promise.all([
    import("pdfmake/build/pdfmake"),
    import("pdfmake/build/vfs_fonts"),
    loadExamImages(sectionGroups, baseUrl)
  ]);
  const pdfMake = pdfMakeModule.default;
  pdfMake.addVirtualFileSystem(vfsModule.default);
  await pdfMake.createPdf(getExamPdfDefinition(sectionGroups, imageDataUrls, baseUrl)).download(filename);
}
