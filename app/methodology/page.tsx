import type { Metadata } from "next";
import { site } from "@/site.config";
import { safeUrl } from "@/lib/safe";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Methodology" };

const MEASURES = [
  ["Before and after", "Above & Below the Line card sort", "GLF"],
  ["Before and after", "Emotional Health Level card sort", "GLF"],
  ["Before and after", "Global Emotional Intelligence Test, 40 items", "GLF"],
  ["Before and after", "DASS-21, depression, anxiety and stress", "validated scale"],
  ["Every session", "Attendance and a rating out of 5", ""],
];

const OPEN = [
  ["prereg", "Preregistration", "Our questions, measures and analysis plan, published before data collection starts."],
  ["materials", "Open materials", "Session outlines and facilitator guides, shared with Global Leadership Foundation's permission and credit."],
  ["data", "Open data", "De-identified data, shared only where participants consented and ethics approval allows."],
  ["code", "Open code", "The analysis scripts, so anyone can reproduce our results."],
  ["report", "Open reporting", "A public report with all results, including any that show no change."],
] as const;

export default function Methodology() {
  return (
    <article className="page">
      <section className="top">
        <h1>Methodology</h1>
        <p className="lede">How we&apos;ll find out whether Above the Line helps, and how we&apos;ll share what we learn.</p>
      </section>
      <section style={{ paddingTop: 64 }}>
        <h2>Design</h2>
        <p className="mute">The pilot year is a single-group, before-and-after evaluation. We look at two things: how many young adults the introductory sessions reach, and whether people who complete the four-session programme change over that time.</p>
      </section>
      <Reveal>
        <h2>Who takes part</h2>
        <p className="mute">Young adults aged 18 to 30 in the Klang Valley, reached through university campuses, community partners and Ruang&apos;s own programmes. Everyone has a short, private chat before joining. If a group isn&apos;t the best fit, we help them find support that is.</p>
      </Reveal>
      <Reveal>
        <h2>What we measure</h2>
        <div className="mlist">
          {MEASURES.map((m) => (
            <div key={m[1]}><span>{m[0]}</span><p>{m[1]}{m[2] && <em>{m[2]}</em>}</p></div>
          ))}
        </div>
        <p className="small mute" style={{ marginTop: 14 }}>&quot;Before&quot; is the first session and &quot;after&quot; is the last. Taking part in measurement is optional and needs your consent.</p>
      </Reveal>
      <Reveal>
        <h2>How we analyse it</h2>
        <p className="mute">We compare each person&apos;s before and after scores, and report the size of any change with its uncertainty, not just whether it&apos;s statistically significant. Everyone who joins is included in what we report, whether or not they come to every session.</p>
      </Reveal>
      <Reveal>
        <h2>What a pilot can&apos;t tell us</h2>
        <p className="mute">Without a comparison group, a pilot can&apos;t prove the programme caused any change. Groups are small, and most measures are self-reported. The pilot&apos;s job is to show whether the programme is workable and promising enough to test properly.</p>
      </Reveal>
      <Reveal>
        <h2>Open science</h2>
        <p className="mute">We want others to be able to check, reuse and build on this work.</p>
        <div className="os">
          {OPEN.map(([k, t, d]) => {
            const u = safeUrl(site.openScience[k]);
            return (
              <div key={k} className={`it ${u ? "done" : ""}`}>
                <span className="k" />
                <div><h3>{t}</h3><p>{d}</p></div>
                <span className="st">{u ? <a href={u} target="_blank" rel="noopener">View</a> : "Planned"}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </article>
  );
}
