"use client";

import React, { Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Skills from "@/components/home/Skills";


const Projects = React.lazy(() => import("@/components/home/projects"));
const ImpactDelivered = React.lazy(() => import("@/components/home/ImpactDelivered"));
const Services = React.lazy(() => import("@/components/home/services"));
const Testimonials = React.lazy(() => import("@/components/home/testimonials"));
const CTAsection = React.lazy(() => import("@/components/home/ctaSection"));


export default function HomeContent() {
    return (
        <LazyMotion features={domAnimation} strict>
            <div className="relative overflow-hidden">
                <div className="relative z-10">
                    <section aria-labelledby="skills-heading" className="py-6">
                        <h2 id="skills-heading" className="sr-only">
                            Skills and Technologies
                        </h2>
                        <Skills />
                    </section>

                    <section
                        aria-labelledby="projects-heading"
                        className="relative z-10 py-8"
                    >
                        <h2 id="projects-heading" className="sr-only">
                            Featured Projects
                        </h2>
                        <Suspense fallback={<div className="w-full h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div></div>}>
                            <Projects />
                        </Suspense>
                    </section>

                    <section
                        aria-labelledby="impact-heading"
                        className="relative z-10 py-6"
                    >
                        <h2 id="impact-heading" className="sr-only">
                            Impact Delivered
                        </h2>
                        <Suspense fallback={<div className="w-full h-64 flex items-center justify-center"><div className="w-8 h-8 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div></div>}>
                            <ImpactDelivered />
                        </Suspense>
                    </section>

                    <section
                        aria-labelledby="services-heading"
                        className="relative z-10 py-10"
                    >
                        <h2 id="services-heading" className="sr-only">
                            Services & Offerings
                        </h2>
                        <Suspense fallback={<div className="w-full h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div></div>}>
                            <Services />
                        </Suspense>
                    </section>

                    <section
                        aria-labelledby="testimonials-heading"
                        className="relative z-10 py-10"
                    >
                        <h2 id="testimonials-heading" className="sr-only">
                            Testimonials
                        </h2>
                        <Suspense fallback={<div className="w-full h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div></div>}>
                            <Testimonials />
                        </Suspense>
                    </section>
                    <Suspense fallback={<div className="w-full h-40"></div>}>
                        <CTAsection />
                    </Suspense>
                </div>
            </div>
        </LazyMotion>
    );
}
