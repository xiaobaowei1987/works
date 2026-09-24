"use client";

import { useEffect, useRef, useState } from "react";
import { poems } from "../data";
import type { Locale } from "./SiteHeader";

const labels = {
  zh: { previous: "上一页", next: "下一页", page: "琐碎诗" },
  en: { previous: "Previous", next: "Next", page: "Fragment" },
  ja: { previous: "前のページ", next: "次のページ", page: "ささやかな詩" },
};

export function PoemBook({ locale = "zh" }: { locale?: Locale }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous" | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const touchStart = useRef<number | null>(null);
  const label = labels[locale];

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const turnTo = (nextIndex: number) => {
    if (direction || nextIndex < 0 || nextIndex >= poems.length || nextIndex === index) return;
    setDirection(nextIndex > index ? "next" : "previous");
    timers.current.push(setTimeout(() => setIndex(nextIndex), 250));
    timers.current.push(setTimeout(() => setDirection(null), 520));
  };

  return (
    <div className="poem-book" tabIndex={0}
      onKeyDown={(event) => { if (event.key === "ArrowRight") turnTo(index + 1); if (event.key === "ArrowLeft") turnTo(index - 1); }}
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) turnTo(index + (distance < 0 ? 1 : -1)); touchStart.current = null; }}
      aria-label={label.page}>
      <div className="poem-book-stage">
        <button className="book-arrow book-arrow-left" onClick={() => turnTo(index - 1)} disabled={index === 0 || !!direction} aria-label={label.previous}>←</button>
        <div className="poem-book-cover" aria-hidden="true" />
        <figure className={`poem-book-page ${direction ? `is-turning-${direction}` : ""}`}>
          <span className="page-edge" aria-hidden="true" />
          <img src={`/works/poems/poem-${poems[index]}.jpg`} alt={`${label.page} ${index + 1}`} />
          <figcaption><span>{label.page}</span><span aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(poems.length).padStart(2, "0")}</span></figcaption>
        </figure>
        <button className="book-arrow book-arrow-right" onClick={() => turnTo(index + 1)} disabled={index === poems.length - 1 || !!direction} aria-label={label.next}>→</button>
      </div>
      <p className="book-help">{label.previous} · ← &nbsp;&nbsp; → · {label.next}</p>
    </div>
  );
}
