import { ServiceLayout } from "../../components/service-layout";
import { serviceCarousels } from "../carousels";

export const metadata = {
  title: "Custom Chatbots & AI Assistants | Attention Factory",
  description: "AI assistants trained on your brand, deployed anywhere.",
};

export default function ChatbotsPage() {
  return (
    <ServiceLayout
      title="Custom Chatbots & AI Assistants"
      subtitle="AI assistants trained on your brand, deployed anywhere."
      carouselItems={serviceCarousels.chatbots}
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We build AI assistants that know your business inside out. Customer support, sales qualification, internal tools — trained on your data, speaking in your voice.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ Customer support bots that actually help</li>
          <li>→ Sales assistants that qualify and book</li>
          <li>→ Internal knowledge bases with chat interface</li>
          <li>→ Multi-channel deployment (web, Slack, WhatsApp)</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> We audit your existing support/sales flow</li>
          <li><span className="text-black">02.</span> Train on your docs, FAQs, and brand voice</li>
          <li><span className="text-black">03.</span> Deploy with human handoff when needed</li>
          <li><span className="text-black">04.</span> Continuous improvement from real conversations</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600">
          Starts at <span className="text-black font-medium">$3,000</span> setup + <span className="text-black font-medium">$500/month</span> hosting & maintenance.
        </p>
      </section>
    </ServiceLayout>
  );
}
