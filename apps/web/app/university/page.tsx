import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ai accelerator bootcamp — attention factory university",
  description:
    "spend one week with us. walk out with a live portfolio, a real ai app you built, and the exact playbook for landing $300+/mo clients. starts july 1.",
};

const modules = [
  {
    no: "01",
    title: "the foundations of ai",
    body: "llms, rag systems, advanced prompting, ai browsers, voice tools. the layer everyone skips and then wonders why their tools don't work.",
    value: "$100",
  },
  {
    no: "02",
    title: "generative ai for content & creative",
    body: "realistic ai images, ugc ads, motion control, films, voice clones, ai influencers, 3d & architectural modeling. higgsfield, runway, decart, elevenlabs, suno, heygen.",
    value: "$120",
  },
  {
    no: "03",
    title: "ai agents & automation for business",
    body: "agents that handle email, customer support, file processing, and full workflows. claude, mindstudio, langchain, n8n, zapier, make, whatsapp automation. businesses pay ₦50k–₦500k/mo for this.",
    value: "$200",
  },
  {
    no: "04",
    title: "running your business on claude",
    body: "proposals, contracts, client comms, sops, finances, reports. the exact systems we use at attention factory. this alone replaces 3–4 hires.",
    value: "$160",
  },
  {
    no: "05",
    title: "building websites & apps with ai",
    body: "lovable, replit, vercel, supabase, cursor, claude. ship a live website you can sell, and an ai app you can charge users for. zero prior code.",
    value: "$260",
  },
  {
    no: "06",
    title: "ai-powered business intelligence",
    body: "live dashboards that pull data, analyze it with ai, surface insights — without you touching a spreadsheet. for analysts, ops, founders.",
    value: "$200",
  },
  {
    no: "07",
    title: "leading ai transformation",
    body: "if you work inside a company: identify what ai can replace, build the business case, run a pilot, roll it out. become the person leading the shift — not the person replaced by it.",
    value: "$200",
  },
  {
    no: "08",
    title: "distribution: how to get paid",
    body: "find clients on linkedin. cold outreach that gets replies. package your skills into offers people actually buy. price your work so you stop undercharging.",
    value: "$200",
  },
  {
    no: "09",
    title: "final project: your portfolio",
    body: "a live portfolio site with your own ai-generated images, videos, and case studies of what you built that week. what you send to clients. agencies charge $1,000+ to build this for you.",
    value: "$230",
  },
];

const bonuses = [
  {
    title: "attention factory community — 2 months",
    body: "stay in the community for two months after the bootcamp. get your questions answered, share what you're building, stay connected with your cohort.",
    value: "$300",
  },
  {
    title: "1-on-1 strategy call with mercy or joshua",
    body: "bring your specific business, project, or career question. get personalized guidance from someone actually doing this at scale.",
    value: "$100",
  },
  {
    title: "lifetime access to every recording",
    body: "every session recorded. rewatch, revisit, keep learning long after the cohort ends.",
    value: "$150",
  },
];

const videos = [
  { name: "amarachi", src: "/proof/amarachi.mp4", poster: "/proof/amarachi.jpg" },
  { name: "sonia", src: "/proof/sonia.mp4", poster: "/proof/sonia.jpg" },
  { name: "ogo", src: "/proof/ogo.mp4", poster: "/proof/ogo.jpg" },
  { name: "henry", src: "/proof/henry.mp4", poster: "/proof/henry.jpg" },
  { name: "maria", src: "/proof/maria.mp4", poster: "/proof/maria.jpg" },
];

const leverages = [
  { name: "ai content for brands", range: "$100 – $1,000+/project" },
  { name: "ai websites & apps for businesses", range: "$100 – $1,000+/project" },
  { name: "ai agents & automation systems", range: "$300 – $1,000+/mo per client" },
  { name: "private llm setups for companies", range: "$500 – $5,000+/setup" },
  { name: "coaching teams & individuals", range: "$50 – $300/hr" },
];

const failures = [
  "no clear goal. \"learn ai\" is not a goal. \"land a $500 client by friday\" is.",
  "building in private. waiting until you \"feel ready.\" you never feel ready.",
  "positioning as \"the person who knows ai tools\" instead of \"the person who solves business problems with ai.\"",
  "niching down too early when everything is still moving. this is the year of the generalist.",
  "leading with the tools, not the outcome. nobody buys \"i use n8n.\" they buy \"i save you 30 hours a month.\"",
];

