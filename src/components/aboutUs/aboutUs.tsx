"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Calendar,
  Award,
  Users,
  TrendingUp,
  BookOpen,
  Bike,
  Sprout,
  Code,
  Wrench,
  Palette,
  Rocket,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StatTile from "@/components/ui/StatTile";
import ProfileCard from "@/components/ui/ProfileCard";
import { fadeInUp, staggerContainer } from "@/constant";


export default function AboutUs() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen relative overflow-hidden">

        <div className="pt-28 sm:pb-10 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <m.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="mb-14 mt-6 sm:mt-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <m.h1
                    variants={fadeInUp}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight"
                  >
                    About — Amit Kumar
                  </m.h1>

                  <m.p
                    variants={fadeInUp}
                    className="mt-4 text-lg text-slate-300 max-w-3xl leading-relaxed"
                  >
                    I craft production-grade web platforms with a focus on
                    performance, resilience, and delightful UX. From fast Next.js
                    frontends to robust Node/Express backends, I help teams ship
                    measurable outcomes and scale with confidence.
                  </m.p>

                  <m.div
                    variants={fadeInUp}
                    className="mt-6 flex gap-3 flex-wrap"
                  >
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/3 border border-white/5 text-xs text-slate-200">
                      MERN • TypeScript • Next.js
                    </div>
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/3 border border-white/5 text-xs text-slate-200">
                      Performance-focused
                    </div>
                  </m.div>
                </div>

                <div className="lg:col-span-5">
                  <m.div variants={fadeInUp}>
                    <ProfileCard
                      name="Amit Kumar"
                      title="MERN Full‑Stack Developer · Product Engineer"
                      description="I love turning product ideas into reliable, scalable experiences. Recent work includes Bright Digi Gold (1M+ users), TestOfire (real-time platform), and Medical Kundali (healthcare SaaS)."
                      email="notgetin18@gmail.com"
                    />
                  </m.div>
                </div>
              </div>
            </m.div>

            {/* Stats Section */}
            <m.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
            >
              {[
                { Icon: Users, number: "100k+", label: "Users Served" },
                { Icon: TrendingUp, number: "30%", label: "Performance Boost" },
                { Icon: Code, number: "20%", label: "Revenue Increase" },
                { Icon: Award, number: "4+", label: "Years Experience" },
              ].map((stat, index) => (
                <StatTile
                  key={index}
                  index={index}
                  Icon={stat.Icon}
                  number={stat.number}
                  label={stat.label}
                />
              ))}
            </m.div>

            {/* Experience Timeline */}
            <m.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]">
                  Professional Journey
                </h2>
                <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
                  A condensed timeline of roles and achievements — product first,
                  engineer second.
                </p>
              </div>

              <div className="relative">
                {/* The main timeline vertical line */}
                <div
                  className="absolute left-4 top-2 h-full w-px bg-white/10"
                  aria-hidden="true"
                ></div>
                <div className="space-y-12">
                  {[
                    {
                      title: "Software Engineer (SE)",
                      company: "Bright Digital Gold",
                      dateRange: "April 2022 - Present",
                      bullets: [
                        "Developed responsive web and mobile interfaces serving 100,000+ users with JavaScript, React.js, TypeScript, and Redux",
                        "Boosted website speed by 30% through React State management optimization and KYC/transaction improvements",
                        "Implemented promotional strategies driving 20% revenue increase through coupon calculations and gifting scenarios",
                        "Led cross-functional teams achieving 10% revenue growth and 15% boost in customer engagement",
                      ],
                      accent: "#D79D47",
                    },
                    {
                      title: "Product Engineer / Freelance",
                      company: "Medical Kundali — Healthcare SaaS",
                      dateRange: "Jan 2024 - Present",
                      bullets: [
                        "Developing a comprehensive medical platform delivering personalized health insights and care workflows",
                        "Built with MERN stack, focusing on UX, data security and HIPAA-aware safeguards for clinical data",
                        "Improved performance and data sync for patient records and analytics; designed scalable APIs and observability",
                      ],
                      accent: "#8E0801",
                    },
                    {
                      title: "Software Engineer (SE)",
                      company: "TestOfire Technologies",
                      dateRange: "November 2021 - November 2024",
                      bullets: [
                        "Orchestrated creation of pioneering student and coaching app platform with real-time synchronization",
                        "Architected resilient API-based infrastructure facilitating dynamic data exchange between applications",
                        "Enhanced communication efficiency through seamless user experience and instant updates",
                      ],
                      accent: "#8b5cf6",
                    },
                  ].map((item, index) => (
                    <m.div
                      key={item.title + item.company}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-12"
                    >
                      {/* Timeline dot */}
                      <div
                        className="absolute left-[11px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-[#07162b]"
                        style={{ backgroundColor: item.accent }}
                        aria-hidden="true"
                      ></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-slate-100">
                            {item.title}
                          </h3>
                          <p
                            className="text-lg font-semibold"
                            style={{ color: item.accent }}
                          >
                            {item.company}
                          </p>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 sm:mt-0 flex-shrink-0">
                          {item.dateRange}
                        </p>
                      </div>
                      <ul className="list-disc list-outside space-y-2 pl-4">
                        {item.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="text-sm text-slate-300 leading-relaxed"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </m.div>
                  ))}
                </div>
              </div>
            </m.section>

            {/* Services Section */}
            <m.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
                  Services I Offer
                </h2>
                <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
                  Comprehensive solutions from concept to deployment, ensuring
                  robust and scalable products.
                </p>
              </div>
              <m.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              >
                {[
                  {
                    title: "Product & Frontend Engineering",
                    icon: Wrench,
                    desc: "Designing accessible, high-performance React & Next.js frontends — component architecture, UX optimizations and CI flow.",
                  },
                  {
                    title: "API Design & Integrations",
                    icon: Code,
                    desc: "REST and GraphQL APIs, payments integrations and resilient event-driven backends with Node/Express and TypeScript.",
                  },
                  {
                    title: "Performance & Observability",
                    icon: TrendingUp,
                    desc: "Lighthouse-driven LCP/TTFB optimizations, caching, and observability for resilient production systems.",
                  },
                  {
                    title: "Cloud & Infrastructure",
                    icon: Rocket,
                    desc: "AWS-native deployments, CI/CD, Docker workflows and scalable infra design for sustainable cost/performance trade-offs.",
                  },
                  {
                    title: "Mobile & App Development",
                    icon: Palette, // Changed to Palette for variety, Code was used twice
                    desc: "Full-stack mobile & cross-platform apps with React Native and performance-focused architectures.",
                  },
                  {
                    title: "SEO & Growth Optimization",
                    icon: TrendingUp,
                    desc: "Technical SEO, structured data, and Lighthouse-first engineering to improve discoverability and conversion.",
                  },
                  {
                    title: "Digital Marketing & Acquisition",
                    icon: Users,
                    desc: "Data-driven acquisition, landing page optimization, analytics and A/B testing to scale user growth.",
                  },
                  {
                    title: "Web Development",
                    icon: Wrench, // Changed to Wrench for variety, Code was used twice
                    desc: "Production-ready websites using Next.js, TypeScript — focused on accessibility, SEO and speed.",
                  },
                  {
                    title: "Consulting & Architecture",
                    icon: Wrench,
                    desc: "Architecture reviews, migration planning and developer experience improvements for teams scaling fast.",
                  },
                ].map((s, index) => (
                  <m.div
                    key={s.title}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }} // Keep existing hover effect
                    whileFocus={{ y: -6 }} // Keep existing focus effect
                    tabIndex={0}
                    role="article"
                    aria-label={s.title}
                    className="outline-none"
                  >
                    <Card className="h-full border border-white/15 bg-gradient-to-br from-[#061025]/50 via-[#07162b]/30 to-transparent backdrop-blur-md hover:shadow-2xl transition-shadow duration-300 rounded-xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#06b6d4]/30">
                      <CardContent className="p-4 flex gap-2 items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/3 flex  items-center justify-center text-[#8ef3c1]">
                          {s.icon ? (
                            <s.icon className="w-6 h-6" />
                          ) : (
                            <Code className="w-6 h-6" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white">
                            {s.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400">{s.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </m.div>
                ))}
              </m.div>
            </m.section>

            {/* Education & Achievements */}
            <m.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]">
                  Education & Community
                </h2>
                <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
                  My academic background and commitment to giving back to the
                  community.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Education */}
                <m.div
                  whileHover={{ y: -6 }}
                  whileFocus={{ y: -6 }}
                  tabIndex={0}
                  role="article"
                  aria-label="Education section"
                  className="outline-none"
                >
                  <Card className="p-6 h-full rounded-xl bg-white/5 border border-white/10 transition-transform duration-150 hover:translate-y-[-3px]">
                    <h3 className="text-2xl font-bold text-[#06b6d4] mb-4 flex items-center ">
                      <Award className="w-6 h-6 mr-3 text-[#8ef3c1]" />
                      Education
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-100">
                          Master of Computer Application
                        </h4>
                        <p className="text-[#3ed6ac] font-medium">
                          Maharaja Agrasen Himalayan Garhwal University (MAHGU)
                        </p>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-5 h-5 text-slate-400 " />
                          <span className="text-slate-300">Uttarakhand</span>
                        </div>
                        <div className="flex items-center text-slate-400 mt-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          2021 - 2023
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-100">
                          Bachelor in Computer Application
                        </h4>
                        <p className="text-[#3ed6ac] font-medium">
                          Indira Gandhi National Open University (IGNOU)
                        </p>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-5 h-5 text-slate-400 " />
                          <span className="text-slate-300">Delhi</span>
                        </div>
                        <div className="flex items-center text-slate-400 mt-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          2018 - 2021
                        </div>
                      </div>
                    </div>
                  </Card>
                </m.div>

                {/* Community Work */}
                <m.div
                  whileHover={{ y: -6 }}
                  whileFocus={{ y: -6 }}
                  tabIndex={0}
                  role="article"
                  aria-label="Community impact"
                  className="outline-none"
                >
                  <Card className="p-6 h-full rounded-xl bg-white/5 border border-white/10 transition-transform duration-150 hover:translate-y-[-3px]">
                    <h3 className="text-2xl font-bold text-[#06b6d4] mb-4 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-[#8ef3c1]" />
                      Community Impact
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-100">
                          Computer Skills & Education Volunteer
                        </h4>
                        <p className="text-[#3ed6ac] font-medium">
                          Local Community
                        </p>
                        <div className="flex items-center text-slate-400 mt-1 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          July 2020 - April 2022
                        </div>
                        <p className="text-slate-300">
                          Volunteered as a tutor for locals in my village,
                          teaching underprivileged children basic computer skills
                          and primary education.
                        </p>
                      </div>
                    </div>
                  </Card>
                </m.div>
              </div>
            </m.section>

            {/* Personal Interests */}
            <m.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-4 text-center">
                Beyond Code
              </h2>
              <p className="mt-2 text-base text-slate-400 max-w-xl mx-auto mb-10">
                When I'm not at my keyboard, I'm usually exploring other passions
                that keep me balanced and inspired.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    Icon: BookOpen,
                    title: "Audio Books",
                    desc: "Passionate about continuous learning through audiobooks, staying updated with technology trends and personal development.",
                    color: "text-blue-400",
                  },
                  {
                    Icon: Bike,
                    title: "Cricket & Sports",
                    desc: "An avid cricket player and sports enthusiast. It keeps me active and sharpens my strategic thinking.",
                    color: "text-orange-400",
                  },
                  {
                    Icon: Sprout,
                    title: "Gardening",
                    desc: "I find peace and satisfaction in gardening, nurturing plants, and creating a green, tranquil space.",
                    color: "text-green-400",
                  },
                ].map((interest, index) => (
                  <m.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="outline-none"
                    tabIndex={0}
                    role="article"
                    aria-label={interest.title}
                  >
                    <Card className="p-6 h-full rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1">
                      <div
                        className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${interest.color}`}
                      >
                        <interest.Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 mb-2">
                        {interest.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{interest.desc}</p>
                    </Card>
                  </m.div>
                ))}
              </div>
            </m.section>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
