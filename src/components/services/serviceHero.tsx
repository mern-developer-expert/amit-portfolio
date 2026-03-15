"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Calendar,
  TrendingUp,
  Code,
  Wrench,
  Rocket,
  Users,
  Database,
  Smartphone,
  Globe,
  Zap,
  Gift,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PrimaryButtons from "@/components/buttons/primaryButtons";
import SecondaryButton from "@/components/buttons/secondaryButton";
import Link from "next/link";
import dynamic from "next/dynamic";
import { fadeInUp, staggerContainer } from "@/constant";
import { handleDownloadResume } from "@/utility";

// Dynamically import the carousel to prevent it from being in the initial JS bundle
const CollaboratorsCarousel = dynamic(() => import("./teamCrousel"));

export default function Services() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen relative overflow-hidden">

        <div className="pt-28 pb-6 sm:pb-10  sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <m.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center mb-16"
            >
              <m.div variants={fadeInUp}>
                <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 my-4 sm:my-6">
                  Tailored Solutions
                </div>
                <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight mb-4">
                  Services We Deliver
                </p>
                <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
                  As a MERN full-stack specialist, I offer end-to-end
                  engineering—from performant frontends to scalable backends.
                  Flexible: Solo for rapid prototypes, or leading my curated 10+
                  person team for enterprise-scale delivery. Let's build what
                  scales.
                </p>
              </m.div>
            </m.div>

            {/* Services Grid */}
            <m.section
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {[
                  {
                    title: "Digital Marketing Strategy",
                    icon: TrendingUp,
                    desc: "Crafting data-driven strategies for SEO, content, and paid campaigns to boost online presence and conversions.",
                    priceHint: "Starting at $2.5k",
                    teamNote: "Growth-focused",
                  },
                  {
                    title: "Social Media Advertising",
                    icon: Users,
                    desc: "Targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to reach your ideal audience and drive engagement.",
                    priceHint: "Starting at $1.5k",
                    teamNote: "Audience expansion",
                  },
                  {
                    title: "Lead Generation & Nurturing",
                    icon: Rocket,
                    desc: "Implementing systems to capture, qualify, and nurture leads, turning prospects into loyal customers.",
                    priceHint: "Starting at $3k",
                    teamNote: "Sales pipeline",
                  },
                  {
                    title: "Product & Frontend Engineering",
                    icon: Wrench,
                    desc: "Custom React/Next.js UIs with TypeScript—optimized for speed, accessibility, and SEO. From MVPs to polished SaaS dashboards.",
                    priceHint: "Starting at $5k",
                    teamNote: "Solo or team-led",
                  },
                  {
                    title: "API Design & Backend Development",
                    icon: Database,
                    desc: "Robust Node/Express APIs, REST/GraphQL, payments/KYC integrations. Built for high concurrency and resilience.",
                    priceHint: "Starting at $4k",
                    teamNote: "Ideal for scale",
                  },
                  {
                    title: "Performance Optimization",
                    icon: Zap,
                    desc: "Lighthouse audits, caching, and TTFB reductions—delivering 30%+ speed gains without compromising features.",
                    priceHint: "Starting at $2k",
                    teamNote: "Quick wins solo",
                  },
                  {
                    title: "Cloud Infrastructure & DevOps",
                    icon: Globe,
                    desc: "AWS/Docker deployments, CI/CD pipelines, and cost-optimized infra for sustainable growth.",
                    priceHint: "Starting at $3k",
                    teamNote: "Team for complex setups",
                  },
                  {
                    title: "Mobile App Development",
                    icon: Smartphone,
                    desc: "Cross-platform React Native apps with seamless web sync—focusing on UX and offline resilience.",
                    priceHint: "Starting at $6k",
                    teamNote: "Full team delivery",
                  },
                  {
                    title: "Consulting & Architecture Reviews",
                    icon: Users,
                    desc: "Tech audits, migration strategies, and team enablement. 100% client satisfaction on 15+ projects.",
                    priceHint: "Hourly $150+",
                    teamNote: "Personalized guidance",
                  },
                ].map((service, index) => (
                  <m.div
                    key={service.title}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-all duration-300 rounded-xl">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#8ef3c1] to-[#06b6d4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <service.icon className="w-6 h-6 text-black" />
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                            {service.desc}
                          </p>
                          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                            {/* <span>{service.priceHint}</span> */}
                            <span className="text-[#3ed6ac] font-medium text-sm sm:text-base">
                              {service.teamNote}
                            </span>
                          </div>
                        </div>
                        <Link href="/contact" className="w-full">
                          <SecondaryButton
                            title="Discuss This Service"
                            containerStyles="w-full px-4 py-2 font-semibold tracking-wide text-sm rounded-full"
                          />
                        </Link>
                      </CardContent>
                    </Card>
                  </m.div>
                ))}
              </div>
            </m.section>

            {/* Process Timeline */}
            <m.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 px-4"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
                  My Delivery Process
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl mx-auto">
                  Structured yet flexible—tailored for freelance speed or
                  team-scale precision. 100% on-time delivery.
                </p>
              </div>
              <div className="relative max-w-4xl mx-auto">
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-[#06b6d4] to-[#3ed6ac] opacity-30"
                  aria-hidden
                />
                <div className="space-y-12">
                  {[
                    {
                      step: "1. Discovery",
                      desc: "Align on goals, scope, and roadmap via a 30-min call. Define success metrics upfront.",
                      icon: Calendar,
                    },
                    {
                      step: "2. Architecture & Prototype",
                      desc: "Wireframes, tech stack selection, and MVP build. Iterate with feedback loops.",
                      icon: Wrench,
                    },
                    {
                      step: "3. Development & Testing",
                      desc: "Full-stack implementation with CI/CD. Rigorous QA for resilience (solo or team QA).",
                      icon: Code,
                    },
                    {
                      step: "4. Launch & Optimization",
                      desc: "Deployment, monitoring, and post-launch tweaks. Handover with docs and support.",
                      icon: Rocket,
                    },
                  ].map((item, index) => (
                    <m.div
                      key={item.step}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        } justify-between`}
                    >
                      <div className="flex-1 max-w-md">
                        <h3 className="text-lg font-semibold text-white mb-2 sm:pl-4">
                          {item.step}
                        </h3>
                        <p className="text-slate-400 text-sm sm:pl-4">
                          {item.desc}
                        </p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r from-[#8ef3c1] to-[#06b6d4] flex items-center justify-center ml-4 ${index % 2 === 0 ? "ml-4" : "mr-4"
                          }`}
                      >
                        <item.icon className="w-6 h-6 text-black" />
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            </m.section>

            {/* Collaborators Section */}
            <CollaboratorsCarousel />

            {/* Seasonal Offer Section */}
            <m.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="my-16 px-4"
            >
              <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-[#06b6d4]/20 to-[#3ed6ac]/20 border border-white/10 backdrop-blur-sm text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#8ef3c1] to-[#06b6d4] mb-4">
                  <Gift className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
                  Transparent Pricing & Offers
                </h3>
                <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                  I believe in honest, transparent pricing with no hidden fees.
                  Every project is quoted with clear, measurable value and
                  guaranteed ROI. To celebrate the holiday season, I'm offering a
                  special discount!
                </p>
                <div className="inline-block text-lg font-semibold text-white bg-white/10 px-6 py-3 rounded-full border border-white/20 shadow-lg">
                  <span className="text-yellow-300">
                    Special Offer :
                  </span>{" "}
                  15% OFF on all new projects!
                </div>
              </div>
            </m.section>

            {/* CTA Section */}
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center my-8 px-4"
            >
              <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-4">
                Next Steps
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Ready to Scope Your Project?
              </h2>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Whether it's a quick audit or full-team build, I'm here to deliver
                measurable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center">
                <Link href="/contact">
                  <PrimaryButtons
                    title="Start Discovery Call"
                    containerStyles="px-8 py-3 rounded-3xl text-lg w-full sm:w-auto font-semibold tracking-normal text-white"
                  />
                </Link>
                <SecondaryButton
                  title="View Case Study"
                  handleClick={() => {
                    handleDownloadResume("png");
                  }}
                  containerStyles="px-8 py-3 rounded-3xl text-lg w-full sm:w-auto font-semibold tracking-wide text-white"
                />
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
