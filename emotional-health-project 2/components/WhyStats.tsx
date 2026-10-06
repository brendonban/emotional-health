"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSeen } from "@/components/Reveal";

const DATA: [string, number][] = [["16–19", 7.9], ["20–29", 7.6], ["30–39", 4.1], ["40–49", 3.1], ["50–59", 2.4], ["60+", 3.1]];
const MAX = 9, AVG = 4.6;
const NUMS = [
  { n: 2, f: (k: number) => `${k}×`, t: "more adults living with depression in 2023 than in 2019" },
  { n: 2, f: (k: number) => `1 in ${k}`, t: "people living with depression had thoughts of self-harm or suicide" },
  { n: 3, f: (k: number) => `1 in ${k}`, t: "young people reach out for professional support" },
];

function Count({ n, f, go, delay }: { n: number; f: (k: number) => string; go: boolean; delay: number }) {
  const [k, setK] = useState(n);
  useEffect(() => {
    if (!go || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0; setK(0);
    let t = setTimeout(function tick() { i++; setK(Math.min(i, n)); if (i < n) t = setTimeout(tick, 260); }, 300 + delay);
    return () => clearTimeout(t);
  }, [go, n, delay]);
  return <strong>{f(k)}</strong>;
}

export default function WhyStats() {
  const [ref, seen] = useSeen<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="bars">
        {DATA.map(([age, v]) => (
          <div key={age} className={`b ${v > AVG ? "hot" : ""}`}>
            <span>{age}</span>
            <div className="t">
              <div className="f" style={{ width: seen ? `${(v / MAX) * 100}%` : 0 }} />
              <i className="avg" style={{ left: `${(AVG / MAX) * 100}%` }} />
            </div>
            <span className="v">{v}%</span>
          </div>
        ))}
      </div>
      <div className="nums">
        {NUMS.map((x, i) => (
          <div key={i}><Count n={x.n} f={x.f} go={seen} delay={i * 200} /><span>{x.t}</span></div>
        ))}
      </div>
      <p className="small" style={{ marginTop: 24 }}>If any of this feels close to home, <Link href="/support">support is available any time</Link>.</p>
      <p className="small mute" style={{ marginTop: 8 }}>NHMS 2023 (Institute for Public Health, 2024); Malaysian Youth Mental Health Index 2023 (IYRES and UNICEF).</p>
    </div>
  );
}
