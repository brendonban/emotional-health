import type { Metadata } from "next";
import WhyStats from "@/components/WhyStats";
import Barriers from "@/components/Barriers";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Why it matters" };

export default function Why() {
  return (
    <article className="page">
      <section className="top">
        <h1>Why it matters</h1>
        <p className="lede">How common depression is at different ages in Malaysia. The yellow mark is the average for all adults, 4.6%.</p>
        <WhyStats />
      </section>
      <Reveal>
        <h2>What gets in the way</h2>
        <p className="mute">Reaching out can feel hard, for many understandable reasons. Tap one to see it in a different light.</p>
        <Barriers />
      </Reveal>
    </article>
  );
}