const faq = [
  {
    q: "i'm not technical. can i actually do this?",
    a: "yes. the last cohort had teachers, nurses, marketers, students, and parents — they all shipped. if you can use whatsapp and a browser, you're fine.",
  },
  {
    q: "is one week really enough?",
    a: "yes — if it's structured. most courses give you 30 hours of theory and zero shipped projects. this gives you five focused days of building, a portfolio by friday, and the exact playbook for getting paid. anything longer would be padding.",
  },
  {
    q: "what if i can't attend live?",
    a: "every session is recorded and you keep lifetime access. catch up on your own time. you still build the same final project.",
  },
  {
    q: "the tools are expensive. how do i afford them?",
    a: "we teach a free-tier-first path so you can start with almost nothing. group-buy access for the pricey ones. a guide for stretching your video credits 5x. and the moment you land one ₦450,000/mo client, you're net positive on every subscription.",
  },
  {
    q: "will the price go up?",
    a: "yes. as more fellows enroll and more results come in, the price moves up. the ₦150,000 you see today is not guaranteed for next week. lock it in now if you're in.",
  },
  {
    q: "will this work where i live?",
    a: "we show you the legit ways to access and pay for tools that block users in your region, and which payment routes actually clear from your country. fellows are building from the us, uk, canada, australia, nigeria, kenya, india, the philippines — and beyond.",
  },
  {
    q: "what makes this different from every other ai course?",
    a: "most courses end at \"now you know what chatgpt is.\" this one ends with you holding a live portfolio site, a working ai app, and a list of clients to pitch. for ₦150,000 — when agencies charge ₦1,500,000+ just to build the portfolio.",
  },
  {
    q: "what if i don't get the result?",
    a: "show up. do the daily build. if by friday you don't have a live portfolio and something you can sell — full refund, and we keep coaching you free until you do. we eat the risk.",
  },
  {
    q: "how do i pay?",
    a: "paystack, selar, or card. dollars, naira, or your local currency. installments available.",
  },
];

const SectionLabel = ({ no, label }: { no: string; label: string }) => (
  <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
    <span className="text-[#0099ff]">{no}</span>
    <span>{label}</span>
  </div>
);

