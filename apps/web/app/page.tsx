export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="w-full max-w-[600px] px-5 py-8 text-[18px] font-medium leading-[1.55] tracking-[-0.7px] text-[#888888] sm:p-14 sm:text-[20px]">
        <nav className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-[18px] font-medium sm:text-[20px]">
          <a className="text-[#0099ff] underline underline-offset-2" href="/">
            home
          </a>
          {/* <a className="text-[#0099ff] underline underline-offset-2" href="/services">
              what we make
            </a> */}
          {/* <a className="text-[#0099ff] underline underline-offset-2" href="/contact">
              work with us
            </a> */}
        </nav>

        <h1 className="mb-4 text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-[50px]">
          attention factory.
        </h1>

        <p className="mb-4">
          we help brands, founders, and teams turn fuzzy ideas into things people can
          actually see, use, share, and remember.
        </p>

        <p className="mb-4">
          sometimes that means ai videos, spokespeople, ads, chatbots, launch content,
          prototypes, or full creative systems. mostly, it means making the internet
          feel a little less boring.
        </p>

        <p className="mb-8">
          built for people who would rather ship the thing than talk about shipping the
          thing.
        </p>

        <div className="mb-8">
          <p>signed,</p>
          <div
            aria-label="Attention Factory signature"
            className="mt-2 h-[25px] w-32 bg-[#888888] sm:h-[31px] sm:w-40"
            role="img"
            style={{
              WebkitMask: "url('/images/signature-attn.png') left center / contain no-repeat",
              mask: "url('/images/signature-attn.png') left center / contain no-repeat",
            }}
          />
        </div>

        <section className="mt-10">
          <p className="mb-5">
            sometimes we write about experiments, launches, and weird little ideas we are
            trying. if you want the occasional note from us, drop your email below.
          </p>

          <div className="space-y-3">
            <input
              className="h-14 w-full rounded-md bg-neutral-100 px-4 text-[16px] text-neutral-700 placeholder:text-[#888888] outline-none"
              placeholder="you@email.com"
              type="email"
            />
            <button
              className="h-14 w-full rounded-md bg-black text-[16px] font-semibold text-white"
              type="button"
            >
              leggo
            </button>
          </div>

          <div className="mt-5 aspect-4/5 w-full bg-neutral-200" />

          <p className="mt-5">
            p.s. if you wanna contact us, ping{" "}
            <a
              className="text-sky-600 underline underline-offset-2"
              href="mailto:hello@attentionfactory.io"
            >
              hello@attentionfactory.io
            </a>
            . we generally respond fastest to short emails with a clear ask.
          </p>
        </section>
      </div>
    </main>
  );
}
