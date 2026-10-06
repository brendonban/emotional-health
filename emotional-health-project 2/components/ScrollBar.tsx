"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollBar() {
  const ref = useRef<HTMLDivElement>(null);
  const path = usePathname();
  useEffect(() => {
    const sp = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`;
    };
    sp();
    addEventListener("scroll", sp, { passive: true });
    addEventListener("resize", sp);
    return () => { removeEventListener("scroll", sp); removeEventListener("resize", sp); };
  }, [path]);
  return <div className="sbar" ref={ref} />;
}
