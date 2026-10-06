import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readFileSync } from "node:fs";
import path from "node:path";
import { site } from "@/site.config";
import SlideDeck from "@/components/SlideDeck";

export const metadata: Metadata = { title: "Slides", robots: { index: false, follow: false } };

/** Slides and their images are only read at build time when pages.slides is true,
 *  so a public build with slides off ships none of this content. */
function loadDeck(): string {
  const dir = path.join(process.cwd(), "content", "slides");
  const order: string[] = JSON.parse(readFileSync(path.join(dir, "order.json"), "utf8"));
  return order
    .map((id) => readFileSync(path.join(dir, `${id}.html`), "utf8"))
    .join("")
    .replace(/src="\/_blob\/([0-9a-f]{32})"/g, (_, id) => {
      const b64 = readFileSync(path.join(dir, "img", `${id}.png`)).toString("base64");
      return `src="data:image/png;base64,${b64}"`;
    });
}

export default function Slides() {
  if (!site.pages.slides) notFound();
  return (
    <article className="page wide">
      <section className="top">
        <h1>Slides</h1>
        <p className="mute" style={{ marginTop: 12 }}>The programme proposal, 16 slides. Click or use the arrow keys. Press F for full screen.</p>
        <SlideDeck html={loadDeck()} />
      </section>
    </article>
  );
}
