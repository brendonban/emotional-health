/**
 * Everything you used to change in the Console lives here.
 * Edit this file, then redeploy (or save while `npm run dev` is running).
 */
export const site = {
  /** Which phase shows the "Now" tag. -1 = not started, 0–4 = the phases below. */
  phase: 0,

  /** Dates for the introduction and sessions 1–4. Leave "" for "Date to be confirmed". */
  dates: ["", "", "", "", ""],

  /** Pages you can switch on and off. Hidden pages return 404 and aren't built. */
  pages: {
    practise: false,
    progress: false,
    /** The GLF proposal deck. Keep false on any public deployment. */
    slides: false,
  },

  /** Pilot progress numbers and targets (Progress page). */
  impact: { reached: 0, campuses: 0, workshops: 0, rating: 0 },
  targets: { reached: 150, campuses: 3, workshops: 10, rating: 4 },

  /** Sign-up form. A button appears on Home and Schedule when url is set (must start with https://). */
  signup: { url: "", label: "Register your interest" },

  /** Open science links. Items without a link show as "Planned". */
  openScience: { prereg: "", materials: "", data: "", code: "", report: "" },
};

export type Site = typeof site;
