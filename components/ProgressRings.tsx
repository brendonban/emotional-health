"use client";
import { useState } from "react";
import { useSeen } from "@/components/Reveal";

type M = { k: string; l: string; u: string; sh: "dot" | "big" | "sq" | "star"; v: number; g: number };
const R = [128, 104, 80, 56];

export default function ProgressRings({ impact, targets }: { impact: Record<string, number>; targets: Record<string, number> }) {
  const M: M[] = [
    { k: "reached", l: "Young adults reached", u: "Each dot is one young adult.", sh: "dot", v: impact.reached || 0, g: targets.reached || 0 },
    { k: "campuses", l: "University campuses", u: "Each circle is one campus.", sh: "big", v: impact.campuses || 0, g: targets.campuses || 0 },
    { k: "workshops", l: "Workshops delivered", u: "Each square is one workshop.", sh: "sq", v: impact.workshops || 0, g: targets.workshops || 0 },
    { k: "rating", l: "Average rating", u: "Out of 5, from participants.", sh: "star", v: impact.rating || 0, g: targets.rating || 0 },
  ];
  const [sel, setSel] = useState(0);
  const [ref, seen] = useSeen<HTMLDivElement>();
  const m = M[sel];
  const pct = (x: M) => (x.g ? Math.min(1, x.v / x.g) : 0);

  let units: React.ReactNode[] = [];
  if (m.sh === "dot") { const n = Math.max(m.g, Math.round(m.v)), sz = n > 200 ? 8 : 12; units = Array.from({ length: n }, (_, j) => <i key={j} className={j < m.v ? "on" : ""} style={{ width: sz, height: sz }} title={j < m.v ? `Young adult ${j + 1}` : "Still to reach"} />); }
  else if (m.sh === "big") units = Array.from({ length: Math.max(m.g, m.v) }, (_, j) => <i key={j} className={j < m.v ? "on" : ""} style={{ width: 44, height: 44 }} title={`Campus ${j + 1}`} />);
  else if (m.sh === "sq") units = Array.from({ length: Math.max(m.g, m.v) }, (_, j) => <i key={j} className={j < m.v ? "on" : ""} style={{ width: 26, height: 26 }} title={`Workshop ${j + 1}`} />);
  else units = Array.from({ length: 5 }, (_, j) => { const f = Math.max(0, Math.min(1, m.v - j)); return <i key={j} style={{ width: 30, height: 30 }} title={`${j + 1} of 5`}><b style={{ width: `${f * 100}%` }} /></i>; });

  return (
    <div className="pp" ref={ref}>
      <svg className="rings" viewBox="0 0 300 300" role="img" aria-label="Pilot progress rings">
        {M.map((x, i) => {
          const len = 2 * Math.PI * R[i], p = pct(x);
          return (
            <g key={x.k} transform="rotate(-90 150 150)" className={i === sel ? "sel" : ""} onMouseEnter={() => setSel(i)} onClick={() => setSel(i)}>
              <circle className="tr" cx="150" cy="150" r={R[i]} />
              <circle className="pv" cx="150" cy="150" r={R[i]} strokeDasharray={len}
                style={{ strokeDashoffset: seen ? len * (1 - p) : len, stroke: p ? undefined : "transparent", transitionDelay: `${i * 150}ms` }} />
              <circle className="hit" cx="150" cy="150" r={R[i]} />
            </g>
          );
        })}
        <text className="cv" x="150" y="152" textAnchor="middle">{m.k === "rating" ? (m.v ? m.v.toFixed(1) : "0") : m.v}</text>
        <text className="cl" x="150" y="174" textAnchor="middle">
          {m.k === "rating" ? (m.g ? `target ${m.g.toFixed(1)}` : "") : m.g ? `${Math.round(pct(m) * 100)}% of target` : ""}
        </text>
      </svg>
      <div>
        <div className="ppl" role="tablist">
          {M.map((x, i) => (
            <button key={x.k} role="tab" aria-selected={i === sel} tabIndex={i === sel ? 0 : -1}
              onMouseEnter={() => setSel(i)} onClick={() => setSel(i)}
              onKeyDown={(e) => { if (e.key === "ArrowDown" && i < 3) { setSel(i + 1); e.preventDefault(); } if (e.key === "ArrowUp" && i > 0) { setSel(i - 1); e.preventDefault(); } }}>
              <i /><span>{x.l}</span>
              <b>{x.k === "rating" ? <>{x.v.toFixed(1)}<span> / 5</span></> : <>{x.v}<span> / {x.g}</span></>}</b>
            </button>
          ))}
        </div>
        <div className="units" aria-live="polite">
          <div className="cap">{m.u}{m.v ? "" : " Nothing logged yet."}</div>
          <div className={`ugrid ${m.sh === "sq" ? "sq" : m.sh === "star" ? "star" : ""}`}>{units}</div>
        </div>
      </div>
    </div>
  );
}
