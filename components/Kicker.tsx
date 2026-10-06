"use client";
import { useEffect, useState } from "react";

const KQ = [
  "a place for the things left unsaid",
  "“I don’t know who else to ask.”",
  "“Is it normal to feel this anxious?”",
  "“I keep putting it off.”",
  "“I’ve been carrying this alone for a while.”",
];

export default function Kicker() {
  const [text, setText] = useState(KQ[0]);
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setReduce(true); return; }
    let alive = true, ki = 0, timer: ReturnType<typeof setTimeout>;
    const type = () => {
      const s = KQ[ki]; let n = 0;
      const add = () => {
        if (!alive) return;
        setText(s.slice(0, ++n));
        if (n < s.length) timer = setTimeout(add, 38);
        else timer = setTimeout(del, 2600);
      };
      const del = () => {
        if (!alive) return;
        n--; setText(s.slice(0, n));
        if (n > 0) timer = setTimeout(del, 16);
        else { ki = (ki + 1) % KQ.length; timer = setTimeout(type, 300); }
      };
      add();
    };
    setText(""); type();
    return () => { alive = false; clearTimeout(timer); };
  }, []);
  return (
    <p className="kick">
      <span className="q">{text}</span>
      {!reduce && <span className="cur" />}
    </p>
  );
}
