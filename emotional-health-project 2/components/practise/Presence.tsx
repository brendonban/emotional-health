"use client";
import { useState } from "react";

const TIPS = {
  head: ["Your head could use a turn.", "Pause and name one small next step."],
  heart: ["Your heart could use attention.", "Name what you feel in one word."],
  body: ["Your body is asking to be noticed.", "Feel your feet on the floor. Try the breathing below."],
};

export default function Presence() {
  const [h, setH] = useState(8), [r, setR] = useState(4), [b, setB] = useState(3);
  const mn = Math.min(h, r, b), mx = Math.max(h, r, b), ok = mx - mn <= 2 && mn >= 4;
  const low = mn === b ? "body" : mn === r ? "heart" : "head";
  const slider = (id: string, label: string, sub: string, v: number, set: (n: number) => void) => (
    <div className="sl">
      <label htmlFor={id}>{label} <span>{sub}</span></label>
      <input id={id} type="range" min={0} max={10} value={v} onChange={(e) => set(+e.target.value)} />
    </div>
  );
  return (
    <div className="venn-wrap">
      <svg className="venn" viewBox="0 0 300 300" role="img" aria-label="Head, heart and body circles">
        <circle className="c" cx="150" cy="108" r={44 + h * 4} />
        <circle className="c" cx="196" cy="186" r={44 + r * 4} />
        <circle className="c" cx="104" cy="186" r={44 + b * 4} />
        <circle id="core" cx="150" cy="160" r={ok ? 22 : 0} />
        <text x="150" y="58" textAnchor="middle">head</text>
        <text x="236" y="236" textAnchor="middle">heart</text>
        <text x="64" y="236" textAnchor="middle">body</text>
      </svg>
      <div>
        {slider("sH", "Head", "thinking", h, setH)}
        {slider("sR", "Heart", "feeling", r, setR)}
        {slider("sB", "Body", "sensing", b, setB)}
        <div className="out" aria-live="polite">
          {ok ? <><b>Close to presence.</b>Head, heart and body are in balance.</> : <><b>{TIPS[low][0]}</b>{TIPS[low][1]}</>}
        </div>
      </div>
    </div>
  );
}
