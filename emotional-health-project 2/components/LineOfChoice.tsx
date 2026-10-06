"use client";
import { useEffect, useRef, useState } from "react";

const UP = ["notice", "own it", "ask for help", "choose again"];
const DOWN = ["blame", "defend", "deny", "justify"];
const clamp = (v: number) => Math.min(0.88, Math.max(0.12, v));

export default function LineOfChoice() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0.72);
  const [touched, setTouched] = useState(false);
  const [drag, setDrag] = useState(false);
  const [on, setOn] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => requestAnimationFrame(() => setOn(true))); return () => cancelAnimationFrame(id); }, []);

  const at = (y: number) => {
    const r = ref.current!.getBoundingClientRect();
    setPos(clamp((y - r.top) / r.height));
  };
  const d = pos - 0.5;
  const msg =
    d > 0.1 ? <><b>Below the line.</b> Blame, defend, deny and justify are automatic, and human. Noticing them is the first step back up.</>
    : Math.abs(d) <= 0.1 ? <><b>On the line.</b> This is the moment of choice: respond, rather than react.</>
    : <><b>Above the line.</b> Noticing the feeling, owning the response, and asking for help.</>;

  return (
    <>
      <div
        ref={ref}
        className={`choice ${on ? "on" : ""} ${drag ? "drag" : ""}`}
        aria-label="The line of choice"
        onPointerDown={(e) => { setDrag(true); setTouched(true); e.currentTarget.setPointerCapture(e.pointerId); at(e.clientY); }}
        onPointerMove={(e) => drag && at(e.clientY)}
        onPointerUp={() => setDrag(false)}
        onPointerCancel={() => setDrag(false)}
      >
        <div className="trail" style={{ top: `${Math.min(pos, 0.5) * 100}%`, height: `${Math.abs(d) * 100}%` }} />
        <div className={`w up ${d < -0.1 ? "lit" : ""}`} style={{ opacity: d < 0 ? 1 : 0.3 }}>
          {UP.map((w, i) => <span key={w} style={{ transform: d < -0.1 ? `translateY(${-3 - (i % 2) * 3}px)` : "none" }}>{w}</span>)}
        </div>
        <div className="ln" />
        <span className="lab">the line of choice</span>
        <div className="w dn" style={{ opacity: d > 0 ? 1 : 0.3 }}>
          {DOWN.map((w, i) => <span key={w} style={{ transform: d > 0.1 ? `translateY(${2 + (i % 2) * 3}px)` : "none" }}>{w}</span>)}
        </div>
        <div
          className={`dot ${touched ? "" : "idle"}`}
          role="slider"
          tabIndex={0}
          aria-label="Where are you right now? Drag up or down, or use the arrow keys."
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round((1 - pos) * 100)}
          style={{ top: `${pos * 100}%` }}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp") { setTouched(true); setPos((p) => clamp(p - 0.05)); e.preventDefault(); }
            if (e.key === "ArrowDown") { setTouched(true); setPos((p) => clamp(p + 0.05)); e.preventDefault(); }
          }}
        />
        <span className="hint" style={{ top: `calc(${pos * 100}% + 22px)`, opacity: touched ? 0 : 1 }}>drag me up</span>
      </div>
      <p className="choice-msg" aria-live="polite">{msg}</p>
    </>
  );
}
