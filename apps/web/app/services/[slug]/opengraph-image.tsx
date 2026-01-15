import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const services: Record<string, { title: string; subtitle: string }> = {
  "video-ads": {
    title: "AI Video Ads at Scale",
    subtitle: "Generate hundreds of variations in days, not months.",
  },
  chatbots: {
    title: "Custom Chatbots & AI Assistants",
    subtitle: "AI assistants trained on your brand, deployed anywhere.",
  },
  "seo-content": {
    title: "Programmatic SEO Content",
    subtitle: "Thousands of SEO-optimized pages, generated intelligently.",
  },
  "voice-cloning": {
    title: "Voice Cloning for Brands",
    subtitle: "Your brand voice, infinitely scalable.",
  },
  "ai-spokespersons": {
    title: "AI Spokesperson Videos",
    subtitle: "Photorealistic AI presenters for your brand.",
  },
  "music-videos": {
    title: "Music Video Production",
    subtitle: "AI-powered visuals for artists and labels.",
  },
  "social-media": {
    title: "Social Media Content Automation",
    subtitle: "Endless content, zero burnout.",
  },
  partnerships: {
    title: "Partnerships",
    subtitle: "We become your AI team.",
  },
  training: {
    title: "Training & Skill Transfer",
    subtitle: "Gen AI training, prompt engineering, and corporate workshops.",
  },
};

export default function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2400ff",
        flexDirection: "column",
        gap: 1,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 32,
          color: "#ffffff",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        ai swiss army knife
      </p>
      <p
        style={{
          marginTop: 0,
          marginLeft: 140,
          fontSize: 32,
          color: "#ffffff",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        for modern brands
      </p>
    </div>,
    {
      ...size,
    }
  );
}
