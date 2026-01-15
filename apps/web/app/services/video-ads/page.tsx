import { ServiceLayout } from "../../components/service-layout";
import { serviceCarousels } from "../carousels";

export const metadata = {
  title: "AI Video Ads at Scale | Attention Factory",
  description: "Create hundreds of video ad variations in days, not months.",
};

export default function VideoAdsPage() {
  return (
    <ServiceLayout
      title="AI Video Ads at Scale"
      subtitle="Create hundreds of video ad variations in days, not months."
      carouselItems={serviceCarousels["video-ads"]}
    >
      {/* What we do */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">What we do</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We build AI pipelines that generate video ads at scale. Upload your assets, define your audiences, and we deliver hundreds of variations optimized for every platform.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>→ UGC-style ads without the UGC cost</li>
          <li>→ Dynamic product videos from catalog feeds</li>
          <li>→ A/B test creative at 100x speed</li>
          <li>→ Platform-native formats (TikTok, Reels, Shorts)</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">How it works</h2>
        <ol className="space-y-3 text-gray-600">
          <li><span className="text-black">01.</span> Share your brand assets, guidelines, and goals</li>
          <li><span className="text-black">02.</span> We build your custom video generation pipeline</li>
          <li><span className="text-black">03.</span> Generate unlimited variations on demand</li>
          <li><span className="text-black">04.</span> Test, iterate, scale what works</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="mb-12">
        <h2 className="text-base font-medium text-black mb-4">Pricing</h2>
        <p className="text-gray-600">
          Starts at <span className="text-black font-medium">$5,000/month</span> for unlimited video generation. Custom pricing available.
        </p>
      </section>
    </ServiceLayout>
  );
}
