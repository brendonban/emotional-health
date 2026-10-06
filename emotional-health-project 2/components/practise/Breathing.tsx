"use client";
import { useEffect, useRef, useState } from "react";

const PH: [string, number][] = [["Breathe in", 1.9], ["Hold", 1.9], ["Breathe out", 1], ["Hold", 1]];
const STEPS = ["Name one feeling each evening", "Pause before I reply when upset", "Tell one person how I'm really doing", "Walk 10 minutes without my phone", "Notice when I blame, and choose again"];

export default function Breathing() {
  const [say, setSay] = useState("In for 4, hold for 4, out for 4.");
  const [scale, setScale] = useState(1);
  const [running, setRunning] = useState(false);
  const [mine, setMine] = useState<string | null>(null);
  const t = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => { try { setMine(localStorage.getItem("ehp-step")); } catch {} return () => clearTimeout(t.current); }, []);
  const stop = (m: string) => { clearTimeout(t.current); setRunning(false); setScale(1); setSay(m); };
  const start = () => {
    setRunning(true);
    let i = 0, n = 0;
    const tick = () => {
      setSay(PH[i][0]); setScale(PH[i][1]);
      i = (i + 1) % 4; if (i === 0) n++;
      t.current = setTimeout(n >= 4 ? () => stop("Well done.") : tick, 4000);
    };
    tick();
  };
  const choose = (s: string) => { setMine(s); try { localStorage.setItem("ehp-step", s); } catch {} };

  return (
    <>
      <div className="breath">
        <div className="orb-w"><div className="orb" style={{ transform: `scale(${scale})` }} /></div>
        <div>
          <div className="say" aria-live="polite">{say}</div>
          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn" onClick={() => (running ? stop("In for 4, hold for 4, out for 4.") : start())}>{running ? "Stop" : "Start"}</button>
          </div>
        </div>
      </div>
      <h3 style={{ marginTop: 48 }}>My step this week</h3>
      <div className="chips">
        {STEPS.map((s) => <button key={s} aria-pressed={mine === s} onClick={() => choose(s)}>{s}</button>)}
      </div>
      <p className="small mute" style={{ marginTop: 12 }} aria-live="polite">{mine ? "Saved on this device." : ""}</p>
    </>
  );
}
