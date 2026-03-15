"use client";
import { useEffect, useState } from "react";

export default function GlowText() {
    const [showGlow, setShowGlow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowGlow(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        // ✅ Wrapper is always static — LCP reads this, no reflow ever
        <div className="relative text-sm font-medium select-none">

            {/* Layer 1 — base text, static, painted once, LCP target */}
            <span className="text-white/90">
                users reached via Bright Digi Gold
            </span>

            {/* Layer 2 — glow overlay, aria-hidden so screen readers skip it */}
            {/* Only opacity transitions → fully GPU composited */}
            <span
                aria-hidden="true"
                className="absolute inset-0 neon-text transition-opacity duration-1000"
                style={{ opacity: showGlow ? 1 : 0 }}
            >
                users reached via Bright Digi Gold
            </span>

        </div>
    );
}