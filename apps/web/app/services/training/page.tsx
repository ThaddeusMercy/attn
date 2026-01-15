import { ServiceLayout } from "../../components/service-layout";
import { serviceCarousels } from "../carousels";

export const metadata = {
  title: "Training & Enablement | Attention Factory",
  description: "Gen AI training, prompt engineering, and corporate enablement.",
};

export default function TrainingPage() {
  return (
    <ServiceLayout
      title="Training & Skill Transfer"
      subtitle="Gen AI training, Prompt Engineering, and Corporate Workshops."
      carouselItems={serviceCarousels.training}
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We train teams to use AI confidently. From foundational AI literacy to advanced prompt engineering and hands-on workflows for marketing, product, and ops.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ Gen AI fundamentals for non-technical teams</li>
          <li>→ Prompt engineering best practices</li>
          <li>→ Role-based playbooks (marketing, support, product, ops)</li>
          <li>→ Tooling walkthroughs tailored to your stack</li>
          <li>→ Live workshops + on-demand resources</li>
          <li>→ 1:1 coaching sessions <span className="text-gray-100 text-xs bg-[#2f56ff] px-2 py-1 rounded-md">*˚Hot₊*</span></li>
        </ul>
      </section>

      {/* Formats */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Formats</h2>
        <ul className="space-y-2 text-gray-600">
          <li>→ 90-minute live workshops</li>
          <li>→ Half-day deep dives</li>
          <li>→ Full-day corporate training</li>
          <li>→ Team-specific office hours</li>
          <li>→ Custom playbook creation</li>
        </ul>
      </section>

      {/* Outcomes */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Outcomes</h2>
        <ul className="space-y-2 text-gray-600">
          <li>→ Teams ship faster with AI First Workflows</li>
          <li>→ Consistent prompt patterns and safety guardrails</li>
          <li>→ Documented workflows for repeatability</li>
          <li>→ Playbooks tailored to your tools and data</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600 mb-4">
          Workshops from <span className="text-black font-medium">$2,000</span>. Full-day corporate training from <span className="text-black font-medium">$6,000</span>. Custom programs on request.
        </p>
      </section>
    </ServiceLayout>
  );
}

