"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!posthogKey) {
      return;
    }

    posthog.init(posthogKey, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
      autocapture: true,
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
