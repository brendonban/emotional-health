"use client";
import { useEffect, useRef, useState } from "react";

/** Fades a section in once it scrolls into view. onShow fires once. */
export default function Reveal({ children, className = "", id, onShow }: { children: React.ReactNode; className?: string; id?: string; onShow?: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setIn(true); onShow?.(); return;
    }
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) { setIn(true); onShow?.(); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <section ref={ref} id={id} className={`rv ${inView ? "in" : ""} ${className}`}>{children}</section>;
}

/** Hook: true once the element has been seen. */
export function useSeen<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { setSeen(true); return; }
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}

export function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => { setR(matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  return r;
}
