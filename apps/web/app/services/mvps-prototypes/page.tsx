import { ServiceLayout } from "../../components/service-layout";
import { serviceCarousels } from "../carousels";

export const metadata = {
  title: "MVPs & Prototypes in 48 Hours | Attention Factory",
  description: "Rapid MVPs and prototypes shipped in 48 hours.",
};

export default function MvpsPrototypesPage() {
  return (
    <ServiceLayout
      title="MVPs & Prototypes"
      subtitle="Fast turnaround 48-hour package to validate ideas and ship demos."
      carouselItems={serviceCarousels["mvps-prototypes"]}
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We design and build functional MVPs and interactive prototypes in 48 hours. Ideal for investor demos, user
          testing, and internal buy-in.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ Rapid product scoping and UX flow</li>
          <li>→ Frontend prototype or full-stack MVP</li>
          <li>→ AI-powered features and automations</li>
          <li>→ Deploy-ready demo with shareable link</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> Kickoff and scope lock</li>
          <li><span className="text-black">02.</span> UX flow + UI pass</li>
          <li><span className="text-black">03.</span> Build sprint (24 hours)</li>
          <li><span className="text-black">04.</span> Ship + handoff (next 24 hours)</li>
        </ol>
      </section>

      {/* Deliverables */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Deliverables</h2>
        <ul className="space-y-2 text-gray-600">
          <li>→ Clickable prototype or live MVP</li>
          <li>→ Core user flows implemented</li>
          <li>→ 1-2 AI/automation features (optional)</li>
          <li>→ Deployment + walkthrough video</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600">
          48-hour package starts at <span className="text-black font-medium">$6,500</span>. Additional scope and
          integrations priced separately.
        </p>
      </section>
    </ServiceLayout>
  );
}
