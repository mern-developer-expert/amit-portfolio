import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import SecondaryButton from "@/components/buttons/secondaryButton";
import PrimaryButtons from "@/components/buttons/primaryButtons";
import GlowText from "@/components/home/glowText";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";

export default function Hero() {
  return (
    <>

      <header
        className="pt-[calc(4rem+2rem)] px-4 sm:px-6 lg:px-8 relative z-10"
        role="banner"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10 md:py-12">
              {/* Left column */}
              <div className="lg:col-span-7 px-4 sm:px-6 md:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] drop-shadow-2xl">
                  Amit Kumar
                  <span className="block text-2xl md:text-4xl font-semibold text-white/80 mt-2 tracking-normal">
                    MERN Developer Expert & Product Engineer
                  </span>
                </h1>

                <p className="mt-6 leading-snug text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl">
                  I design and ship resilient, production-grade web
                  applications. I&apos;m currently{" "}
                  <strong>Learning in Public</strong> — sharing my journey
                  building SaaS platforms for 1M+ users with the MERN stack and
                  high-performance engineering.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 items-center">
                  <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
                    <Link href="/contact">
                      <SecondaryButton
                        title="Get In Touch"
                        containerStyles="px-4 sm:px-8 py-2 rounded-3xl text-sm sm:text-lg font-base sm:leading-wide"
                      />
                    </Link>
                    <Link href="/about">
                      <PrimaryButtons
                        title="More About Me"
                        containerStyles="px-4 sm:px-8 py-2 rounded-3xl text-sm sm:text-lg font-base sm:leading-wide"
                      />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 flex-wrap text-sm text-slate-300">
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg font-bold">
                      1M+
                    </strong>
                    <GlowText />
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg">SaaS</strong>
                    <div className="text-sm">
                      Medical Kundali — healthcare platform
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <strong className="text-white text-lg">Real-time</strong>
                    <div className="text-sm">
                      TestOfire — realtime education platform
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column – hero image */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end px-4 sm:px-6 md:px-0">
                <div className="relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-br from-[#07162b]/70 via-[#07162b]/40 to-[#0b1f2b]/30 p-6 backdrop-blur-md">
                  <div className="relative z-10 flex items-center justify-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl">
                    <Image
                      src="/hero-illustration.svg"
                      alt="Amit Kumar - MERN Developer Expert and Product Engineer"
                      width={900}
                      height={600}
                      className="w-full h-auto"
                      style={{ height: "auto" }}
                      priority
                      fetchPriority="high"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-10 text-white rounded-full flex items-center justify-center text-transparent bg-gradient-to-r from-[#739d88] via-[#52a18b] to-[#508c96] drop-shadow-2xl font-bold">
                        AK
                      </div>
                      <div>
                        <div className="text-sm text-slate-200 font-semibold">
                          Amit Kumar
                        </div>
                        <div className="text-xs text-slate-300">
                          MERN Full‑Stack • Product Engineer
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
                      <div className="px-1.5 py-1 bg-white/5 rounded-full">
                        SaaS
                      </div>
                      <div className="px-1.5 py-1 bg-white/5 rounded-full">
                        Real-time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements badges */}
            <div
              className="flex justify-center gap-3 items-center flex-wrap"
              aria-hidden
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">
                ⭐ Bright Digi Gold — 1M+ users
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">
                🏥 Medical Kundali — healthcare SaaS
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-slate-200">
                🎓 TestOfire — real-time EdTech
              </span>
            </div>

            {/* Social icons */}
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/mern-developer-expert"
                className="text-gray-200 hover:text-[#eeb056] transition-transform hover:scale-110"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/mern-developer-expert-amit"
                className="text-gray-200 hover:text-[#eeb056] transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-7 h-7" />
              </a>
              <a
                href="https://x.com/Amitsin40190332"
                className="text-gray-100 hover:text-[#eeb056] transition-transform hover:scale-110"
                aria-label="X"
              >
                <XIcon className="w-10 h-10 my-1" />
              </a>
              <a
                href="mailto:notgetin18@gmail.com"
                className="text-gray-200 hover:text-[#eeb056] transition-transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Arrow down - CSS Animation */}
          <div className="flex justify-center my-4 sm:my-6 opacity-0 animate-fade-in delay-1000">
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
