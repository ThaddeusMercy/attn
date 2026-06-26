import type { Metadata } from "next";
import { VideoPlayer } from "../components/video-player";
import { Countdown } from "./countdown";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "free live training — attention factory",
  description:
    "learn how to build with ai and earn real money in naira, part-time — right here in nigeria. reserve your free seat.",
};

const proofVideos = [
  {
    name: "maria",
    src: "/proof/maria.mp4",
    poster: "/proof/maria.jpg",
    caption: "built a live portfolio and landed paid ai work",
  },
  {
    name: "henry",
    src: "/proof/henry.mp4",
    poster: "/proof/henry.jpg",
    caption: "went from watching tutorials to shipping real projects",
  },
  {
    name: "amarachi",
    src: "/proof/amarachi.mp4",
    poster: "/proof/amarachi.jpg",
    caption: "added ai services to her freelance menu",
  },
  {
    name: "sonia",
    src: "/proof/sonia.mp4",
    poster: "/proof/sonia.jpg",
    caption: "started from zero and now charges 3x for her time",
  },
  {
    name: "ogochukwu",
    src: "/proof/ogo.mp4",
    poster: "/proof/ogo.jpg",
    caption: "kept his 9–5 and built a second income with ai",
  },
];

const receipts = [
  {
    src: "/proof/earning-in-ai.jpg",
    alt: "fellow earning report from ai work",
    caption: "real money earned building with ai",
  },
  {
    src: "/proof/certificate.jpg",
    alt: "verified completion certificate",
    caption: "verified completion certificate",
  },
  {
    src: "/proof/webinar.jpg",
    alt: "attention factory live training",
    caption: "inside a live attention factory session",
  },
];

const reviews = [
  {
    name: "chidinma e.",
    role: "former bank teller, lagos",
    avatar: "/proof/maria.jpg",
    quote:
      "i used to think ai was for tech people. two weeks in i built my first project and a brand actually paid me for it. still can't believe it.",
  },
  {
    name: "tobi a.",
    role: "9–5, building on the side",
    avatar: "/proof/henry.jpg",
    quote:
      "i kept my job and did this in the evenings. landed my first client before the cohort even ended. this is the most practical thing i've ever bought.",
  },
  {
    name: "amarachi n.",
    role: "freelancer",
    avatar: "/proof/amarachi.jpg",
    quote:
      "added ai to my service menu and started charging 3x. clients don't blink. mercy and joshua actually show you the how, not just hype.",
  },
  {
    name: "sonia o.",
    role: "career switcher",
    avatar: "/proof/sonia.jpg",
    quote:
      "no degree, no experience, scared of tech. i showed up, did the builds, and walked away with a real portfolio. wish i started sooner.",
  },
  {
    name: "ogochukwu k.",
    role: "relocating to canada",
    avatar: "/proof/ogo.jpg",
    quote:
      "this is the skill i'm taking with me when i relocate. it pays the same wherever i am. no warehouse jobs waiting for me.",
  },
  {
    name: "blessing u.",
    role: "student",
    avatar: "/proof/maria.jpg",
    quote:
      "i'm still in school and already earning good money in naira on the side. the training is beginner-friendly but not watered down. real value.",
  },
];

const discover = [
  {
    title: "what ai work actually is",
    body: "a clear breakdown of the in-demand work brands and businesses pay for — and why nigerian builders are getting paid well for it, in naira.",
  },
  {
    title: "the path from saving tips to earning",
    body: "how mercy + joshua went from consuming ai content to earning serious money part-time — building with ai every day, right here in nigeria.",
  },
  {
    title: "how much you can actually make with ai",
    body: "real naira numbers from fellows who started from zero — and how the same skill scales into dollars whenever you want it to.",
  },
  {
    title: "no business, no clients, no start-up capital",
    body: "you learn the skill, position yourself, and get paid. not a vague side hustle — a real skill people and businesses hire for.",
  },
  {
    title: "fellows with full-time jobs are doing this",
    body: "including people with school, family, and 40-hour weeks — building on the side and earning extra income with ai.",
  },
];

