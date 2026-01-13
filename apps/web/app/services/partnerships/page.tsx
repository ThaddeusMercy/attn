import { ServiceLayout } from "../../components/service-layout";

export const metadata = {
  title: "Partnerships | Attention Factory",
  description: "We become your AI team. White-label AI services for agencies and brands.",
};

export default function PartnershipsPage() {
  return (
    <ServiceLayout
      title="Partnerships"
      subtitle="We become your AI team."
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We embed as your AI department. Your agency keeps the relationship, we handle the AI execution. White-label, seamless, invisible.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ White-label AI services under your brand</li>
          <li>→ Dedicated channel with your team</li>
        </ul>
      </section>

      {/* Who it's for */}
      {/* <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Who it's for</h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            <span className="text-black">Creative agencies</span> — Offer AI services without building a team
          </li>
          <li>
            <span className="text-black">Marketing agencies</span> — Add AI content to your stack
          </li>
          <li>
            <span className="text-black">Production studios</span> — Scale output with AI
          </li>
          <li>
            <span className="text-black">Consultancies</span> — Deliver on AI strategy with execution
          </li>
        </ul>
      </section>

      {/* How it works */}
      {/* <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> Tell us about your agency and clients</li>
          <li><span className="text-black">02.</span> We scope a partnership structure</li>
          <li><span className="text-black">03.</span> Set up shared workspace and workflows</li>
          <li><span className="text-black">04.</span> You sell, we deliver, everyone wins</li>
        </ol>
      </section> */}

      {/* Pricing */}
      {/* <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600 mb-4">
          Flexible models depending on volume and scope:
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ <span className="text-black">Revenue share</span> — We split project fees</li>
          <li>→ <span className="text-black">Retainer</span> — Monthly hours at partner rates</li>
          <li>→ <span className="text-black">Per-project</span> — Wholesale pricing you mark up</li>
        </ul>
      </section> */}
    </ServiceLayout>
  );
}
