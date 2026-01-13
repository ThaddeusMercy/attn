import { ServiceLayout } from "../../components/service-layout";

export const metadata = {
  title: "Music Video Production | Attention Factory",
  description: "AI-powered visuals for artists and labels.",
};

export default function MusicVideosPage() {
  return (
    <ServiceLayout
      title="Music Video Production"
      subtitle="AI-powered visuals for artists and labels."
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We create stunning music videos using AI. From full narrative videos to visualizers and lyric videos — at a fraction of traditional production costs.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ Full AI music videos</li>
          <li>→ Lyric videos with kinetic typography</li>
          <li>→ Audio-reactive visualizers</li>
          <li>→ Spotify Canvas loops</li>
          <li>→ Album artwork and promo content</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> Share your track and creative vision</li>
          <li><span className="text-black">02.</span> We develop the visual concept</li>
          <li><span className="text-black">03.</span> AI generates the visuals</li>
          <li><span className="text-black">04.</span> Professional editing and delivery</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600">
          Lyric videos from <span className="text-black font-medium">$500</span>. Full music videos from <span className="text-black font-medium">$2,500</span>. Visualizer packs from <span className="text-black font-medium">$1,000</span>.
        </p>
      </section>
    </ServiceLayout>
  );
}
