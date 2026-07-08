"use client";
import { m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/constant";
import { Button } from "@/components/ui/button";
import { handleDownloadResume } from "@/utility";

const Services = () => {
  return (
    <div>
      {/* Services Section — premium, hero-matching */}
      <section className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-4">
              What I do
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
              Services I deliver — end-to-end
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I partner with product teams to design, build and operate
              resilient production systems — from modern frontends to scalable
              backends and secure cloud infrastructure.
            </p>
          </m.div>

          <m.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left column: services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Product & Frontend Engineering",
                  desc: "Designing accessible, high-performance React & Next.js frontends — component architecture, UX optimizations and CI flow.",
                  icon: (
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="4"
                        fill="#06112B"
                        opacity="0.6"
                      />
                      <path
                        d="M7 12h10M7 8h10M7 16h6"
                        stroke="#8ef3c1"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  category: ["React + Next.js", "Tailwind"],
                },
                {
                  title: "Mobile & App Development",
                  desc: "Full-stack mobile and cross-platform apps with React Native, performance-minded architectures, and deployment to app stores.",
                  icon: (
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="4"
                        y="3"
                        width="14"
                        height="18"
                        rx="2"
                        fill="#041824"
                        opacity="0.6"
                      />
                      <path
                        d="M8 6h8M8 18h8"
                        stroke="#06b6d4"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  category: [
                    "React Native",
                    "Flutter",
                    "Play Store / App Store",
                  ],
                },
                {
                  title: "API Design & Integrations",
                  desc: "REST and GraphQL APIs, integrations with payments, 3rd-party services and event-driven backends with Node/Express and TypeScript.",
                  icon: (
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        fill="#041824"
                        opacity="0.6"
                      />
                      <path
                        d="M8 12h8M12 8v8"
                        stroke="#06b6d4"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  category: ["RESTful APIs", "axios"],
                },
                {
                  title: "SEO & Growth Optimization",
                  desc: "SEO-first web engineering — technical SEO, structured data, Lighthouse-driven optimizations and sustainable growth strategies.",
                  icon: (
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        fill="#041824"
                        opacity="0.6"
                      />
                      <path
                        d="M10 14l2-4 2 6"
                        stroke="#ffd166"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  category: ["Technical SEO", "Lighthouse"],
                },
              ].map((s, i) => (
                <m.div
                  key={s.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <Card className="h-full border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 rounded-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06b6d4]/30">
                    <CardContent className="p-4 flex gap-2 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/3 flex items-center justify-center">
                        {s.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-400 max-w-[24rem]">
                          {s.desc}
                        </p>
                        <div className="mt-3 flex items-center gap-2 flex-wrap">
                          {Array.isArray(s.category) ? (
                            s.category.map((c, ci) => (
                              <span
                                key={`${s.title}-cat-${ci}`}
                                className="text-[11px] px-2 py-0.5 rounded-full bg-white/3 border border-white/6 text-slate-200"
                              >
                                {c}
                              </span>
                            ))
                          ) : (
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/3 border border-white/6 text-slate-200">
                              {s.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </div>

            {/* Right column: impact story, metrics, CTA */}
            <m.div variants={fadeInUp} className="space-y-5">
              <Card className="p-6 border border-white/5 bg-gradient-to-br from-[#071826]/50 via-transparent to-[#061025]/20 backdrop-blur-md shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#3ed6ac] flex items-center justify-center text-white font-semibold text-lg px-5">
                    A
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      From product idea to production
                    </h3>
                    <p className="text-sm text-slate-300 mt-2">
                      I focus on measurable outcomes — higher performance,
                      better retention and fewer outages. Below are
                      representational metrics from previous products.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-tr from-white/3 to-transparent border border-white/4 text-center">
                    <div className="text-xl font-bold text-white">100k+</div>
                    <div className="text-xs text-slate-300">Active users</div>
                  </div>
                  <div className="p-2 rounded-lg bg-gradient-to-tr from-white/3 to-transparent border border-white/4 text-center">
                    <div className="text-xl font-bold text-white">30%</div>
                    <div className="text-xs text-slate-300">
                      Speed improvement
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-gradient-to-tr from-white/3 to-transparent border border-white/4 text-center">
                    <div className="text-xl font-bold text-white">20%</div>
                    <div className="text-xs text-slate-300">Revenue uplift</div>
                  </div>
                </div>

                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] text-black font-semibold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4]"
                    onClick={() => handleDownloadResume("pdf")}
                    aria-label="Download Amit Kumar resume (PDF)"
                  >
                    Download resume
                  </Button>

                  <a href="mailto:notgetin18@gmail.com">
                    <Button
                      variant="ghost"
                      className="w-full sm:w-auto text-slate-300 border border-white/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ef3c1]"
                      aria-label="Contact to hire"
                    >
                      Contact to hire
                    </Button>
                  </a>
                </div>
              </Card>

              <Card className="py-4 pl-6 border border-white/5 bg-gradient-to-br from-[#061025]/40 via-[#07162b]/20 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-200 rounded-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#8ef3c1]/25">
                <h3 className="text-sm text-slate-200 font-semibold mb-2">
                  How I work
                </h3>
                <ol className="text-xs text-slate-300 list-inside list-decimal space-y-2">
                  <li>Discovery & scoping — outcomes first, not features.</li>
                  <li>
                    Architecture & plan — balance cost, reliability and
                    velocity.
                  </li>
                  <li>
                    Ship iteratively — telemetry, tests and continuous delivery.
                  </li>
                </ol>
                <div className="mt-4 text-xs text-slate-400">
                  Sample projects: Bright Digi Gold, Aviras
                </div>
              </Card>
            </m.div>
          </m.div>

          {/* Complementary / Specialized services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mt-16 sm:mt-20"
          >
            <div className="text-center mb-8 px-4">
              <h3 className="text-lg tracking-wide sm:text-2xl font-bold text-[#06b6d4]">
                Additional Expertise
              </h3>
              <p className="mt-2 text-base text-slate-300 max-w-2xl mx-auto">
                Beyond core development, I offer specialized services to ensure
                product success from end-to-end.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-0 ">
              {[
                {
                  title: "Digital Marketing & Acquisition",
                  desc: "Data-driven acquisition, landing page optimization, funnels and A/B testing to convert traffic into customers",
                  icon: (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="3"
                        fill="#041824"
                        opacity="0.6"
                      />
                      <path
                        d="M7 12h10M11 8v8"
                        stroke="#f97316"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Performance & Observability",
                  desc: "Lighthouse-driven LCP/TTFB optimizations, caching, and observability (logs/metrics/traces).",
                  icon: (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="4"
                        fill="#041824"
                        opacity="0.6"
                      />
                      <path
                        d="M6 15l3-4 2 3 4-7 3 10"
                        stroke="#34d399"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Cloud & Infrastructure",
                  desc: "AWS-native deployments, CI/CD, Docker workflows and scalable infra patterns for sustainable cost/perf trade-offs.",
                  icon: (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="4"
                        fill="#041824"
                        opacity="0.6"
                      />
                      <path
                        d="M8 14s1.5-4 7-3"
                        stroke="#8ef3c1"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="p-3 rounded-lg bg-white/5 border border-white/5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[#8ef3c1]">
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {s.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
