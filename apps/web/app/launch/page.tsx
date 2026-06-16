import type { Metadata } from "next";
import { ScrollHero } from "./scroll-hero";

export const metadata: Metadata = {
  title: "the launch, ai accelerator bootcamp",
  description:
    "you watched the masterclass. now build with us. one week. eight modules. starts july 1.",
};

const CHECKOUT_URL = "https://dub.sh/attn-bravo";
const YT_VIDEO_ID = "8sLAYjYbBTg";

const inside = [
  { title: "8 modules", body: "foundations · gen ai content · ai agents · running biz on claude · websites + apps · bi dashboards · transformation · distribution" },
  { title: "final portfolio project", body: "a live site, your own ai-generated images and videos, case studies. what you send to clients." },
  { title: "3 bonuses", body: "2 months in the af community · 1-on-1 strategy call · lifetime recordings." },
  { title: "verified completion certificate", body: "shareable on linkedin. publicly verifiable on verify.attentionfactory.io." },
];

const proofVideos = [
  { name: "maria", src: "/proof/maria.mp4", poster: "/proof/maria.jpg" },
  { name: "henry", src: "/proof/henry.mp4", poster: "/proof/henry.jpg" },
  { name: "amarachi", src: "/proof/amarachi.mp4", poster: "/proof/amarachi.jpg" },
  { name: "sonia", src: "/proof/sonia.mp4", poster: "/proof/sonia.jpg" },
  { name: "ogochukwu", src: "/proof/ogo.mp4", poster: "/proof/ogo.jpg" },
];

const faq = [
  {
    q: "i didn't watch the full masterclass. should i still enroll?",
    a: "watch the rest first if you can. it'll answer most of your questions. but if you're already convinced, you're not the first to skip ahead.",
  },
  {
    q: "what if i can't show up live every day?",
    a: "every session is recorded with notes and lifetime access. catch up on your time, still ship by friday.",
  },
  {
    q: "i'm not technical. is this really for me?",
    a: "yes. the last cohort had teachers, nurses, marketers, students, parents. they all shipped. if you can use whatsapp and a browser, you're fine.",
  },
  {
    q: "what if i don't get a result?",
    a: "show up, do the daily build. if you don't walk away with a live portfolio and a real ai project by friday, full refund. and we keep coaching you free until you do.",
  },
  {
    q: "how do i pay?",
    a: "checkout is handled securely through nestuge. naira or dollars, card or transfer. installments available, ₦80,000 × 2 on the spark plan.",
  },
];

