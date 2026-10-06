import type { Metadata } from "next";
import { LINES } from "@/lib/lines";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Support" };

export default function Support() {
  return (
    <article className="page">
      <section className="top">
        <h1>Support</h1>
        <p className="lede">If things feel heavy right now, you don&apos;t have to wait for a workshop. You can reach these lines any time.</p>
        <div className="lines">
          {LINES.map((l) => (
            <a key={l.tel} href={`tel:${l.tel}`}><span>{l.name}<small>{l.note}</small></span><span className="n">{l.num}</span></a>
          ))}
        </div>
      </section>
      <Reveal>
        <h2>How sessions stay safe</h2>
        <p className="mute">Everyone has a short, private chat before joining. If a group isn&apos;t the best fit, we help you find support that is. Groups are led by counsellors under clinical supervision. Your data is handled under Malaysia&apos;s Personal Data Protection Act 2010, with your consent.</p>
      </Reveal>
    </article>
  );
}
