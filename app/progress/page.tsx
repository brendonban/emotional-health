import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import ProgressRings from "@/components/ProgressRings";

export const metadata: Metadata = { title: "Progress" };

export default function Progress() {
  if (!site.pages.progress) notFound();
  return (
    <article className="page">
      <section className="top">
        <h1>Progress</h1>
        <p className="lede">Where the pilot year stands against its targets. Tap a ring to explore.</p>
        <ProgressRings impact={site.impact} targets={site.targets} />
      </section>
      <section>
        <p className="mute">How these are counted, and how we measure change: <Link href="/methodology">see the methodology</Link>.</p>
      </section>
    </article>
  );
}