const CTAButton = ({
  label = "enroll now — ₦150,000",
  variant = "primary",
  size = "lg",
}: {
  label?: string;
  variant?: "primary" | "ghost";
  size?: "lg" | "md";
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-sm font-medium transition";
  const sizes = {
    lg: "px-6 py-4 text-[15px]",
    md: "px-5 py-3 text-[14px]",
  };
  const variants = {
    primary: "bg-[#0099ff] text-white hover:bg-[#0088e6]",
    ghost: "text-[#0099ff] underline underline-offset-4",
  };
  return (
    <a
      href="https://dub.sh/attn-bravo"
      className={`${base} ${sizes[size]} ${variants[variant]}`}
    >
      {label}
      <span aria-hidden>&rarr;</span>
    </a>
  );
};

const VideoTile = ({
  src,
  poster,
  name,
}: {
  src: string;
  poster: string;
  name: string;
}) => (
  <figure className="overflow-hidden rounded-sm border border-neutral-200 bg-black">
    <video
      controls
      preload="metadata"
      poster={poster}
      className="aspect-square w-full object-cover"
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
    <figcaption className="bg-white px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#888]">
      {name} &middot; bravo&apos;25 fellow
    </figcaption>
  </figure>
);

export default function UniversityPage() {
  return (
    <main className="min-h-dvh bg-[#fefefe] text-[#888] font-mono">
      {/* urgency strip */}
      <div className="border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto flex w-full max-w-[700px] items-center justify-center gap-2 px-5 py-2 text-center text-[11px] uppercase tracking-[0.16em] sm:px-14">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#0099ff]" />
          <span>enrollment open</span>
          <span className="text-neutral-500">&middot;</span>
          <span className="text-neutral-300">doors close once the cohort fills</span>
        </div>
      </div>

      {/* top nav */}
      <header className="mx-auto w-full max-w-[700px] px-5 pt-10 pb-6 sm:px-14 sm:pt-14">
        <div className="text-[14px] text-neutral-950">
          attention factory university
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto w-full max-w-[700px] px-5 sm:px-14">
        <div className="mb-3 inline-flex flex-wrap items-center gap-2 rounded-sm border border-neutral-200 bg-white px-2 py-[2px] text-[11px] uppercase tracking-[0.16em] text-[#888]">
          <span>ai accelerator bootcamp</span>
          <span className="text-neutral-300">&middot;</span>
          <span>bravo&apos;26 cohort</span>
          <span className="text-neutral-300">&middot;</span>
          <span className="text-[#0099ff]">starts july 1</span>
        </div>

        <h1 className="mb-5 text-[42px] font-bold leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-[64px]">
          spend one week with us.
          <span className="text-[#888]"> walk out earning with ai.</span>
        </h1>

        <p className="mb-5 text-[18px] leading-[1.55] tracking-[-0.4px] text-neutral-700 sm:text-[20px]">
          by friday you&apos;ll have: a live portfolio site, ugc + ai-generated videos, a working ai app you built, real assets you can post or pitch, and the exact playbook for landing paying clients.
        </p>

        <p className="mb-8 text-[15px] text-[#888]">
          eight modules. five days. one demo day. zero filler.
        </p>

        <div className="mb-8 rounded-sm border border-neutral-200 bg-white p-4">
          <div className="mb-2 flex flex-wrap items-baseline gap-2 text-[12px] uppercase tracking-[0.16em] text-[#888]">
            <span className="text-[#0099ff]">enrollment open</span>
            <span className="text-neutral-300">&middot;</span>
            <span>seats fill fast</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-[22px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[24px]">
              ₦150,000
            </span>
            <span className="text-[13px] text-[#888]">(~$149)</span>
            <span className="text-neutral-300">&middot;</span>
            <span className="text-[13px] text-[#888]">
              or pay in 2 parts of ₦80,000
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <CTAButton />
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 px-1 py-3 text-[14px] text-[#0099ff] underline underline-offset-4"
          >
            see the week, day by day
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-200 pt-6 text-[13px]">
          <span>
            <span className="text-neutral-950">57</span> fellows in last cohort
          </span>
          <span className="text-neutral-300">&middot;</span>
          <span>
            taught by <span className="text-neutral-950">mercy + joshua</span>
          </span>
          <span className="text-neutral-300">&middot;</span>
          <span>verified portfolio at end of week</span>
        </div>
      </section>

      {/* featured video */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-20 sm:px-14">
        <SectionLabel no="" label="what fellows said" />
        <div className="overflow-hidden rounded-sm border border-neutral-200 bg-black">
          <video
            controls
            preload="metadata"
            poster="/proof/amarachi.jpg"
            className="aspect-video w-full object-cover"
            playsInline
          >
            <source src="/proof/amarachi.mp4" type="video/mp4" />
          </video>
          <div className="bg-white px-4 py-3 text-[12px] uppercase tracking-[0.14em] text-[#888]">
            amarachi &middot; bravo&apos;25 fellow
          </div>
        </div>
      </section>

      {/* who this is for */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <SectionLabel no="" label="who this is for" />
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          if you fit one of these, you fit this.
        </h2>
        <p className="mb-8 text-[16px]">
          not built for everyone. built for people who plan to ship something they can sell.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              tag: "freelancers",
              body: "add ai to your service menu. deliver in half the time. charge 3x for the same hours.",
            },
            {
              tag: "agency owners",
              body: "rebuild your agency on ai. ship more, hire less, raise prices without losing clients.",
            },
            {
              tag: "consultants",
              body: "open an ai service line for the clients you already have. they&apos;d rather buy from you than find someone new.",
            },
            {
              tag: "creators &amp; promoters",
              body: "make ai content, ugc, and ads that brands actually pay you to make.",
            },
            {
              tag: "professionals",
              body: "become the ai-fluent person in your org &mdash; before someone else is. lead the transformation, don&apos;t get replaced by it.",
            },
            {
              tag: "first-time builders",
              body: "ship a working ai product you can charge users for. start from zero, finish with something live.",
            },
          ].map((p) => (
            <div
              key={p.tag}
              className="rounded-sm border border-neutral-200 bg-white p-5"
            >
              <div
                className="mb-2 text-[12px] uppercase tracking-[0.16em] text-[#0099ff]"
                dangerouslySetInnerHTML={{ __html: p.tag }}
              />
              <p
                className="text-[15px] leading-[1.55] text-neutral-950"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-[15px]">
          one bootcamp. the same week unlocks all six. that&apos;s the point of teaching the generalist stack.
        </p>
      </section>

      {/* problem — 5 reasons people fail */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <SectionLabel no="01" label="why most people stay stuck" />
        <h2 className="mb-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          five reasons people watch ai happen instead of earning with it.
        </h2>
        <p className="mb-8 text-[16px]">
          we ran 57 fellows through this. every one who stalled, stalled on the same five things.
        </p>
        <ol className="space-y-5">
          {failures.map((f, i) => (
            <li key={i} className="flex gap-4 text-[16px] leading-[1.55]">
              <span className="w-6 shrink-0 tabular-nums text-[#0099ff]">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <span className="text-neutral-950">{f}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[16px] text-neutral-950">
          if you&apos;ve hit even two of these, this bootcamp is the structure you&apos;ve been missing.
        </p>
      </section>

      {/* opportunity — leverages with earning ranges */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <SectionLabel no="02" label="what you'll be able to charge for" />
        <h2 className="mb-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          five income streams. one bootcamp.
        </h2>
        <p className="mb-8 text-[16px]">
          these are the exact services attention factory and our fellows are getting paid for right now. learn one, you eat. learn three, you stack.
        </p>
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {leverages.map((l) => (
            <li
              key={l.name}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4"
            >
              <span className="flex-1 text-[16px] text-neutral-950">{l.name}</span>
              <span className="tabular-nums text-[14px] text-[#0099ff]">
                {l.range}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[15px]">
          one $300/mo retainer pays for the bootcamp three times over &mdash; in month one.
        </p>
      </section>

      {/* what you walk out with — concrete deliverables */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <SectionLabel no="03" label="what you walk out with by friday" />
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          by the last session, you&apos;ll have built:
        </h2>
        <ul className="space-y-3 text-[16px] leading-[1.55]">
          <li className="flex gap-3">
            <span className="text-[#0099ff]">→</span>
            <span className="text-neutral-950">
              a <span className="font-semibold">live portfolio website</span> you own, hosted, with your own ai-generated images and videos on it.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#0099ff]">→</span>
            <span className="text-neutral-950">
              a <span className="font-semibold">working ai app or agent</span> you can show, charge for, or use to land clients.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#0099ff]">→</span>
            <span className="text-neutral-950">
              a <span className="font-semibold">portfolio of ai content</span> — images, videos, ugc, voice clones — ready to post or pitch.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#0099ff]">→</span>
            <span className="text-neutral-950">
              <span className="font-semibold">outreach + pitch + pricing templates</span> we use to land work. plus a list of businesses to send them to.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#0099ff]">→</span>
            <span className="text-neutral-950">
              a <span className="font-semibold">verified certificate</span> on verify.attentionfactory.io — public, shareable, real.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#0099ff]">→</span>
            <span className="text-neutral-950">
              <span className="font-semibold">2 months in the af community</span> + lifetime access to every recording.
            </span>
          </li>
        </ul>
      </section>

      {/* certificate */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <SectionLabel no="" label="completion certificate" />
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          finish the week. walk away with proof.
        </h2>
        <p className="mb-8 text-[16px]">
          every fellow who completes the program and capstone receives a signed certificate of completion from attention factory. publicly verifiable on{" "}
          <a
            href="https://verify.attentionfactory.io"
            className="text-[#0099ff] underline underline-offset-2"
          >
            verify.attentionfactory.io
          </a>
          . shareable on linkedin. real.
        </p>
        <figure className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
          <div className="aspect-[4/3] w-full bg-neutral-100">
            <img
              src="/proof/certificate.jpg"
              alt="ai accelerator bootcamp completion certificate"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="border-t border-neutral-200 px-4 py-3 text-[12px] uppercase tracking-[0.14em] text-[#888]">
            signed by mercy + joshua &middot; co-founders, attention factory
          </figcaption>
        </figure>
      </section>

      {/* curriculum — full 9 modules */}
      <section id="curriculum" className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <SectionLabel no="04" label="the curriculum" />
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          eight modules, one final project. everything you need, nothing you don&apos;t.
        </h2>
        <p className="mb-8 text-[16px]">
          delivered live across five days. every session recorded so nothing falls off.
        </p>

        <ol className="divide-y divide-neutral-200 border-y border-neutral-200">
          {modules.map((m) => (
            <li key={m.no} className="grid gap-2 py-5 sm:grid-cols-[60px_1fr_auto] sm:gap-6">
              <div className="text-[14px] font-medium text-[#0099ff]">{m.no}</div>
              <div>
                <div className="mb-1 text-[16px] font-semibold text-neutral-950">
                  {m.title}
                </div>
                <p className="text-[15px] leading-[1.55]">{m.body}</p>
              </div>
              <div className="shrink-0 text-[13px] tabular-nums text-[#888] sm:text-right">
                value <span className="text-neutral-950">{m.value}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* bonuses */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <SectionLabel no="05" label="bonuses" />
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          three bonuses. stacked on top.
        </h2>

        <div className="space-y-4">
          {bonuses.map((b) => (
            <div
              key={b.title}
              className="rounded-sm border border-neutral-200 bg-white p-5"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <div>
                  <div className="mb-1 inline-block rounded-sm bg-[#fff4d6] px-2 py-[1px] text-[10px] uppercase tracking-[0.14em] text-neutral-950">
                    bonus
                  </div>
                  <div className="text-[16px] font-semibold text-neutral-950">
                    {b.title}
                  </div>
                </div>
                <div className="shrink-0 text-[13px] tabular-nums text-[#888]">
                  value <span className="text-neutral-950">{b.value}</span>
                </div>
              </div>
              <p className="text-[14px] leading-[1.6]">{b.body}</p>
            </div>
          ))}

          {/* first-10 collab */}
          <div className="rounded-sm border border-neutral-900 bg-neutral-950 p-5 text-white">
            <div className="mb-2 inline-block rounded-sm bg-[#0099ff] px-2 py-[1px] text-[10px] uppercase tracking-[0.14em] text-white">
              first 10 only
            </div>
            <div className="mb-1 text-[16px] font-semibold">
              collab with mercy &amp; joshua on a video or piece of content
            </div>
            <p className="text-[14px] leading-[1.6] text-neutral-300">
              the first 10 seats get included in a video or content piece we create together. exposure to our 160k+ audience. priceless &mdash; literally not on the menu after seat 10.
            </p>
          </div>
        </div>
      </section>

      {/* the math */}
      <section id="enroll" className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <SectionLabel no="06" label="the math" />
        <div className="rounded-sm border border-neutral-200 bg-white p-6 sm:p-8">
          <div className="mb-2 text-[13px] uppercase tracking-[0.16em] text-[#888]">
            stacked value
          </div>
          <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <div className="text-[48px] font-bold tracking-[-0.04em] text-neutral-950 sm:text-[64px]">
              ₦2,775,000
            </div>
            <div className="text-[16px] text-[#888]">(~$1,850)</div>
          </div>
          <p className="mb-6 text-[14px]">
            8 modules ($1,440) + final portfolio ($230) + 3 stacked bonuses ($550). real value, not invented.
          </p>

          <div className="mb-6 border-t border-neutral-200 pt-6">
            <div className="mb-2 flex items-center gap-2 text-[13px] uppercase tracking-[0.16em] text-[#888]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0099ff]" />
              your investment today
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-[26px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                ₦150,000
              </span>
              <span className="text-[14px] text-[#888]">(~$149)</span>
            </div>
            <p className="mt-2 text-[13px]">
              or <span className="text-neutral-950">₦80,000 × 2</span> on the spark plan &mdash; pay in two parts (₦160,000 total).
            </p>
            <p className="mt-3 text-[14px]">
              you&apos;re saving <span className="text-neutral-950">₦2,625,000</span> off stacked value. prices climb as the cohort fills.
            </p>
          </div>

          <CTAButton label="enroll now — ₦150,000" />
          <p className="mt-3 text-center text-[13px]">
            pay in full or in installments &middot; paystack &middot; selar &middot; card
          </p>
        </div>

        {/* The "if it only..." Hormozi callout */}
        <div className="mt-8 rounded-sm border-l-4 border-[#0099ff] bg-white p-5">
          <p className="text-[15px] leading-[1.6] text-neutral-950">
            think about this: <span className="text-[#888]">land one ₦450,000/month (~$300) retainer from what you build this week, and you&apos;re net positive in week two — and ₦5,400,000+ over the next year from a single client. one client. one week.</span>
          </p>
        </div>
      </section>

      {/* fellow results — screenshot grid */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <SectionLabel no="07" label="fellow results" />
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          people who took action. real results.
        </h2>
        <p className="mb-8 text-[15px]">
          screenshots from fellows after the bootcamp. unedited, in their own words.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="flex aspect-[3/5] items-center justify-center rounded-sm border border-neutral-200 bg-neutral-100 text-[10px] uppercase tracking-[0.14em] text-[#888]"
            >
              screenshot {i}
            </div>
          ))}
        </div>
      </section>

      {/* proof — video grid */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <SectionLabel no="" label="fellow videos" />
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          fellows. unedited.
        </h2>
        <p className="mb-8 text-[15px]">
          we didn&apos;t script these. press play.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {videos.map((v) => (
            <VideoTile key={v.name} src={v.src} poster={v.poster} name={v.name} />
          ))}
        </div>
      </section>

      {/* guarantee */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <SectionLabel no="08" label="the guarantee" />
        <div className="rounded-sm border-2 border-dashed border-[#0099ff]/40 bg-white p-6 sm:p-8">
          <h3 className="mb-3 text-[22px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[26px]">
            show up. ship something. or it&apos;s on us.
          </h3>
          <p className="mb-4 text-[15px] leading-[1.6]">
            attend all five sessions. do the daily build. if by demo day you don&apos;t walk away with a live portfolio site and a real ai project you can sell &mdash; we refund every cent. and then we keep coaching you, free, until you do.
          </p>
          <p className="text-[14px] text-[#888]">
            you literally cannot lose money on this. you can only choose not to act.
          </p>
        </div>
      </section>

      {/* founders */}
      <section className="mx-auto w-full max-w-[900px] px-5 pt-24 sm:px-14">
        <SectionLabel no="09" label="who's teaching" />
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          mercy + joshua. building right alongside you.
        </h2>
        <p className="mb-8 text-[16px]">
          attention factory is the company. attention factory university is where we teach what we use every day.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Mercy */}
          <div className="rounded-sm border border-neutral-200 bg-white p-6">
            <div className="mb-5 aspect-square w-full overflow-hidden rounded-sm bg-neutral-100 text-[11px] uppercase tracking-[0.14em] text-[#888]">
              <div className="flex h-full w-full items-center justify-center">
                mercy photo
              </div>
            </div>
            <div className="mb-1 text-[18px] font-semibold text-neutral-950">
              mercy thaddeus
            </div>
            <div className="mb-3 text-[12px] uppercase tracking-[0.14em] text-[#888]">
              co-founder &middot; head of teaching
            </div>
            <p className="text-[14px] leading-[1.6]">
              builds with ai every day. teaches it to a community of 160k+ across the us, uk, canada, australia and beyond. runs the curriculum and live sessions &mdash; the same path that&apos;s put fellows on real projects and real payroll.
            </p>
          </div>

          {/* Joshua */}
          <div className="rounded-sm border border-neutral-200 bg-white p-6">
            <div className="mb-5 aspect-square w-full overflow-hidden rounded-sm bg-neutral-100 text-[11px] uppercase tracking-[0.14em] text-[#888]">
              <div className="flex h-full w-full items-center justify-center">
                joshua photo
              </div>
            </div>
            <div className="mb-1 text-[18px] font-semibold text-neutral-950">
              joshua omobola
            </div>
            <div className="mb-3 text-[12px] uppercase tracking-[0.14em] text-[#888]">
              co-founder &middot; head of build
            </div>
            <p className="text-[14px] leading-[1.6]">
              ships products for a living. runs the build days &mdash; where you walk in with an idea and walk out with a working thing. nobody leaves the bootcamp without something they can demo.
            </p>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="mx-auto w-full max-w-[700px] px-5 pt-24 sm:px-14">
        <SectionLabel no="10" label="faq" />
        <h2 className="mb-8 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[34px]">
          the questions everyone asks.
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

      {/* final cta — the "this week or next year" close */}
      <section className="mx-auto w-full max-w-[700px] px-5 py-24 sm:px-14">
        <SectionLabel no="11" label="last thing" />
        <h2 className="mb-5 text-[32px] font-bold leading-[1.05] tracking-[-0.035em] text-neutral-950 sm:text-[44px]">
          this week, or this same conversation in a year.
        </h2>
        <p className="mb-8 text-[16px] leading-[1.55]">
          fellows are already inside, building. the curriculum is live. the tools are ready. the only variable left is whether you start july 1 &mdash; or watch another year of ai from the sidelines.
        </p>
        <div className="mb-6 rounded-sm border border-neutral-200 bg-white p-5">
          <div className="grid gap-3 text-[14px] sm:grid-cols-3">
            <div>
              <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-[#888]">
                one-time
              </div>
              <div className="text-[20px] font-semibold text-neutral-950">₦150,000</div>
              <div className="text-[12px] text-[#888]">(~$149)</div>
            </div>
            <div>
              <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-[#888]">
                spark plan
              </div>
              <div className="text-[20px] font-semibold text-neutral-950">₦80,000 × 2</div>
              <div className="text-[12px] text-[#888]">pay in two parts</div>
            </div>
            <div>
              <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-[#888]">
                cohort starts
              </div>
              <div className="text-[20px] font-semibold text-neutral-950">july 1</div>
            </div>
          </div>
        </div>
        <CTAButton label="enroll now — ₦150,000" />
        <p className="mt-3 text-[13px]">
          first 10 get a collab with mercy &amp; joshua &middot; full refund if you don&apos;t ship
        </p>
      </section>

      {/* not ready — lead magnet (webinar replay) */}
      <section className="border-t border-neutral-200 bg-[#fefefe] py-20">
        <div className="mx-auto w-full max-w-[900px] px-5 sm:px-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-sm bg-[#0099ff] px-2 py-[2px] text-[11px] uppercase tracking-[0.16em] text-white">
            free training
          </div>
          <h2 className="mb-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-neutral-950 sm:text-[36px]">
            not ready to enroll?{" "}
            <span className="text-[#0099ff]">watch this first.</span>
          </h2>
          <p className="mb-8 max-w-[640px] text-[16px] leading-[1.6]">
            the full 90-minute masterclass that introduces the same playbook fellows use inside the bootcamp &mdash; the five ai income streams, the &ldquo;year of the generalist&rdquo; positioning, and the exact moves that turn ai skills into paying clients. free, no catch.
          </p>

          <div className="grid items-stretch gap-6 sm:grid-cols-[1fr_1fr]">
            <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
              <div className="flex aspect-video w-full items-center justify-center bg-neutral-100 text-[11px] uppercase tracking-[0.16em] text-[#888]">
                webinar thumbnail
              </div>
              <div className="border-t border-neutral-200 px-4 py-3 text-[12px] uppercase tracking-[0.14em] text-[#888]">
                90 min &middot; mercy + joshua &middot; recorded live
              </div>
            </div>

            <form
              className="flex flex-col gap-3 rounded-sm border border-neutral-200 bg-white p-5"
              action="https://dub.sh/attn-webinar"
              method="get"
            >
              <label className="text-[12px] uppercase tracking-[0.16em] text-[#888]">
                where should we send it?
              </label>
              <input
                type="text"
                name="name"
                placeholder="first name"
                className="rounded-sm border border-neutral-200 bg-white px-3 py-3 text-[14px] text-neutral-950 placeholder:text-[#888] focus:border-[#0099ff] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="email address"
                className="rounded-sm border border-neutral-200 bg-white px-3 py-3 text-[14px] text-neutral-950 placeholder:text-[#888] focus:border-[#0099ff] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm bg-[#0099ff] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-[#0088e6]"
              >
                send me the masterclass <span aria-hidden>&rarr;</span>
              </button>
              <p className="mt-1 text-[11px] leading-[1.5] text-[#888]">
                no spam. unsubscribe anytime. we never share your email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ai urgency closer */}
      <section className="border-t border-neutral-200 bg-[#fefefe]">
        <div className="mx-auto w-full max-w-[700px] px-5 py-20 sm:px-14">
          <div className="mb-3 flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] text-[#888]">
            <span className="text-[#0099ff]">ai is moving</span>
            <span>&middot;</span>
            <span>with or without you</span>
          </div>
          <h2 className="mb-5 text-[32px] font-bold leading-[1.05] tracking-[-0.035em] text-neutral-950 sm:text-[44px]">
            the cohort is live. the tools are ready.{" "}
            <span className="text-[#888]">the only variable left is you.</span>
          </h2>
          <p className="mb-8 text-[16px] leading-[1.6]">
            every week without ai is a week your peers are pulling ahead with it. by next month, &ldquo;ai-fluent&rdquo; stops being a differentiator and starts being a baseline. you can be early to that line. or you can be late to it.
          </p>
          <CTAButton label="enroll now — ₦150,000" />
          <p className="mt-3 text-[13px]">
            cohort starts july 1 &middot; first 10 get the mercy + joshua collab &middot; full refund if you don&apos;t ship
          </p>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-[700px] px-5 py-10 text-[13px] sm:px-14">
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