export default function LaunchPage() {
  return (
    <main className="min-h-dvh bg-[#fefefe] text-[#888] font-mono">
      {/* enrollment banner */}
      <div className="border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto flex w-full max-w-[900px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-2.5 text-center text-[12px] sm:px-14">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#0099ff]">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#0099ff]" />
            enrollment open
          </span>
          <span className="text-white">
            bravo&apos;26 starts <span className="font-semibold">july 1</span>.
          </span>
          <span className="text-neutral-400">
            doors close once the cohort fills.
          </span>
        </div>
      </div>

      {/* header */}
      <header className="mx-auto w-full max-w-[900px] px-5 pt-10 pb-6 sm:px-14 sm:pt-14">
        <div className="text-[14px] text-neutral-950">
          attention factory university
        </div>
      </header>

      {/* hero — pinned scroll-reveal headline */}
      <ScrollHero checkoutUrl={CHECKOUT_URL} />

      {/* hero banner image */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-12 sm:px-14">
        <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
          <img
            src="/proof/earning-in-ai.jpg"
            alt="the guide to earn from ai opportunities — mercy + joshua"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* the framing — what this is */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-20 sm:px-14">
        <div className="mb-4 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">what this is</span>
        </div>
        <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[36px]">
          stop treating ai like a chatbot.
          <span className="text-[#888]"> or something to postpone.</span>
        </h2>
        <div className="max-w-[760px] space-y-4 text-[16px] leading-[1.6] sm:text-[17px]">
          <p>
            in 7 days, we walk you through ai content brands pay for, real ai agents, and automations that run your work, your business, and your life.
          </p>
          <p>
            we use this every day at attention factory, and we build it for brands and companies across the world. we&apos;ll show you how, then teach you to build your own. we&apos;ll also show you how we stay ahead and updated with ai.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
          >
            join bravo&apos;26 <span aria-hidden>&rarr;</span>
          </a>
          <p className="text-[13px] text-[#888]">
            seats are limited &middot; cohort starts july 1
          </p>
        </div>
      </section>

      {/* feature pills — commented out for now: visually too heavy. revisit. */}
      {/*
      <section className="mx-auto w-full max-w-[900px] px-5 pt-12 sm:px-14">
        <div className="grid grid-cols-2 divide-x divide-y divide-neutral-200 border border-neutral-200 sm:grid-cols-5 sm:divide-y-0">
          {[
            { top: "7 days", bottom: "of live building" },
            { top: "live classes", bottom: "mercy + joshua" },
            { top: "build-along", bottom: "prompts, agents, workflows" },
            { top: "no code", bottom: "needed to start" },
            { top: "lifetime", bottom: "recordings yours" },
          ].map((p) => (
            <div key={p.top} className="px-4 py-5 text-center">
              <div className="text-[16px] font-bold uppercase tracking-[-0.01em] text-[#0099ff] sm:text-[17px]">
                {p.top}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#888]">
                {p.bottom}
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* webinar embed */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-16 sm:px-14">
        <p className="mb-5 text-[14px] leading-[1.55]">
the full masterclass, free. the exact playbook we use to make ai videos brands pay for, build websites without code, and automate the busywork.
        </p>

        <div className="mb-8 overflow-hidden rounded-sm border border-neutral-200 bg-black shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}?rel=0&modestbranding=1`}
              title="the guide to earn from ai opportunities, masterclass"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 bg-white px-4 py-3 text-[12px] uppercase tracking-[0.14em] text-[#888]">
            <span>the masterclass &middot; 1h 54m &middot; mercy + joshua</span>
            <span className="text-[#0099ff]">free to watch</span>
          </div>
        </div>

      </section>

      {/* who's in this room */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">who&apos;s in this room</span>
        </div>
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          we&apos;re not training &ldquo;ai users.&rdquo; we&apos;re training the people building the next wave.
        </h2>
        <p className="mb-8 max-w-[680px] text-[16px] leading-[1.55]">
          find yourself in one of these? that&apos;s exactly who this is built for.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              persona: "people with a 9–5",
              outcome: "turn one part of your job into a paid side income. or become the &ldquo;ai person&rdquo; your boss can&apos;t replace.",
            },
            {
              persona: "freelancers + creators",
              outcome: "add ai content, ugc, and websites to your service menu. deliver in half the time. charge 3x.",
            },
            {
              persona: "people starting an agency",
              outcome: "this is the moment. build the ai-native agency before everyone else figures out what that even means.",
            },
            {
              persona: "consultants + business advisors",
              outcome: "open an ai service line for clients you already have. they&apos;d rather buy it from you than find someone new.",
            },
            {
              persona: "existing business owners",
              outcome: "rebuild your operations on ai. cut 30+ hours/week from manual work. ship the products you&apos;ve been delaying.",
            },
            {
              persona: "career-switchers",
              outcome: "exit the role that doesn&apos;t fit. land your first ai-related role in 30 days. portfolio and playbook included.",
            },
          ].map((p) => (
            <div
              key={p.persona}
              className="rounded-sm border border-neutral-200 bg-white p-5"
            >
              <div className="mb-2 text-[12px] uppercase tracking-[0.16em] text-[#0099ff]">
                {p.persona}
              </div>
              <p
                className="text-[15px] leading-[1.55] text-neutral-950"
                dangerouslySetInnerHTML={{ __html: p.outcome }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* proof — fellow videos, grid (3 over 2) */}
      <section className="mx-auto w-full max-w-[1100px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">receipts</span>
          <span>fellows in their own words</span>
        </div>
        <h2 className="mb-2 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[36px]">
          people who showed up. real results.
        </h2>
        <p className="mb-8 text-[14px]">
          unedited. in their own words. press play on any of them.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {proofVideos.map((v) => (
            <figure
              key={v.name}
              className="w-[calc(50%-0.5rem)] overflow-hidden rounded-sm border border-neutral-200 bg-black sm:w-[calc(33.333%-0.75rem)]"
            >
              <video
                controls
                preload="metadata"
                poster={v.poster}
                className="aspect-video w-full bg-black object-contain"
                playsInline
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <figcaption className="bg-white px-4 py-3 text-[12px] uppercase tracking-[0.14em] text-[#888]">
                {v.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA 1 — no price yet */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-16 sm:px-14">
        <div className="rounded-sm border border-neutral-200 bg-white p-6 sm:p-8">
          <div className="mb-2 text-[12px] uppercase tracking-[0.18em] text-[#888]">
            ready to join them?
          </div>
          <h2 className="mb-5 text-[24px] font-semibold tracking-[-0.025em] text-neutral-950 sm:text-[28px]">
            lock your seat. cohort starts july 1.
          </h2>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6] sm:w-auto sm:px-8"
          >
            enroll now <span aria-hidden>&rarr;</span>
          </a>
          <p className="mt-3 text-[12px]">
            secure checkout via nestuge. full refund if you don&apos;t ship.
          </p>
        </div>
      </section>

      {/* what's inside — the bootcamp */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">what&apos;s inside</span>
          <span>the bootcamp</span>
        </div>
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          one week. everything below.
        </h2>
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {inside.map((row) => (
            <li key={row.title} className="grid gap-2 py-5 sm:grid-cols-[200px_1fr] sm:gap-8">
              <div className="text-[15px] font-semibold text-neutral-950">
                {row.title}
              </div>
              <p className="text-[15px] leading-[1.55]">{row.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* founders — who's teaching */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">who&apos;s teaching</span>
        </div>
        <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          mercy + joshua. building right alongside you.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-neutral-200 bg-white p-6">
            <div className="mb-5 aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-100">
              <img
                src="/team/mercy.jpg"
                alt="mercy thaddeus"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mb-3 text-[18px] font-semibold text-neutral-950">
              mercy thaddeus
            </div>
            <p className="text-[14px] leading-[1.6]">
              builds with ai every day. teaches it to a community of 160k+ across the us, uk, canada, australia and beyond. runs the curriculum and live sessions.
            </p>
          </div>
          <div className="rounded-sm border border-neutral-200 bg-white p-6">
            <div className="mb-5 aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-100">
              <img
                src="/team/joshua.jpg"
                alt="joshua omobola"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mb-3 text-[18px] font-semibold text-neutral-950">
              joshua omobola
            </div>
            <p className="text-[14px] leading-[1.6]">
              ships products for a living. runs the build days. nobody leaves the bootcamp without something they can demo.
            </p>
          </div>
        </div>
      </section>

      {/* honesty check — is / isn't for you */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">honesty check</span>
          <span>before you enroll</span>
        </div>
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          this is for some people. it&apos;s not for everyone.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-neutral-200 bg-white p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#0099ff]">
              <span>+</span>
              <span>this is for you if</span>
            </div>
            <ul className="space-y-3 text-[15px] leading-[1.5]">
              <li className="flex gap-2">
                <span className="text-[#0099ff]">→</span>
                <span className="text-neutral-950">
                  you feel like the ai wave is moving without you and you&apos;re tired of saving tips you never use.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#0099ff]">→</span>
                <span className="text-neutral-950">
                  you want a real outcome. first paid client, new role, an agency, a side income.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#0099ff]">→</span>
                <span className="text-neutral-950">
                  you&apos;re willing to show up and ship something this week, not just bookmark and scroll.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#0099ff]">→</span>
                <span className="text-neutral-950">
                  you want to be the person other people come to with ai questions, not the one asking next year.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-sm border border-neutral-200 bg-white p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#888]">
              <span>&minus;</span>
              <span>this is not for you if</span>
            </div>
            <ul className="space-y-3 text-[15px] leading-[1.5]">
              <li className="flex gap-2">
                <span className="text-[#888]">×</span>
                <span className="text-neutral-700">
                  you want a guaranteed-income promise. we promise the skill and the playbook, not a check.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#888]">×</span>
                <span className="text-neutral-700">
                  you want to &ldquo;become an ai expert overnight.&rdquo; this is one week of intense building, not a magic shortcut.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#888]">×</span>
                <span className="text-neutral-700">
                  you&apos;re looking for content to consume. we&apos;re looking for fellows to ship.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#888]">×</span>
                <span className="text-neutral-700">
                  you&apos;d rather watch tutorials than ship your own work. sessions are recorded, but recordings only help if you actually use them.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-[14px]">
          if you read the left column and felt seen, you&apos;re in the right room.
        </p>
      </section>

      {/* price CTA — nestuge-style breakdown */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">ready to join?</span>
        </div>
        <h2 className="mb-6 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          one bootcamp. two ways to pay.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col rounded-sm border border-neutral-200 bg-white p-6">
            <div className="mb-1 text-[12px] uppercase tracking-[0.16em] text-[#888]">
              pay in full
            </div>
            <div className="mb-1 text-[36px] font-bold tracking-[-0.03em] text-neutral-950">
              ₦150,000
            </div>
            <p className="mb-6 text-[13px]">one payment, done. (~$149)</p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-sm bg-[#0099ff] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#0088e6]"
            >
              enroll now <span aria-hidden>&rarr;</span>
            </a>
          </div>
          <div className="flex flex-col rounded-sm border border-neutral-200 bg-white p-6">
            <div className="mb-1 text-[12px] uppercase tracking-[0.16em] text-[#888]">
              spark plan
            </div>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="text-[36px] font-bold tracking-[-0.03em] text-neutral-950">
                ₦80,000
              </span>
              <span className="text-[14px] text-[#888]">× 2</span>
            </div>
            <p className="mb-6 text-[13px]">split into two payments (₦160,000 total).</p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-sm border border-[#0099ff] px-6 py-3 text-[14px] font-medium text-[#0099ff] transition hover:bg-[#0099ff]/5"
            >
              start with ₦80,000 <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-[13px]">
          secure checkout via nestuge &middot; naira or dollars &middot; full refund if you don&apos;t ship
        </p>
      </section>

      {/* people are already asking — emails. commented out: replacing with a real-image carousel once mercy sends gpt-generated email screenshots. */}
      {/*
      <section className="mx-auto w-full max-w-[1100px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">real demand</span>
          <span>messages that come in every week</span>
        </div>
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[36px]">
          people are already asking us.
          <span className="text-[#888]"> we&apos;re teaching you to deliver.</span>
        </h2>
        <p className="mb-8 max-w-[720px] text-[16px]">
          real messages from real businesses, sent to mercy, joshua, and the attention factory team. these are the jobs you&apos;ll be qualified to take on at the end of one week.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              to: "mercy",
              subject: "career switch into ai",
              from: "adaeze o.",
              role: "marketing manager",
              opening: "i&apos;ve been in marketing for 8 years and the ai shift has me worried. ",
              highlighted: "do you offer a structured program for people preparing to pivot into ai-related roles?",
              closing: " i want to be the person leading the change, not the one being replaced.",
              sign: "warm regards, adaeze",
            },
            {
              to: "joshua",
              subject: "ai agents for our agency",
              from: "tunde a.",
              role: "agency founder, lagos",
              opening: "we run a digital agency and our clients keep asking for ai automations. ",
              highlighted: "can you train our team or run us through a curriculum on ai agents and workflows?",
              closing: " we&apos;re losing deals because we don&apos;t know how to deliver this yet.",
              sign: "best, tunde",
            },
            {
              to: "the attention factory team",
              subject: "automating our forms",
              from: "ifeoma c.",
              role: "operations lead, fintech",
              opening: "our team spends hours every week processing form submissions, kyc docs, and onboarding flows. ",
              highlighted: "can someone at attention factory help us automate this, or train one of our engineers?",
              closing: " we have budget approved for this quarter.",
              sign: "thank you, ifeoma",
            },
            {
              to: "mercy",
              subject: "ai images for my brand",
              from: "bisi a.",
              role: "fashion brand owner",
              opening: "i run a small fashion label and i see other brands using ai-generated product imagery everywhere. ",
              highlighted: "can you teach me how to do this myself? i don&apos;t have a budget for photoshoots.",
              closing: " i love your content, you make this look possible.",
              sign: "with appreciation, bisi",
            },
            {
              to: "joshua",
              subject: "building our first ai app",
              from: "daniel m.",
              role: "co-founder, early-stage startup",
              opening: "we want to launch an ai feature in our product but we don&apos;t have engineers yet. ",
              highlighted: "do you teach app building in your bootcamp? i saw your previous fellows shipped real apps.",
              closing: " would love to be in the next cohort if it&apos;s a fit.",
              sign: "cheers, daniel",
            },
            {
              to: "the attention factory team",
              subject: "internal ai training for our company",
              from: "chinedu o.",
              role: "head of l&d, 200-person company",
              opening: "we need to upskill our entire team on ai before the end of the year. ",
              highlighted: "are you open to running internal training cohorts for organizations like ours?",
              closing: " budget is approved, we just need a partner who can deliver this practically.",
              sign: "kind regards, chinedu",
            },
          ].map((e) => (
            <div
              key={e.subject}
              className="overflow-hidden rounded-sm border border-neutral-200 bg-white"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-[#888]">
                <span className="truncate">{e.subject}</span>
                <span className="shrink-0 text-[#0099ff]">unread</span>
              </div>
              <div className="p-5">
                <div className="mb-3 text-[12px]">
                  <span className="text-[#888]">to: </span>
                  <span className="text-neutral-950">{e.to}</span>
                </div>
                <div className="mb-3 flex flex-wrap items-baseline gap-x-2 text-[12px]">
                  <span className="text-[#888]">from: </span>
                  <span className="text-neutral-950">{e.from}</span>
                  <span className="text-[#888]">&middot; {e.role}</span>
                </div>
                <p className="text-[13.5px] leading-[1.55] text-neutral-700">
                  <span dangerouslySetInnerHTML={{ __html: e.opening }} />
                  <mark className="bg-[#fff4d6] px-1 text-neutral-950" dangerouslySetInnerHTML={{ __html: e.highlighted }} />
                  <span dangerouslySetInnerHTML={{ __html: e.closing }} />
                </p>
                <div className="mt-4 text-[12px] text-[#888]">
                  {e.sign}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[680px] text-[15px] leading-[1.55]">
          we can&apos;t take every one of these on. that&apos;s why we built bravo&apos;26. so the next message like this comes to <span className="text-neutral-950">you</span>, not us.
        </p>
      </section>
      */}

      {/* guarantee — bold dark card */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">the guarantee</span>
        </div>
        <div className="rounded-sm bg-neutral-950 p-8 text-white sm:p-10">
          <h3 className="mb-4 text-[26px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[34px]">
            show up. ship something. or it&apos;s on us.
          </h3>
          <p className="text-[16px] leading-[1.65] text-neutral-300 sm:text-[17px]">
            attend all five sessions. do the daily build. if by demo day you don&apos;t walk away with a live portfolio site and a real ai project, we refund every cent. and then we keep coaching you, free, until you do.
          </p>
        </div>
      </section>

      {/* faq */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">last questions</span>
        </div>
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          before you enroll.
        </h2>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faq.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] text-neutral-950">
                <span>{f.q}</span>
                <span className="shrink-0 text-[#0099ff] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-[1.6]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* final cta */}
      <section className="mx-auto w-full max-w-[700px] px-5 py-24 sm:px-14">
        <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
          <span className="text-[#0099ff]">last thing</span>
        </div>
        <h2 className="mb-5 text-[32px] font-bold leading-[1.05] tracking-[-0.035em] text-neutral-950 sm:text-[44px]">
          you can keep saving ai tips.{" "}
          <span className="text-[#888]">or you can start building.</span>
        </h2>
        <p className="mb-3 text-[16px] leading-[1.55]">
          you already watched the playbook. you saw the fellows. the $750 dentist site, the furniture brand owner who rebuilt his whole storefront in a week, the portfolios now landing real work.
        </p>
        <p className="mb-8 text-[16px] leading-[1.55]">
          seven days from now you&apos;ll either be the person other people come to with ai questions, or the one still asking them. that&apos;s the whole decision.
        </p>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-[#0099ff] px-6 py-4 text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
        >
          enroll now <span aria-hidden>&rarr;</span>
        </a>
        <p className="mt-3 text-[13px]">
          cohort starts july 1 &middot; first 10 get the mercy + joshua collab &middot; full refund if you don&apos;t ship
        </p>
      </section>

      {/* footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-[900px] px-5 py-10 text-[13px] sm:px-14">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-neutral-950">attention factory university</span>
            <span className="text-[#888]">
              ai accelerator bootcamp &middot; bravo&apos;26 &middot; july 1
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
