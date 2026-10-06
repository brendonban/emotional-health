import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <article className="page">
      <section className="top"><h1>About</h1></section>
      <section style={{ paddingTop: 56 }}>
        <h2>Ruang Malaysia</h2>
        <p className="mute">A community health and wellbeing organisation in the Klang Valley, running community-led programmes that help people live healthy, safe lives with dignity, free from stigma. <a href="https://ruangmalaysia.org" target="_blank" rel="noopener">ruangmalaysia.org</a></p>
      </section>
      <section style={{ paddingTop: 48 }}>
        <h2>Global Leadership Foundation</h2>
        <p className="mute">A Melbourne-based foundation working to raise the emotional health levels of people on the planet. Its framework is the foundation of this project. <a href="https://www.globalleadershipfoundation.com/" target="_blank" rel="noopener">globalleadershipfoundation.com</a></p>
      </section>
      <section style={{ paddingTop: 48 }}>
        <h2>Contact</h2>
        <p className="mute">Brendon Ban, Head of Programme, Ruang Malaysia<br /><a href="mailto:partnership@ruangmalaysia.org">partnership@ruangmalaysia.org</a></p>
      </section>
    </article>
  );
}
