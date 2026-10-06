"use client";
import { useRef, useState } from "react";
import { SESSIONS } from "@/lib/sessions";

export default function SessionStepper({ dates }: { dates: string[] }) {
  const [cur, setCur] = useState(0);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);
  const N = SESSIONS.length, s = SESSIONS[cur];
  const go = (i: number, focus = false) => { setCur(i); if (focus) btns.current[i]?.focus(); };
  return (
    <div className="stepper">
      <div className="track" role="tablist">
        <i className="fill" style={{ width: `${(cur * 100) / N}%` }} />
        {SESSIONS.map((x, i) => (
          <button
            key={x.title}
            ref={(el) => { btns.current[i] = el; }}
            role="tab"
            aria-selected={i === cur}
            tabIndex={i === cur ? 0 : -1}
            className={i < cur ? "past" : ""}
            onClick={() => go(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" && i < N - 1) go(i + 1, true);
              if (e.key === "ArrowLeft" && i > 0) go(i - 1, true);
            }}
          >
            <span className="k" />
            <span className="lbl">{x.label}</span>
            <span className="ttl">{x.short}</span>
          </button>
        ))}
      </div>
      <div className="sdet" role="tabpanel" aria-live="polite">
        <div className="in" key={cur}>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <p className="small" style={{ color: "var(--fg)" }}>{dates[cur] || "Date to be confirmed"} · {s.kind}</p>
          <div className="nav2">
            <button disabled={cur === 0} onClick={() => go(cur - 1)}>Previous</button>
            <button disabled={cur === N - 1} onClick={() => go(cur + 1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
