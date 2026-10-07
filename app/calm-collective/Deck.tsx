'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import slides from './slides';
import type React from 'react';

const W = 1920;
const H = 1080;
const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap';

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = slides.length;

  const go = useCallback(
    (n: number | ((i: number) => number)) =>
      setIndex((i) => Math.max(0, Math.min(total - 1, typeof n === 'function' ? n(i) : n))),
    [total]
  );

  // Load Poppins once.
  useEffect(() => {
    if (document.querySelector(`link[href="${FONT_HREF}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);

  // Fit the 1920×1080 canvas to the window.
  useEffect(() => {
    const fit = () => {
      const el = wrapRef.current;
      if (!el) return;
      setScale(Math.min(el.clientWidth / W, el.clientHeight / H));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); go((i) => i + 1); }
      else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go((i) => i - 1); }
      else if (e.key === 'Home') go(0);
      else if (e.key === 'End') go(total - 1);
      else if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, total]);

  // Stagger the entrance of elements on the current slide.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const current = stage.querySelectorAll('.deck-slide')[index];
    if (!current) return;
    current.querySelectorAll<HTMLElement>('[data-build-in]').forEach((el) => {
      const order = parseInt((el.getAttribute('data-build-in') || '').split(' ')[1], 10) || 1;
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
      el.style.animationDelay = `${(order - 1) * 0.15}s`;
    });
  }, [index]);

  function toggleFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) el.requestFullscreen?.();
    else document.exitFullscreen?.();
  }

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button, a')) return;
    const x = e.clientX / window.innerWidth;
    go((i) => (x < 0.3 ? i - 1 : i + 1));
  };

  return (
    <div className="deck-root">
      <style>{CSS}</style>
      <div
        ref={wrapRef}
        className="deck-wrap"
        onClick={onClick}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go((i) => (dx < 0 ? i + 1 : i - 1));
          touchX.current = null;
        }}
      >
        <div
          ref={stageRef}
          className="deck-stage"
          style={{ transform: `translate(-50%, -50%) scale(${scale})`, opacity: scale ? 1 : 0 }}
        >
          {slides.map((html, i) => (
            <div
              key={i}
              className={`deck-slide${i === index ? ' is-active' : ''}`}
              aria-hidden={i !== index}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>
      </div>

      <div className="deck-bar">
        <button onClick={() => go((i) => i - 1)} disabled={index === 0} aria-label="Previous slide">←</button>
        <span>{index + 1} / {total}</span>
        <button onClick={() => go((i) => i + 1)} disabled={index === total - 1} aria-label="Next slide">→</button>
        <button onClick={toggleFullscreen} aria-label="Full screen">⤢</button>
      </div>
      <div className="deck-progress"><i style={{ width: `${((index + 1) / total) * 100}%` }} /></div>
    </div>
  );
}

const CSS = `
.deck-root{position:fixed;inset:0;z-index:1000;background:#1c1c1c;overflow:hidden;font-family:Poppins,Arial,sans-serif}
.deck-wrap{position:absolute;inset:0 0 56px 0;cursor:pointer;user-select:none}
.deck-stage{position:absolute;left:50%;top:50%;width:${W}px;height:${H}px;transform-origin:center center;transition:opacity .3s}
.deck-stage *{margin:0;box-sizing:border-box}
.deck-slide{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity .5s ease,visibility 0s linear .5s}
.deck-slide.is-active{opacity:1;visibility:visible;transition:opacity .5s ease}
.deck-slide>section{position:absolute;inset:0;width:${W}px;height:${H}px;overflow:hidden;padding:0;line-height:normal;font-size:16px;color:#1c1c1c}
.deck-slide h2,.deck-slide h3{letter-spacing:0}
.deck-slide h1{line-height:1.1}.deck-slide h2{line-height:1.15}.deck-slide h3{line-height:1.2}.deck-slide p{line-height:1.4}
.deck-slide img{max-width:none;display:block}
.deck-slide.is-active [data-build-in]{animation:deckIn .7s cubic-bezier(.2,.8,.2,1) both}
.deck-slide.is-active [data-build-in^="fade"]{animation-name:deckFade}
@keyframes deckIn{from{opacity:0;translate:0 32px}to{opacity:1;translate:0 0}}
@keyframes deckFade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.deck-slide.is-active [data-build-in]{animation:none}}
.deck-bar{position:absolute;left:0;right:0;bottom:0;height:56px;display:flex;align-items:center;justify-content:center;gap:20px;color:#dcdcdc;font-size:15px;font-variant-numeric:tabular-nums}
.deck-bar button{background:none;border:1px solid #4a4a4a;color:#fafafa;border-radius:999px;width:40px;height:36px;font-size:16px;cursor:pointer}
.deck-bar button:disabled{opacity:.3;cursor:default}
.deck-bar button:hover:not(:disabled){border-color:#a0d0e0}
.deck-progress{position:absolute;left:0;right:0;bottom:0;height:3px;background:#333}
.deck-progress i{display:block;height:100%;background:#a0d0e0;transition:width .4s}
`;
