"use client";

import { useEffect, useRef, useState } from "react";

// highlight index === order the blue marker fills in as you scroll.
// hl null = plain text. off = resting color (black for the first clause, grey after).
const BLACK = "#0a0a0a";
const GREY = "#888888";
const SEGMENTS: { text: string; hl: number | null; off: string }[] = [
  { text: "build ", hl: null, off: BLACK },
  { text: "ai skills", hl: 0, off: BLACK },
  { text: " that ", hl: null, off: BLACK },
  { text: "pay you", hl: 1, off: BLACK },
  { text: ",", hl: null, off: BLACK },
  { text: " scale your ", hl: null, off: GREY },
  { text: "business", hl: 2, off: GREY },
  { text: ", land you ", hl: null, off: GREY },
  { text: "clients and jobs", hl: 3, off: GREY },
  { text: ", get you ", hl: null, off: GREY },
  { text: "promoted", hl: 4, off: GREY },
  { text: ", and run your ", hl: null, off: GREY },
  { text: "life", hl: 5, off: GREY },
  { text: ".", hl: null, off: GREY },
];

const TOTAL = 6;

export function ScrollHero({ checkoutUrl }: { checkoutUrl: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;

    const compute = () => {
      raf = 0;
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dist = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const progress = dist > 0 ? Math.max(0, Math.min(1, scrolled / dist)) : 0;
      // each phrase lights as scroll passes its evenly-spaced slot
      let count = 0;
      for (let i = 0; i < TOTAL; i++) {
        if (progress >= (i + 0.6) / (TOTAL + 0.6)) count = i + 1;
      }
      setActive(count);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    // track gives a short extra scroll distance for the 6 reveals, then releases to the next section
    <div ref={outerRef} className="relative h-[175vh]">
      <div className="sticky top-0 pt-10 pb-12 sm:pt-14">
        <div className="mx-auto w-full max-w-[900px] px-5 sm:px-14">
          <div className="mb-3 inline-flex flex-wrap items-center gap-2 rounded-sm border border-neutral-200 bg-white px-2 py-[2px] text-[11px] uppercase tracking-[0.16em] text-[#888]">
            <span>ai accelerator bootcamp</span>
            <span className="text-neutral-300">&middot;</span>
            <span className="text-[#0099ff]">starts july 1</span>
          </div>

          <h1 className="mb-5 text-[40px] font-bold leading-[1.12] tracking-[-0.045em] text-neutral-950 sm:text-[60px]">
            {SEGMENTS.map((seg, i) => {
              if (seg.hl === null) {
                return (
                  <span key={i} style={{ color: seg.off }}>
                    {seg.text}
                  </span>
                );
              }
              const on = seg.hl < active;
              return (
                <span
                  key={i}
                  style={{
                    backgroundImage: "linear-gradient(#0099ff, #0099ff)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                    backgroundSize: on ? "100% 100%" : "0% 100%",
                    transition: "background-size 0.45s ease, color 0.45s ease",
                    WebkitBoxDecorationBreak: "clone",
                    boxDecorationBreak: "clone",
                    borderRadius: "0.12em",
                    padding: "0 0.06em",
                    color: on ? "#ffffff" : seg.off,
                  }}
                >
                  {seg.text}
                </span>
              );
            })}
          </h1>

          <p className="mb-8 max-w-[720px] text-[17px] leading-[1.55] tracking-[-0.3px] text-neutral-700 sm:text-[19px]">
            in 7 days. built step by step. tested. yours to keep.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
            >
              join bravo&apos;26 <span aria-hidden>&rarr;</span>
            </a>
            <p className="text-[13px] text-[#888]">
              cohort starts july 1 &middot; full refund if you don&apos;t ship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