export default function RegisterPage() {
  return (
    <main className="min-h-dvh bg-[#fefefe] text-[#888] font-mono">
      <div className="border-b border-neutral-200 bg-black text-white">
        <div className="enroll-marquee py-2.5 text-[11px] sm:text-[12px]">
          <div className="enroll-marquee__track" aria-hidden>
            {Array.from({ length: 6 }).map((_, group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-2.5 whitespace-nowrap pr-6 uppercase tracking-[0.02em] sm:gap-3 sm:pr-8"
              >
                <span className="inline-flex items-center gap-2 font-medium text-white">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  free live training
                </span>
                <span className="text-white/50">✦</span>
                <span className="text-white">limited seats</span>
                <span className="text-white/50">✦</span>
                <span className="text-white">100% free — no card required</span>
                <span className="text-white/50">✦</span>
              </div>
            ))}
          </div>
          <span className="sr-only">
            Free live training. Limited seats. 100% free — no card required.
          </span>
        </div>
      </div>

      <header className="mx-auto w-full max-w-[900px] px-5 pt-10 sm:px-14 sm:pt-14">
        <h1 className="text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-[50px]">
          attention factory
        </h1>
        <div className="mt-6 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
          🇳🇬 for nigerians who want to earn real money with ai
        </div>
        <h2 className="mt-4 text-[28px] font-semibold leading-[1.12] tracking-[-0.03em] text-neutral-950 sm:text-[38px]">
          how building with ai helped us earn serious money part-time — right
          here in naira — and how you can do the same
        </h2>
        <p className="mt-5 max-w-[720px] text-[16px] leading-[1.6] sm:text-[17px]">
          you don&apos;t have to relocate to make this work. with ai you can earn
          good money in naira from nigeria — and the same skill pays in dollars
          if you ever do leave. no technical skills, no age limit, just your
          laptop or phone.
        </p>
      </header>

      <section className="mx-auto w-full max-w-[900px] px-5 pt-10 sm:px-14">
        <div
          aria-hidden
          className="flex min-h-[320px] w-full items-center justify-center rounded-sm border border-dashed border-neutral-300 bg-white sm:min-h-[420px]"
        />
      </section>

      <section className="mx-auto w-full max-w-[640px] px-5 pt-12 sm:px-14">
        <div className="rounded-sm border border-neutral-200 bg-white p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[12px] uppercase tracking-[0.18em] text-[#888]">
              registration ends in
            </span>
            <Countdown minutesFromNow={15} />
          </div>
          <h3 className="mb-5 text-[22px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[26px]">
            reserve your free spot now
          </h3>
          <RegisterForm />
          <p className="mt-4 text-[12px] leading-[1.55]">
            your details will be forwarded to the training organizer who might
            contact you regarding the event or their services.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
          case study
        </div>
        <h2 className="mb-2 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          what attention factory gets paid for every day.
        </h2>
        <p className="mb-8 max-w-[720px] text-[15px] leading-[1.55]">
          ai content brands pay for. real ai agents. automations that run work,
          business, and life. this is the work people pay good money for — in
          naira and in dollars — and we&apos;ll show you exactly how.
        </p>
        <div className="grid grid-cols-1 divide-y divide-neutral-200 border border-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { label: "community", value: "240k+" },
            { label: "countries", value: "50+" },
            { label: "cohorts shipped", value: "5+" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <div className="text-[12px] uppercase tracking-[0.16em] text-[#888]">
                {stat.label}
              </div>
              <div className="mt-2 text-[32px] font-bold tracking-[-0.03em] text-neutral-950">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
          fellow results
        </div>
        <h2 className="mb-2 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          people who showed up. real results.
        </h2>
        <p className="mb-8 text-[14px]">
          unedited. in their own words. press play on any of them.
        </p>
        <div className="-mr-5 overflow-x-auto sm:mr-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ul className="flex snap-x snap-mandatory gap-4 pb-2 pr-5 sm:grid sm:grid-cols-3 sm:pr-0">
            {proofVideos.map((video) => (
              <li
                key={video.name}
                className="w-[80%] shrink-0 snap-start sm:w-auto"
              >
                <figure>
                  <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                    <VideoPlayer
                      src={video.src}
                      poster={video.poster}
                      alt={video.name}
                      width={16}
                      height={9}
                    />
                  </div>
                  <figcaption className="mt-3">
                    <div className="text-[14px] font-medium text-neutral-950">
                      {video.name}
                    </div>
                    <p className="mt-1 text-[13px] leading-[1.55]">
                      {video.caption}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
          receipts
        </div>
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          proof, not promises.
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {receipts.map((receipt) => (
            <figure
              key={receipt.src}
              className="overflow-hidden rounded-sm border border-neutral-200 bg-white"
            >
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  src={receipt.src}
                  alt={receipt.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-4 text-[13px] leading-[1.55] text-neutral-900">
                {receipt.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
          what fellows say
        </div>
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          real words from real fellows.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-sm border border-neutral-200 bg-white p-5"
            >
              <div className="mb-3 flex items-center gap-1 text-[#0099ff]">
                {Array.from({ length: 5 }).map((_, star) => (
                  <span key={star} aria-hidden className="text-[13px]">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="flex-1 text-[14px] leading-[1.6] text-neutral-900">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span>
                  <span className="block text-[13px] font-medium text-neutral-950">
                    {review.name}
                  </span>
                  <span className="block text-[12px] text-[#888]">
                    {review.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
          on this free training
        </div>
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          here&apos;s exactly what mercy + joshua will reveal.
        </h2>
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {discover.map((row) => (
            <li
              key={row.title}
              className="grid gap-2 py-5 sm:grid-cols-[240px_1fr] sm:gap-8"
            >
              <div className="text-[15px] font-semibold text-neutral-950">
                {row.title}
              </div>
              <p className="text-[15px] leading-[1.55]">{row.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 text-[12px] uppercase tracking-[0.18em] text-[#0099ff]">
          your hosts
        </div>
        <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          mercy + joshua ⏤ building with you.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              name: "mercy thaddeus",
              img: "/team/mercy.jpg",
              bio: "builds with ai every day. teaches it to a community of 160k+ across the us, uk, canada, australia and beyond. runs the curriculum and live sessions.",
            },
            {
              name: "joshua omobola",
              img: "/team/joshua.jpg",
              bio: "ships products for a living. nobody leaves without something they can demo. teaches a community of 80k+ across the us, uk, canada, australia and beyond.",
            },
          ].map((host) => (
            <div
              key={host.name}
              className="rounded-sm border border-neutral-200 bg-white"
            >
              <div className="aspect-4/5 w-full overflow-hidden bg-neutral-100">
                <img
                  src={host.img}
                  alt={host.name}
                  className="w-full object-contain"
                />
              </div>
              <div className="p-6">
                <div className="text-[18px] font-semibold text-neutral-950">
                  {host.name}
                </div>
                <p className="text-[14px] leading-[1.6] tracking-tight">
                  {host.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[640px] px-5 py-24 sm:px-14">
        <div className="rounded-sm border border-neutral-200 bg-white p-6 sm:p-8">
          <div className="mb-2 text-[12px] uppercase tracking-[0.18em] text-[#888]">
            spots are filling fast
          </div>
          <h2 className="mb-5 text-[24px] font-semibold tracking-[-0.025em] text-neutral-950 sm:text-[28px]">
            don&apos;t miss out — reserve your free spot.
          </h2>
          <RegisterForm />
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-[900px] px-5 py-10 text-[12px] leading-[1.6] sm:px-14">
          <p className="mb-3">
            this free training is for educational purposes only. earnings and
            results mentioned are examples from mercy, joshua, and fellows — not
            guarantees or typical outcomes. individual results vary based on
            skill, effort, experience, consistency, and market conditions.
          </p>
          <p>
            © {new Date().getFullYear()} attention factory. all rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
