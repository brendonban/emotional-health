import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import Reveal from "@/components/Reveal";
import Presence from "@/components/practise/Presence";
import Sorter from "@/components/practise/Sorter";
import Breathing from "@/components/practise/Breathing";

export const metadata: Metadata = { title: "Practise" };

export default function Practise() {
  if (!site.pages.practise) notFound();
  return (
    <article className="page">
      <section className="top">
        <h1>Practise</h1>
        <p className="lede">Three short exercises from the workshops. Try them any time.</p>
      </section>
      <Reveal className="" ><h2>Presence check-in</h2><p className="mute">Presence is thinking that balances head, heart and body. Where are you right now?</p><Presence /></Reveal>
      <Reveal><h2>Above or below the line?</h2><p className="mute">Decide where each thought sits.</p><Sorter /></Reveal>
      <Reveal><h2>One step forward</h2><p className="mute">One slow breath cycle, then pick a step for this week.</p><Breathing /></Reveal>
    </article>
  );
}
