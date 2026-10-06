"use client";
import { useEffect, useRef } from "react";
import { mountPlayer } from "@/lib/slidePlayer";

export default function SlideDeck({ html }: { html: string }) {
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = stage.current;
    if (!root) return;
    // Run the slides' own small scripts (cycling quotes, chart animation) once.
    if (!root.dataset.ran) root.querySelectorAll("script").forEach((old) => {
      const s = document.createElement("script");
      s.textContent = old.textContent;
      old.replaceWith(s);
    });
    root.dataset.ran = "1";
    return mountPlayer();
  }, []);
  return (
    <>
      <div className="frame" id="frame" tabIndex={0} aria-label="Slide deck">
        <div id="stage" ref={stage} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="progress"><i id="prog" /></div>
      <div className="controls">
        <button id="prev">Back</button>
        <span className="count" id="count">1 / 16</span>
        <button id="next">Next</button>
        <span className="sp" />
        <button id="nt">Notes</button>
        <button id="fs">Full screen</button>
      </div>
      <div id="notes" hidden />
    </>
  );
}
