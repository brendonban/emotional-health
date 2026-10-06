import Link from "next/link";
import Kicker from "@/components/Kicker";
import LineOfChoice from "@/components/LineOfChoice";
import SignupButton from "@/components/SignupButton";

export default function Home() {
  return (
    <article className="page">
      <section className="top">
        <Kicker />
        <h1 className="h1w" aria-label="Emotional Health Project">
          <span>Emotional</span> <span>Health</span> <span>Project</span>
        </h1>
        <p className="by">Supported by <b>Global Leadership Foundation</b>. Run by Ruang Malaysia.</p>
        <p className="lede">
          Workshops that help young adults in Malaysia notice what they feel, choose how they respond, and feel more at ease reaching out for support.
        </p>
        <LineOfChoice />
        <div className="row">
          <SignupButton />
          <Link className="btn line" href="/why">Why it matters</Link>
          <Link className="btn line" href="/schedule">See the schedule</Link>
        </div>
      </section>
    </article>
  );
}
