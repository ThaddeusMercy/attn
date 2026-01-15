import { ServiceLayout } from "../../components/service-layout";
import { serviceCarousels } from "../carousels";

export const metadata = {
  title: "Social Media Content Automation | Attention Factory",
  description: "Endless content, zero burnout.",
};

export default function SocialMediaPage() {
  return (
    <ServiceLayout
      title="Social Media Content Automation"
      subtitle="Endless content, zero burnout."
      carouselItems={serviceCarousels["social-media"]}
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We build AI systems that generate on-brand social content at scale. Posts, carousels, stories, threads — all in your voice, ready to publish.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ AI-generated posts in your brand voice</li>
          <li>→ Image and carousel generation</li>
          <li>→ Content calendar automation</li>
          <li>→ Repurposing long-form → social</li>
          <li>→ Trend-reactive content</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> We learn your brand voice and content pillars</li>
          <li><span className="text-black">02.</span> Build your custom content generation system</li>
          <li><span className="text-black">03.</span> Generate a month of content in hours</li>
          <li><span className="text-black">04.</span> You approve, schedule, post</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600">
          Starts at <span className="text-black font-medium">$2,000/month</span> for 60 posts. Full content engine builds from <span className="text-black font-medium">$8,000</span>.
        </p>
      </section>
    </ServiceLayout>
  );
}
