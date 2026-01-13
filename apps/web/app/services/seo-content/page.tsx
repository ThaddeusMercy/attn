import { ServiceLayout } from "../../components/service-layout";

export const metadata = {
  title: "Programmatic SEO Content | Attention Factory",
  description: "Thousands of SEO-optimized pages, generated intelligently.",
};

export default function SEOContentPage() {
  return (
    <ServiceLayout
      title="Programmatic SEO Content"
      subtitle="Thousands of SEO-optimized pages, generated intelligently."
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We build content engines that generate thousands of unique, valuable pages. Not spam — real content that ranks and converts.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ Location pages at scale (city + service combos)</li>
          <li>→ Product comparison pages</li>
          <li>→ Long-tail keyword targeting</li>
          <li>→ Dynamic content from your data</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> Keyword research & content architecture</li>
          <li><span className="text-black">02.</span> Build templates with smart variation</li>
          <li><span className="text-black">03.</span> Generate 1,000s of unique pages</li>
          <li><span className="text-black">04.</span> Deploy, index, monitor rankings</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600">
          Starts at <span className="text-black font-medium">$10,000</span> for up to 5,000 pages. Volume discounts available.
        </p>
      </section>
    </ServiceLayout>
  );
}
