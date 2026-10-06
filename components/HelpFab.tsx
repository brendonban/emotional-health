"use client";
import { useEffect, useState } from "react";
import { LINES } from "@/lib/lines";

export default function HelpFab() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <button className="fab" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(!open)}>
        <i />
        {open ? "Close" : "Need to talk now?"}
      </button>
      <div className="drawer" id="drawer" hidden={!open}>
        <h3>Support lines in Malaysia</h3>
        <div className="lines">
          {LINES.map((l) => (
            <a key={l.tel} href={`tel:${l.tel}`}>
              <span>{l.short}</span>
              <span className="n">{l.num}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
