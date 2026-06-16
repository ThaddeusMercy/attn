"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import posthog from "posthog-js";
import { useRef } from "react";
import type { Currency } from "./currency";

// each word fades from a light-grey shadow to its full color as you scroll the
// sticky hero. accent words land on blue; the rest land on near-black.
type Word = { text: string; accent?: boolean };

const HEADLINE: Word[] = [
  { text: "build" },
  { text: "ai", accent: true },
  { text: "skills", accent: true },
  { text: "that" },
  { text: "pay", accent: true },
  { text: "you,", accent: true },
  { text: "scale" },
  { text: "your" },
  { text: "business,", accent: true },
  { text: "land" },
  { text: "you" },
  { text: "clients", accent: true },
  { text: "and", accent: true },
  { text: "jobs,", accent: true },
  { text: "get" },
  { text: "you" },
  { text: "promoted,", accent: true },
  { text: "and" },
  { text: "run" },
  { text: "your" },
  { text: "life.", accent: true },
];

const COLOR_DARK = "#0a0a0a";
const COLOR_BLUE = "#0099ff";
const COLOR_SHADOW = "#d4d4d4";

// all words finish revealing by 70% of the sticky scroll; the rest is breathing
// room for the CTA to sit on screen before the next section comes up.
const REVEAL_END = 0.7;

export function ScrollHero({
  checkoutUrl,
  currency,
}: {
  checkoutUrl: string;
  currency?: Currency;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={outerRef} className="relative h-[175vh]">
      <div className="sticky top-0 flex h-dvh items-center">
        <div className="mx-auto w-full max-w-[900px] px-5 sm:px-14">
          <div className="font-medium mb-3 inline-flex flex-wrap items-center gap-2 bg-white px-2 py-[2px] text-[11px] uppercase -tracking-[0.0.6] text-[#888]">
            <span>ai accelerator</span>
            <span className="text-neutral-300">✦</span>
            <span className="text-neutral-950">starts july 1</span>
          </div>

          <h1 className="mb-5 text-[40px] font-medium leading-[1.12] tracking-[-0.045em] sm:text-[60px]">
            {HEADLINE.map((w, i) => {
              const start = (i / HEADLINE.length) * REVEAL_END;
              const end = ((i + 1) / HEADLINE.length) * REVEAL_END;
              return (
                <WordReveal
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  color={w.accent ? COLOR_BLUE : COLOR_DARK}
                >
                  {w.text}
                </WordReveal>
              );
            })}
          </h1>

          <p className="mb-8 max-w-[720px] text-[17px] leading-[1.55] tracking-[-0.3px] text-[#888] sm:text-[19px]">
            Go from zero to Executing with AI in 7 days.
          </p>

          <div className="flex flex-col items-start gap-4">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                posthog.capture("enroll_clicked", { source: "hero", currency });
              }}
              className="inline-flex items-center gap-2  bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
            >
              Become an AI Fellow <span aria-hidden>&rarr;</span>
            </a>
            <p className="text-[13px] text-[#888] block">
              *cohort starts july 1 &middot; full refund if you don&apos;t ship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WordReveal({
  children,
  progress,
  range,
  color,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  color: string;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[0.22em] inline-block">
      <span style={{ color: COLOR_SHADOW }}>{children}</span>
      <motion.span
        aria-hidden
        className="absolute left-0 top-0"
        style={{ opacity, color }}
      >
        {children}
      </motion.span>
    </span>
  );
}
