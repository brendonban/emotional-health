export const PHASES = [
  ["Oct 2026", "Co-design", "Ruang and GLF adapt the framework and draft the sessions."],
  ["Nov–Dec 2026", "Pilot", "The introductory session, then four sessions with a first group."],
  ["Q1 2027", "Refine and train", "Improve the sessions and train new facilitators."],
  ["Q2 2027", "Scale up", "More sessions with campus and community partners."],
  ["Q3 2027", "Evaluate and share", "A joint report and a plan for year two."],
] as const;

export const SESSIONS = [
  { title: "Introduction to emotional health", label: "Start here", short: "Introduction", kind: "1.5 hours", desc: "Presence check-in, the line of choice, the ladder, and one step forward. Open to everyone." },
  { title: "Session 1: Presence", label: "Session 1", short: "Presence", kind: "Part of the four-session programme", desc: "Notice which centre you lean on: head, heart or body." },
  { title: "Session 2: The line of choice", label: "Session 2", short: "The line of choice", kind: "Part of the four-session programme", desc: "Catch blame, defend, deny and justify, and choose again." },
  { title: "Session 3: Moving up the levels", label: "Session 3", short: "Moving up the levels", kind: "Part of the four-session programme", desc: "Spot the coping strategies and defences that hold you back." },
  { title: "Session 4: Leading above the line", label: "Session 4", short: "Leading above the line", kind: "Part of the four-session programme", desc: "Lead by example with family, friends and peers." },
];
