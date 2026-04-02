"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), {
  ssr: false,
});

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then((mod) => mod.Analytics),
  { ssr: false }
);

const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false }
);

const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  { ssr: false }
);

export default function ClientEnhancements() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const activate = () => setEnabled(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(activate, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = globalThis.setTimeout(activate, 1200);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1e293b",
            color: "#f1f5f9",
            border: "1px solid #334155",
          },
          success: {
            style: {
              borderColor: "#10b981",
            },
          },
          error: {
            style: {
              borderColor: "#ef4444",
            },
          },
        }}
      />
      <SpeedInsights debug={process.env.NODE_ENV === "development"} />
      <Analytics />
      <ScrollToTop />
    </>
  );
}
