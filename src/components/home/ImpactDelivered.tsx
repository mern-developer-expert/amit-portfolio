import { m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/constant";
import { Users, ShieldCheck, Zap } from "lucide-react";

const ImpactDelivered = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 z-10 py-10">
            <div className="max-w-6xl mx-auto">
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center text-sm text-slate-300 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-4">Impact Delivered</div>
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
                        Measurable Engineering Outcomes
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        I focus on building secure, scalable systems that directly drive business value. Below are a few key highlights from recent production deployments.
                    </p>
                </m.div>

                <m.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        {
                            title: "1M+ Users Platform",
                            subtitle: "Bright DiGi Gold Fintech",
                            icon: <Users className="w-8 h-8" />,
                            desc: "Engineered scalable fintech architecture capable of handling high-volume concurrent transactions for millions of active users.",
                            color: "from-[#06b6d4] to-[#3ed6ac]"
                        },
                        {
                            title: "Secure Healthcare SaaS",
                            subtitle: "OpenAI-Powered Matching",
                            icon: <ShieldCheck className="w-8 h-8" />,
                            desc: "Built HIPAA-aware medical systems integrating an advanced AI compatibility engine to generate individual medical reports based on blood samples and questionnaires.",
                            color: "from-[#3ed6ac] to-[#8ef3c1]"
                        },
                        {
                            title: "Real-time EdTech App",
                            subtitle: "Interactive Coaching Hub",
                            icon: <Zap className="w-8 h-8" />,
                            desc: "Orchestrated robust websockets and synchronous data exchange infrastructure for a lag-free digital classroom experience.",
                            color: "from-[#8ef3c1] to-[#06b6d4]"
                        },
                    ].map((impact, index) => (
                        <m.div key={index} variants={fadeInUp} className="group">
                            <Card className="h-full bg-gradient-to-br from-[#061025]/60 via-[#07162b]/50 to-[#071826]/40 hover:shadow-2xl transition-all duration-300 border border-white/5 group-hover:border-white/10 backdrop-blur-md relative overflow-hidden">
                                {/* Subtle animated glow on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-tr ${impact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${impact.color} flex items-center justify-center text-black mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out`}>
                                        {impact.icon}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-2">{impact.title}</h3>
                                    <div className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-tr ${impact.color} mb-4`}>
                                        {impact.subtitle}
                                    </div>
                                    <p className="text-sm text-slate-300 leading-relaxed max-w-[280px]">
                                        {impact.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </m.div>
                    ))}
                </m.div>
            </div>
        </section>
    );
};

export default ImpactDelivered;
