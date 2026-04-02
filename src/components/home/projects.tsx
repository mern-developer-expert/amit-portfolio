"use client"
import { m } from "framer-motion";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/constant";
import Image from "next/image";
import { useState } from "react";
import { Info, X } from "lucide-react";

const Projects = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlippedMed, setIsFlippedMed] = useState(false);
  const [isFlippedTest, setIsFlippedTest] = useState(false);

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <section className="px-2 sm:px-6 lg:px-8 z-10">
      <div style={{ perspective: "1200px" }} className="max-w-7xl mx-auto relative">
        {/* Featured Projects — premium two-column layout */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-4">
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
            Selected projects — production ready
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A hand-picked selection of high-impact products I designed, built
            and scaled — performance-first, user-centric and
            production-hardened.
          </p>
        </m.div>

        <m.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          {/* Left: big featured project */}
          <m.div variants={fadeInUp} className="order-1 lg:order-1">
            <m.div
              className="grid [grid-template-areas:'card']"
              style={{ transformStyle: "preserve-3d" }}
              initial={false}
              animate={isFlipped ? "back" : "front"}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }}>
              <div style={{ backfaceVisibility: "hidden", gridArea: "card" }} className="w-full h-full">
                <Card className="relative overflow-hidden border border-white/15 bg-gradient-to-br from-[#07172a]/40 via-[#071826]/30 to-transparent backdrop-blur-md shadow-2xl hover:scale-[1.01] transition-transform duration-300 h-full">
                  <div className="absolute inset-0 -z-10 h-full">
                    <Image
                      alt="Bright Digi Gold"
                      src="/Bright DiGi Gold.jpg"
                      className="p-1 rounded-xl"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{
                        opacity: 0.45,
                        objectFit: "cover",
                        filter: "saturate(0.9) contrast(0.75) brightness(0.7)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/10 mix-blend-overlay" />
                  </div>

                  <CardContent className="p-4 relative z-20 h-full flex flex-col justify-between">
                    <div>
                      <button
                        onClick={() => setIsFlipped(true)}
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors top-2 right-2 absolute duration-200 ease-in-out"
                        aria-label="Show project details"
                      >
                        <Info className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-200  hover:text-cyan-300 duration-300 ease-in-out" />
                      </button>
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="px-3 rounded-full text-xs text-slate-200 bg-white/3 border border-white/5">
                          Enterprise
                        </div>
                        <div className="text-xs text-slate-200 border px-2 rounded-full border-white/25">
                          Performance & Scale
                        </div>
                      </div>

                      <h3 className="text-3xl font-extrabold text-white mb-3">
                        Bright DiGi Gold
                      </h3>
                      <p className="text-slate-200 max-w-2xl leading-relaxed mb-6">
                        A production-grade digital-gold marketplace — engineered as a <strong>MERN Full Stack Developer in India</strong> for high concurrency with optimized checkout, resilient payment integrations and <strong>Next.js scalable architecture</strong>.
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3ed6ac]" />{" "}
                          100k+ users onboarded
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8ef3c1] to-[#06b6d4]" />{" "}
                          Payments + KYC integrations
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3ed6ac] to-[#06b6d4]" />{" "}
                          30% faster page loads
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#c7f2e2] to-[#3ed6ac]" />{" "}
                          Observability + incident playbooks
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-3 mb-4">
                        {[
                          "React.js",
                          "Next.js",
                          "TypeScript",
                          "MongoDB",
                          "node.js",
                        ].map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/mern-developer-expert"
                        className="bg-white/8 hover:bg-white/10 shadow-sm border border-white/6 flex items-center gap-2 px-3 py-1.5 rounded-md text-sm"
                        aria-label="View Amit's GitHub profile"
                      >
                        <GitHubIcon className="w-4 h-4 text-white/90" />
                        <span className="text-xs font-semibold text-white/90">View Code</span>
                      </a>

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.brightdigigold.com/"
                        className="bg-gradient-to-tr from-[#06b6d4] via-[#34d399] to-[#8ef3c1] text-black font-medium shadow-lg hover:scale-[1.03] transition-transform px-4 py-1.5 rounded-md text-sm"
                        aria-label="Open Bright Digi Gold live demo"
                      >
                        Live Demo
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Back of the card */}
              <div
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", gridArea: "card" }}
                className="w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#061025]/40 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 p-3 sm:p-6 flex flex-col shadow-lg"
              >
                <h4 className="text-base font-medium text-white text-center tracking-wide">Project Details</h4>
                <button
                  onClick={() => setIsFlipped(false)}
                  className=" p-1 w-6 h-6 absolute top-2 right-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 ease-in-out"
                  aria-label="Hide project details"
                >
                  <X className="w-4 h-4 text-cyan-300 duration-200 ease-in-out" />
                </button>
                <div className="mt-2 flex-1 text-slate-300 text-sm leading-relaxed overflow-y-auto pr-1">
                  <ul className="list-item list-inside space-y-2">
                    <li>
                      👉  Built a complete digital gold & silver savings platform with AutoSave, real-time pricing, secure transactions.
                    </li>
                    <li>
                      👉  Developed responsive UI/UX screens for onboarding, transactions, portfolio tracking, and AutoSave flows.
                    </li>
                    <li>
                      👉  Integrated secure payment gateway flows with successful callback handling, reducing payment failures and improving transaction reliability.
                    </li>
                    <li>
                      👉  Optimized APIs, caching, and backend workflows to reduce API load and enhance platform stability.
                    </li>
                    <li>
                      👉  Built internal admin tools for managing users, transactions, gold/silver prices, analytics, and AutoSave configurations.
                    </li>
                    <li>
                      👉  Implemented OTP verification, form validations, and security best practices to protect user data.
                    </li>
                  </ul>
                </div>
              </div>
            </m.div>
          </m.div>

          {/* Right column — stacked cards */}
          <div className="flex flex-col gap-6 order-3 lg:order-2">
            <m.div variants={fadeInUp}>
              <m.div
                className="grid [grid-template-areas:'card']"
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={isFlippedMed ? "back" : "front"}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div style={{ backfaceVisibility: "hidden", gridArea: "card" }} className="w-full h-full">
                  <Card className="relative overflow-hidden border border-white/15 bg-gradient-to-br from-[#071826]/20 via-[#07162b]/10 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                    <button
                      onClick={() => setIsFlippedMed(true)}
                      className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors top-2 right-2 absolute z-10 duration-200 ease-in-out"
                      aria-label="Show project details"
                    >
                      <Info className="w-4 h-4 text-neutral-200 hover:text-cyan-300 duration-200 ease-in-out" />
                    </button>
                    <div className="relative p-2 sm:p-4 flex sm:items-start gap-4 flex-col sm:flex-row items-stretch flex-1">
                      <div className="flex-shrink-0 w-full h-24 sm:w-48 sm:h-28 rounded-lg bg-gradient-to-br from-[#22c55e]/40 to-[#10b981]/20 flex items-center justify-center p-2">
                        <Image
                          alt="Medical Kundali"
                          src="/Medical Kundali.svg"
                          width={176}
                          height={176}
                          className="object-contain"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          Medical Kundali
                        </h4>
                        <p className="text-sm text-slate-300 mb-3">
                          A <strong>Healthcare SaaS</strong> providing personalized medical insights and care plans — built with the <strong>MERN Stack</strong> and <strong>Secure Web Application</strong> patterns in India.
                        </p>

                        <div className="flex items-center gap-2 mb-4">
                          {["React", "Next", "Node", "MongoDB"].map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/5 text-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/mern-developer-expert"
                            className="bg-white/8 hover:bg-white/10 shadow-sm border border-white/6 flex items-center gap-2 px-3 py-1.5 rounded-md text-sm"
                            aria-label="View Amit's GitHub profile"
                          >
                            <GitHubIcon className="w-4 h-4 text-white/90" />
                            <span className="text-xs font-semibold text-white/90">
                              View Code
                            </span>
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://medicalkundali.com/"
                            className="bg-gradient-to-tr from-[#bd4204] to-[#d47406] text-gray-200 px-4 py-1.5 rounded-md text-sm"
                            aria-label="open live demo for medical kundali"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Back of the card */}
                <div
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", gridArea: "card" }}
                  className="w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#061025]/40 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 p-3 sm:p-5 flex flex-col shadow-lg"
                >
                  <h4 className="text-base font-medium text-white text-center tracking-wide">Project Details</h4>
                  <button
                    onClick={() => setIsFlippedMed(false)}
                    className=" p-1 w-6 h-6 absolute top-2 right-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 ease-in-out"
                    aria-label="Hide project details"
                  >
                    <X className="w-4 h-4 text-cyan-300 duration-200 ease-in-out" />
                  </button>
                  <div className="mt-2 flex-1 text-slate-300 text-sm leading-relaxed overflow-y-auto pr-1">
                    <ul className="list-item list-inside space-y-2">
                      <li>
                        👉 Developed personalized medical insights platform with AI-driven recommendations and care plans.
                      </li>
                      <li>
                        👉 Implemented privacy-first design featuring end-to-end encryption and secure data handling.
                      </li>
                    </ul>
                  </div>
                </div>
              </m.div>
            </m.div>
            <m.div variants={fadeInUp}>
              <m.div
                className="grid [grid-template-areas:'card']"
                style={{ transformStyle: "preserve-3d" }}
                initial={false}
                animate={isFlippedTest ? "back" : "front"}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div style={{ backfaceVisibility: "hidden", gridArea: "card" }} className="w-full h-full">
                  <Card className="relative overflow-hidden border border-white/15 bg-gradient-to-br from-[#061025]/40 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                    <button
                      onClick={() => setIsFlippedTest(true)}
                      className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors top-2 right-2 absolute z-10 duration-200 ease-in-out"
                      aria-label="Show project details"
                    >
                      <Info className="w-4 h-4 text-neutral-200 hover:text-cyan-300 duration-200 ease-in-out" />
                    </button>
                    <div className="relative flex flex-col sm:flex-row items-stretch p-2 sm:p-0 flex-1">
                      <div className="w-full sm:w-1/4 bg-gradient-to-tr from-[#6ee7b7]/40 to-[#06b6d4]/20 p-2 flex items-center justify-center rounded-lg sm:rounded-none">
                        <Image
                          alt="TestOfire"
                          src="/Testofire.webp"
                          width={160}
                          height={120}
                          className="object-contain rounded-lg h-20 w-20 sm:h-32 sm:w-32"
                          style={{ width: 'auto', height: 'auto' }}
                          sizes="(max-width: 640px) 80px, 128px"
                        />
                      </div>

                      <div className="flex-1 p-4">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          TestOfire Technologies
                        </h4>
                        <p className="text-sm text-slate-300 mb-3">
                          A real-time student & coaching platform — reliable
                          syncing and API-first architecture.
                        </p>

                        <div className="flex items-center gap-2 flex-wrap mb-4">
                          {["React", "Next", "Node", "Express.js"].map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/5 text-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/mern-developer-expert"
                            className="bg-white/8 hover:bg-white/10 shadow-sm border border-white/6 flex items-center gap-2 px-3 py-1.5 rounded-md text-sm"
                            aria-label="View Amit's GitHub profile"
                          >
                            <GitHubIcon className="w-4 h-4 text-white/90" />
                            <span className="text-xs font-semibold text-white/90">
                              View Code
                            </span>
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://testofire.in/"
                            aria-label="open live demo for testOfire"
                          >
                            <span
                              className="bg-gradient-to-tr from-[#34d399] to-[#06b6d4] text-black px-4 py-1.5 rounded-md text-sm"
                            >Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Back of the card */}
                <div
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", gridArea: "card" }}
                  className="w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#061025]/40 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 p-3 sm:p-5 flex flex-col shadow-lg"
                >
                  <h4 className="text-base font-medium text-white text-center tracking-wide">Project Details</h4>
                  <button
                    onClick={() => setIsFlippedTest(false)}
                    className=" p-1 w-6 h-6 absolute top-2 right-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors duration-200 ease-in-out"
                    aria-label="Hide project details"
                  >
                    <X className="w-4 h-4 text-cyan-300 duration-200 ease-in-out" />
                  </button>
                  <div className="mt-1.5 flex-1 text-slate-300 text-sm leading-relaxed overflow-y-auto pr-1">
                    <ul className="list-item list-inside space-y-2">
                      <li>
                        👉 Designed API-first architecture for scalable backend services.
                      </li>
                      <li>
                        👉 Developed analytics dashboard for performance tracking and insights.
                      </li>
                      <li>
                        👉 Created collaborative tools for scheduling, progress sharing, and feedback.
                      </li>
                      <li>
                        👉 Optimized for low-latency interactions and cross-device compatibility.
                      </li>
                    </ul>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Projects;
