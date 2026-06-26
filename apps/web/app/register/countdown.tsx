"use client";

import { useEffect, useState } from "react";

type Parts = { days: string; hours: string; mins: string; secs: string };

function diff(target: number): Parts {
  const ms = Math.max(0, target - Date.now());
  const s = Math.floor(ms / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return {
    days: pad(Math.floor(s / 86400)),
    hours: pad(Math.floor((s % 86400) / 3600)),
    mins: pad(Math.floor((s % 3600) / 60)),
    secs: pad(s % 60),
  };
}

export function Countdown({ minutesFromNow = 15 }: { minutesFromNow?: number }) {
  const [target] = useState(() => Date.now() + minutesFromNow * 60_000);
  const [parts, setParts] = useState<Parts>(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, string][] = [
    [parts.days, "days"],
    [parts.hours, "hrs"],
    [parts.mins, "mins"],
    [parts.secs, "secs"],
  ];

  return (
    <div className="flex items-center gap-3">
      {cells.map(([value, label]) => (
        <div key={label} className="text-center">
          <div className="text-[22px] font-bold tabular-nums tracking-[-0.03em] text-neutral-950 sm:text-[26px]">
            {value}
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#888]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
