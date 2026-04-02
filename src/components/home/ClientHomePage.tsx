"use client";

import React, { Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const Skills = React.lazy(() => import("@/components/home/Skills"));
const Projects = React.lazy(() => import("@/components/home/projects"));
const ImpactDelivered = React.lazy(() => import("@/components/home/ImpactDelivered"));
const Services = React.lazy(() => import("@/components/home/services"));
const Testimonials = React.lazy(() => import("@/components/home/testimonials"));
const CTAsection = React.lazy(() => import("@/components/home/ctaSection"));

const spinner = (
  <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
);

export default function HomeContent() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="relative overflow-hidden">
        <div className="relative z-10">
          <section aria-labelledby="skills-heading" className="py-6">
            <h2 id="skills-heading" className="sr-only">
              Skills and Technologies
            </h2>
            <Suspense fallback={<div className="flex h-[400px] w-full items-center justify-center">{spinner}</div>}>
              <Skills />
            </Suspense>
          </section>

          <section aria-labelledby="projects-heading" className="relative z-10 py-8">
            <h2 id="projects-heading" className="sr-only">
              Featured Projects
            </h2>
            <Suspense fallback={<div className="flex h-96 w-full items-center justify-center">{spinner}</div>}>
              <Projects />
            </Suspense>
          </section>

          <section aria-labelledby="impact-heading" className="relative z-10 py-6">
            <h2 id="impact-heading" className="sr-only">
              Impact Delivered
            </h2>
            <Suspense fallback={<div className="flex h-64 w-full items-center justify-center">{spinner}</div>}>
              <ImpactDelivered />
            </Suspense>
          </section>

          <section aria-labelledby="services-heading" className="relative z-10 py-10">
            <h2 id="services-heading" className="sr-only">
              Services & Offerings
            </h2>
            <Suspense fallback={<div className="flex h-96 w-full items-center justify-center">{spinner}</div>}>
              <Services />
            </Suspense>
          </section>

          <section aria-labelledby="testimonials-heading" className="relative z-10 py-10">
            <h2 id="testimonials-heading" className="sr-only">
              Testimonials
            </h2>
            <Suspense fallback={<div className="flex h-96 w-full items-center justify-center">{spinner}</div>}>
              <Testimonials />
            </Suspense>
          </section>

          <Suspense fallback={<div className="h-40 w-full" />}>
            <CTAsection />
          </Suspense>
        </div>
      </div>
    </LazyMotion>
  );
}
