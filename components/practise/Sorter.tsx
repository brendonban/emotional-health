"use client";
import { useState } from "react";

const CARDS: [string, "above" | "below", string][] = [
  ["It's their fault I feel like this.", "below", "Blame"],
  ["I notice I'm feeling anxious right now.", "above", "Noticing the feeling"],
  ["I'm fine. Nothing's wrong.", "below", "Deny"],
  ["I could talk to someone I trust about this.", "above", "Asking for help"],
  ["I only snapped because I'm so tired.", "below", "Justify"],
  ["I reacted badly, and I can respond differently.", "above", "Owning the response"],
  ["You don't understand what I'm dealing with.", "below", "Defend"],
  ["What is this feeling trying to tell me?", "above", "Curiosity, the inner observer"],
];

export default function Sorter() {
  const [ans, setAns] = useState<Record<number, "above" | "below">>({});
  const n = Object.keys(ans).length, ok = Object.entries(ans).filter(([i, v]) => CARDS[+i][1] === v).length;
  return (
    <>
      <div className="sort">
        {CARDS.map((c, i) => {
          const a = ans[i], right = a === c[1];
          return (
            <div key={c[0]} className="card">
              <q>{c[0]}</q>
              <div className="pick">
                {(["above", "below"] as const).map((v) => (
                  <button key={v} aria-pressed={a === v} onClick={() => setAns({ ...ans, [i]: v })}>{v === "above" ? "Above" : "Below"}</button>
                ))}
              </div>
              {a && <p className="why">{right ? <><mark>Yes</mark> {c[2]}, {c[1]} the line.</> : <>Not quite. {c[2]} sits {c[1]} the line.</>}</p>}
            </div>
          );
        })}
      </div>
      <div className="tally">
        <span>{n < CARDS.length ? `${n} of ${CARDS.length}` : `You matched ${ok} of ${CARDS.length}`}</span>
        <button onClick={() => setAns({})}>Start again</button>
      </div>
    </>
  );
}
