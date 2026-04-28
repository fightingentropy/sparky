export type Tutorial = {
  id: string;
  videoId: string;
  title: string;
  channel: string;
  sourceUrl: string;
  category: string;
  workplaceUse: string;
  practiceFocus: string[];
};

export const TUTORIALS: Tutorial[] = [
  {
    id: "internal-90-trunking",
    videoId: "NF6BWB--T8w",
    title: "How to Make an Internal 90 Bend in Electrical Trunking using an Angle Grinder",
    channel: "Sparky Help",
    sourceUrl: "https://youtu.be/NF6BWB--T8w",
    category: "Trunking",
    workplaceUse: "Internal corners in metal trunking where a clean measured bend saves fittings and keeps the run tidy.",
    practiceFocus: [
      "Marking out the corner before cutting",
      "Keeping grinder cuts square and controlled",
      "Dressing sharp edges before installation"
    ]
  },
  {
    id: "trunking-45-set",
    videoId: "6qiNOQ5GpUI",
    title: "How to Make A 45° Set in Electrical Trunking Using an Angle Grinder to Measurement.",
    channel: "Sparky Help",
    sourceUrl: "https://youtu.be/6qiNOQ5GpUI",
    category: "Trunking",
    workplaceUse: "Measured offsets around steelwork, door heads, beams, or service clashes without losing alignment.",
    practiceFocus: [
      "Transferring the offset measurement accurately",
      "Keeping both sides of the set in line",
      "Checking lid fit before fixing permanently"
    ]
  },
  {
    id: "tray-gusset-bend",
    videoId: "wSgQEFFO-tk",
    title: "Make a (45-45) 90 Gusset Bend in Electrical Cable Tray In One Piece",
    channel: "Sparky Help",
    sourceUrl: "https://www.youtube.com/watch?v=wSgQEFFO-tk",
    category: "Cable tray",
    workplaceUse: "One-piece tray direction changes where a fabricated bend is faster or neater than separate bought bends.",
    practiceFocus: [
      "Marking both 45° cuts from the centre line",
      "Maintaining tray width through the bend",
      "Deburring and finishing before cable install"
    ]
  },
  {
    id: "steel-conduit-measurement",
    videoId: "yojHxQZYiFc",
    title: "How to bend steel conduit to an exact measurement. - Apprentice electrician essentials",
    channel: "eFIXX",
    sourceUrl: "https://youtu.be/yojHxQZYiFc",
    category: "Conduit",
    workplaceUse: "Accurate steel conduit bends for exposed work, plant rooms, containment drops, and repeated offsets.",
    practiceFocus: [
      "Accounting for bend take-up",
      "Measuring to the finished position",
      "Checking the bend before threading or fixing"
    ]
  },
  {
    id: "fast-unistrut-trapeze",
    videoId: "7XzMzWilFyk",
    title: "FASTER UNISTRUT TRAPEZE with DELIGO MASONRY SCREWS #shorts",
    channel: "eFIXX",
    sourceUrl: "https://youtu.be/7XzMzWilFyk",
    category: "Supports",
    workplaceUse: "Fast trapeze support installation for tray, basket, pipe, and lightweight services where the fixing is specified.",
    practiceFocus: [
      "Setting out rod centres before drilling",
      "Confirming substrate and fixing rating",
      "Keeping Unistrut level and square"
    ]
  }
];
