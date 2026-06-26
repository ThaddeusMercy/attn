import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "you're registered — attention factory",
  description:
    "your seat for the free live training on earning real money with ai is reserved.",
};

const discover = [
  {
    icon: "💰",
    title: "how much you can really make with ai",
    body: "the exact way mercy + joshua built serious income part-time, 2–3 hours a day, earning in naira right here — and how you can do the same.",
  },
  {
    icon: "🤖",
    title: "the one skill ai can't replace",
    body: "while ai eats coding, design and copywriting, building with ai stays in demand — and demand is exploding right now.",
  },
  {
    icon: "🌍",
    title: "earn in naira now, dollars whenever you want",
    body: "this pays good money in lagos today — and the same skill pays in dollars if you ever relocate. you just open your laptop and keep earning.",
  },
  {
    icon: "🚫",
    title: "this is not a business",
    body: "no products, no ads, no chasing clients. learn the skill, get hired, get paid. zero capital needed.",
  },
  {
    icon: "🔓",
    title: "the window is open — but closing fast",
    body: "companies are hiring for this skill with no experience required. as more people discover it, that window closes.",
  },
  {
    icon: "⚡",
    title: "real beginners, real results",
    body: "fellows landing roles and paid work in their first few weeks. no experience, no degree, no technical skills.",
  },
];

export default function RegisteredPage() {
  return (
    <main className="min-h-dvh bg-[#fefefe] text-[#888] font-mono">
      <div className="border-b border-neutral-200 bg-black text-white">
        <div className="mx-auto flex w-full max-w-[900px] items-center justify-between gap-3 px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] sm:px-14 sm:text-[12px]">
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            registration confirmed
          </span>
          <Link href="/" className="text-white/60 underline underline-offset-2">
            home
          </Link>
        </div>
      </div>

      <header className="mx-auto w-full max-w-[760px] px-5 pt-14 text-center sm:px-14 sm:pt-20">
        <div className="mb-4 text-[28px]">🎉</div>
        <h1 className="text-[32px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
          you&apos;re in. your seat is reserved.
        </h1>
        <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.6] sm:text-[17px]">
          you&apos;ve successfully registered for the free live training on
          building with ai and earning real money in naira, part-time.
          here&apos;s everything you need to join.
        </p>
      </header>

      <section className="mx-auto w-full max-w-[640px] px-5 pt-12 sm:px-14">
        <div className="rounded-sm border border-neutral-200 bg-white p-6 text-center sm:p-8">
          <div className="mb-2 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
            how to join
          </div>
          <p className="mb-1 text-[15px] text-neutral-900">
            your slot is reserved for:
          </p>
          <p className="mb-5 text-[18px] font-semibold text-neutral-950">
            📅 [date] &middot; 🕐 [time]
          </p>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
          >
            click here to join the training <span aria-hidden>&rarr;</span>
          </a>
          <p className="mt-3 text-[12px]">
            be sure to click when the training starts — if you&apos;re late, you
            may not get in.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
          on this training
        </div>
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          here&apos;s what you&apos;ll discover.
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {discover.map((item) => (
            <div
              key={item.title}
              className="rounded-sm border border-neutral-200 bg-white p-5"
            >
              <div className="mb-2 text-[20px]">{item.icon}</div>
              <div className="mb-2 text-[15px] font-semibold text-neutral-950">
                {item.title}
              </div>
              <p className="text-[14px] leading-[1.55]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full bg-neutral-950 px-5 py-10 my-16 sm:px-14">
        <div className="mx-auto max-w-[700px] p-8 text-white sm:p-10">
          <h3 className="mb-4 text-[26px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[32px]">
            don&apos;t miss this training.
          </h3>
          <p className="text-[16px] leading-[1.65] text-neutral-300 sm:text-[17px]">
            this is a one-time free training. if you miss it, you may not get
            another chance to learn this skill at no cost. show up on time —
            every minute matters.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
          >
            click here to join the training <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-[900px] px-5 py-10 text-[12px] leading-[1.6] sm:px-14">
          <p>
            © {new Date().getFullYear()} attention factory. all rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
