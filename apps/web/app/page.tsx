import Link from "next/link";

const services = [
  { name: "AI video ads at scale", slug: "video-ads" },
  { name: "Custom chatbots & AI assistants", slug: "chatbots" },
  // { name: "Programmatic SEO content", slug: "seo-content" },
  { name: "Voice cloning for brands", slug: "voice-cloning" },
  { name: "AI spokesperson videos", slug: "ai-spokespersons" },
  { name: "Music video production", slug: "music-videos" },
  { name: "Training & enablement", slug: "training" },
  { name: "MVPs & prototypes", slug: "mvps-prototypes" },
  // { name: "Social media content automation", slug: "social-media" },
  { name: "Creative Partnerships", slug: "partnerships" },
];

const tools = [
  { name: "OpenAI", logo: "https://svgl.app/library/openai.svg" },
  { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/000" },
  { name: "Google", logo: "https://cdn.simpleicons.org/google/000" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/000" },
  { name: "Runway", logo: "https://svgl.app/library/runway.svg" },
  { name: "Replit", logo: "https://cdn.simpleicons.org/replit/000" },
  { name: "n8n", logo: "https://svgl.app/library/n8n.svg" },
  { name: "Replicate", logo: "https://cdn.simpleicons.org/replicate/000" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-mono text-sm">
      <div className="max-w-2xl mx-auto px-6 py-8 md:py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-lg font-medium text-black tracking-tight">Attention Factory</h1>
          <div className="flex items-center gap-2 text-[#5B6EF7]">
            {/* <span className="w-2 h-2 bg-emerald-500" /> */}
            {/* <span className="text-xs tracking-wide">Mercy & Joshua</span> */}
          </div>
        </header>

        {/* Hero */}
        <section className="mb-12">
          <h2 className="text-base font-medium text-black mb-2">
            We make things with <span className="italic">AI</span>.
          </h2>
          <p className="text-gray-600 mb-6">
            The Swiss Army knife for Modern Brands. We help you ship the best version of your vision.
          </p>
        </section>

        {/* Services */}
        <section id="services" className="mb-8 pt-8 border-t border-gray-100">
          <h3 className="text-base font-medium text-black mb-4">Services</h3>
          <ul className="space-y-3">
            {services.map((service, i) => (
              <li key={i}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-2 text-gray-700 hover:text-[#5B6EF7] transition-colors"
                >
                  <span>{service.name}</span>
                  <span className="text-[#5B6EF7]">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Tools */}
        <section className="mb-8 pt-8 border-t border-gray-100">
          <h3 className="text-base font-medium text-black mb-4">Powered by</h3>
          <div className="flex flex-wrap gap-6 items-center">
            {tools.map((tool, i) => (
              <img
                key={i}
                src={tool.logo}
                alt={tool.name}
                title={tool.name}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="pt-8 border-t border-gray-100 mb-12">
          <div className="flex gap-6">
            <a href="#" className="text-[#5B6EF7] hover:underline">
              X (Twitter)
            </a>
            <a href="#" className="text-[#5B6EF7] hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-[#5B6EF7] hover:underline">
              Instagram
            </a>
            <a href="mailto:hello@attentionfactory.io" className="text-[#5B6EF7] hover:underline">
              Email
            </a>
          </div>
        </section>

        <section className="footer-ticker text-[11px] uppercase tracking-[0.2em] text-gray-500">
          <div className="footer-ticker__track">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={`ticker-${index}`} className="whitespace-nowrap">
                Attention Factory * AI Systems * 
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
