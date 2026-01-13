import { ServiceLayout } from "../../components/service-layout";

export const metadata = {
  title: "AI Spokesperson Videos | Attention Factory",
  description: "Photorealistic AI presenters for your brand.",
};

export default function AISpokespersonsPage() {
  return (
    <ServiceLayout
      title="AI Spokesperson Videos"
      subtitle="Photorealistic AI presenters for your brand."
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We create AI-generated spokesperson videos that look and sound real. No actors, no studios, no scheduling.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ Custom AI avatar from real person or synthetic</li>
          <li>→ Lip-sync in any language</li>
          <li>→ Personalized videos at scale (name, company)</li>
          <li>→ Update content instantly, no reshoots</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> Choose or create your AI spokesperson</li>
          <li><span className="text-black">02.</span> Write your script</li>
          <li><span className="text-black">03.</span> Generate video in minutes</li>
          <li><span className="text-black">04.</span> Localize to any language</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600">
          Starts at <span className="text-black font-medium">$1,000/month</span> for up to 50 videos. Custom avatars from <span className="text-black font-medium">$5,000</span>.
        </p>
      </section>
    </ServiceLayout>
  );
}
