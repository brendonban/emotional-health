import Link from "next/link";

export default function NotFound() {
  return (
    <article className="page">
      <section className="top">
        <h1>Page not found</h1>
        <p className="lede">This page doesn&apos;t exist, or isn&apos;t available yet.</p>
        <div className="row"><Link className="btn" href="/">Go to the home page</Link></div>
      </section>
    </article>
  );
}
