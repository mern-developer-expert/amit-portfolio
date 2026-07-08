"use client";
import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { wrap } from "popmotion";

const testimonials = [
  {
    quote:
      "Amit was instrumental in rebuilding our frontend architecture. His expertise in Next.js and performance optimization led to a 30% improvement in our page load times, which was great for our user engagement.",
    name: "Ajitesh Kumar",
    title: "COO, Fintech(Bright DiGi Gold)",
    avatar: "/avatars/jane-doe.png",
  },
  {
    quote:
      "Amit has a strong ability to turn complex product requirements into scalable, reliable frontend and backend systems. He brings clear product thinking and disciplined engineering to every delivery.",
    name: "Product Stakeholder",
    title: "Commerce Platform",
    avatar: "/avatars/john-smith.png",
  },
  {
    quote:
      "Amit's expertise in React and performance optimization helped create a more scalable and stable product architecture, improving the experience for both users and internal teams.",
    name: "Technical Collaborator",
    title: "Platform Engineering",
    avatar: "/avatars/jane-doe.png",
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return { x: direction < 0 ? "100%" : "-100%", opacity: 0 };
  },
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  // `wrap` function from popmotion will keep the index within the bounds of the array
  const testimonialIndex = wrap(0, testimonials.length, page);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  useEffect(() => {
    // If the user is hovering, don't auto-play
    if (isHovered) return;

    // Set up an interval to advance the carousel
    const autoplayInterval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    // Clear the interval on component unmount or when isHovered changes
    return () => clearInterval(autoplayInterval);
  }, [isHovered, paginate]);

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-3">
          What My Collaborators Say
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
          I thrive on building great products and even better relationships.
        </p>
      </m.div>

      <div className="mt-10 relative h-[320px] sm:h-[280px] md:h-[240px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <m.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                paginate(1);
              } else if (swipe > 10000) {
                paginate(-1);
              }
            }}
            className="absolute w-full max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#07162b]/60 to-[#071826]/50 p-6 sm:p-8 backdrop-blur-md shadow-lg"
          >
            <blockquote className="text-slate-100 text-base sm:text-lg leading-relaxed mb-6 relative z-10">
              <div className="relative">
                <span className="absolute -left-1 top-0 text-4xl text-cyan-200 transition-colors duration-500">
                  “
                </span>
                <span className="px-4">
                  {testimonials[testimonialIndex].quote}
                </span>
                <span className="absolute text-4xl text-cyan-200 transition-colors duration-500">
                  ”
                </span>
              </div>
            </blockquote>
            <figcaption className="mt-3 flex flex-col gap-4">
              <div className="border-t border-white/10 relative z-10">
                <div className="flex items-center gap-4 mt-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#3ed6ac]  font-bold text-white flex items-center justify-center ${
                      testimonialIndex === 1 ? "w-16 sm:w-12" : "w-12"
                    }`}
                  >
                    {testimonials[testimonialIndex].name.charAt(0)}
                    {testimonials[testimonialIndex].name
                      .split(" ")[1]
                      ?.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonials[testimonialIndex].name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonials[testimonialIndex].title}
                    </div>
                  </div>
                </div>
              </div>
            </figcaption>
          </m.div>
        </AnimatePresence>

        <button
          className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20 p-1 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-4 w-4 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20 p-1 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-4 w-4 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > testimonialIndex ? 1 : -1])}
            className={`w-5 h-3 rounded-full transition-colors ${
              i === testimonialIndex
                ? "bg-cyan-400"
                : "bg-slate-600 hover:bg-slate-400"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
