"use client";
import { useState } from "react";

const BAR = [
  ["Fear of judgement", "I worry about what people will think if I tell them.", "Most people respond with more care than we expect. I can start with one person I trust."],
  ["Self-reliance", "“I should handle this on my own.”", "Everyone needs support sometimes. Asking for it is a skill we can all practise."],
  ["Loss of face", "Asking for help can feel like it reflects badly on me and my family.", "Looking after my emotional health is a way of looking after my family too."],
];

export default function Barriers() {
  const [on, setOn] = useState<boolean[]>(BAR.map(() => false));
  return (
    <div className="flip">
      {BAR.map((b, i) => (
        <button key={b[0]} className="fl" aria-pressed={on[i]} onClick={() => setOn(on.map((v, j) => (j === i ? !v : v)))}>
          <span className="a">{b[0]}</span>
          <span className="s"><em className="dn">{b[1]}</em><em className="up">{b[2]}</em></span>
          <span className="side">{on[i] ? "above the line" : "below the line"}</span>
        </button>
      ))}
    </div>
  );
}
