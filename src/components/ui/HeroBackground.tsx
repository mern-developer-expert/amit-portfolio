"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

// Load particles only in the browser and when not running tests (vitest/jsdom)
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

export default function HeroBackground({ delay = 500 }: { delay?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Avoid initializing in Vitest environment (import.meta.vitest) to keep tests fast
    // Also skip on server where window is undefined
    const isTest = typeof (import.meta as any).vitest !== "undefined";
    if (typeof window === "undefined" || isTest) return;

    // Eagerly prefetch the heavy modules on mount so the network request starts immediately,
    // avoiding the waterfall effect after the timeout.
    const enginePromise = import("@tsparticles/engine");
    const slimPromise = import("@tsparticles/slim");

    const t = setTimeout(() => {
      enginePromise
        .then(async (engineModule) => {
          const { tsParticles } = engineModule;
          if (tsParticles) {
            try {
              const { loadSlim } = await slimPromise;
              await loadSlim(tsParticles);
              
              if ("requestIdleCallback" in window) {
                window.requestIdleCallback(() => setInit(true));
              } else {
                setTimeout(() => setInit(true), 1);
              }
            } catch (err) {
              // ignore
            }
          }
        })
        .catch(() => {
          // ignore
        });
    }, delay);

    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    // Set particle count based on window size only on the client-side to avoid hydration mismatch
    const updateParticleCount = () => {
      setIsMobile(window.innerWidth < 640);
    };
    updateParticleCount(); // Set initial value
    window.addEventListener("resize", updateParticleCount);
    return () => window.removeEventListener("resize", updateParticleCount);
  }, []);

  const backgroundParticles = useMemo(
    () => ({
      background: { color: { value: "#000000" } },
      fpsLimit: 60,
      particles: {
        number: {
          value: isMobile ? 180 : 250,
          density: { enable: true, area: 500 },
        },
        color: { value: ["#dde2e6", "#fff", "#dde2e6"] },
        shape: { type: ["circle", "square"] },
        opacity: {
          value: { min: 0.2, max: 0.7 },
          animation: {
            enable: false,
            speed: 0.7,
            sync: false,
            // startValue: "max",
            // startValue: "min",
            minimumValue: 0.2,
          },
        },
        size: { value: { min: 0.3, max: 1.5 } },
        move: { enable: false },
        links: { enable: false },
        value: { min: 0.2, max: 1 },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  // Foreground particles (moving, circular, larger)
  const foregroundParticles = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            // enable: true,
            // mode: "repulse",
            // parallax: { enable: true, force: 60, smooth: 10 },
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          // repulse: {
          //   distance: 60,
          //   duration: 0.4,
          // },
        },
      },
      particles: {
        number: {
          value: isMobile ? 180 : 200,
          density: {
            enable: true,
            area: 500,
          },
          size: { value: { min: 0.2, max: 1 } },
        },
        color: {
          value: ["#FFFF00", "#eeb056"], // Keep yellow for foreground
        },
        shape: {
          type: ["circle", "square", "triangle"], // Added square shape
          options: {
            circle: {
              weight: 0.7, // 70% chance for circles
            },
            square: {
              weight: 0.2, // 20% chance for squares
            },
            triangle: {
              weight: 0.1, // 10% chance for triangles
            },
          },
        },
        opacity: {
          value: { min: 0.2, max: 0.9 },
          animation: {
            enable: false,
            speed: 3,
            sync: false,
            // startValue: "max",
            // startValue: "min",
            minimumValue: 0.2,
            maximumValue: 0.7,
          },
        },
        size: {
          value: { min: 0.5, max: 1.5 },
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
          direction: "top" as any,
          random: false,
          straight: true,
          outModes: {
            default: "out" as any,
          },
        },
        links: {
          enable: false,
        },
      },
      detectRetina: true,
      // If user prefers reduced motion, disable movement to respect accessibility
      move: {
        ...(shouldReduceMotion ? { enable: false } : {}),
      },
    }),
    [isMobile, shouldReduceMotion]
  );

  // In test or SSR, just render a decorative gradient overlay without the heavy particle library
  const isTest = typeof (import.meta as any).vitest !== "undefined";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      {/* Global Background Glows */}
      <div className="absolute left-2 sm:-left-20 -top-10 w-20 sm:w-72 h-72 bg-gradient-to-tr from-[#34d399]/30 to-[#06b6d4]/12 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10 hidden sm:block" aria-hidden />
      <div className="absolute right-3 sm:-right-14 bottom-8 w-20 sm:w-80 h-80 bg-gradient-to-bl from-[#6ee7b7]/25 to-[#06b6d4]/8 rounded-full blur-3xl mix-blend-screen pointer-events-none z-10 hidden sm:block" aria-hidden />

      {init && !isTest ? (
        <>
          {/* background layer */}
          <Particles
            id="tsparticles-background"
            options={backgroundParticles}
            className="fixed inset-0 z-0"
          />
          {/* foreground */}
          <Particles
            id="tsparticles-foreground"
            options={foregroundParticles}
            className="fixed inset-0 z-0"
          />

          <div
            className="absolute inset-0 z-1"
            style={{
              background:
                "linear-gradient(to right,rgb(34, 113, 225) 0%, rgba(62, 62, 71, 0) 27%, rgba(0, 0, 0, 0) 100%)",
              opacity: "35%",
            }}
          />
        </>
      ) : (
        // static decorative overlay variant
        <div className="fixed inset-0 bg-gradient-to-r from-[#07162b]/90 via-[#061025]/60 to-[#071826]/90 z-0" />
      )}
    </div>
  );
}
