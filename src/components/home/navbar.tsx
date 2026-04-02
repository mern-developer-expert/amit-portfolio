"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useEffect, useCallback } from "react";
import { handleDownloadResume } from "@/utility";
import Image from "next/image";
import amitImage from "../../../public/favicons/web-app-manifest-192x192.png";
import { usePathname } from "next/navigation";
import { Download, Menu, X, Home, User, Mail, Settings, BookOpen, ArrowBigLeft } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;

  // Scroll lock effect
  useEffect(() => {
    if (isMenuOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed"; // Prevents iOS bounce
      document.body.style.width = "100%"; // Prevents layout shift
    } else {
      // Restore body scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const navLinks = useMemo(
    () => [
      {
        href: "/",
        label: "Home",
        icon: Home,
        description: "Discover my latest projects and journey as a MERN developer."
      },
      {
        href: "/about",
        label: "About",
        icon: User,
        description: "Learn about my skills, experience, and passion for full-stack engineering."
      },
      {
        href: "/contact",
        label: "Contact",
        icon: Mail,
        description: "Get in touch for collaborations, consultations, or quick chats."
      },
      {
        href: "/services",
        label: "Services",
        icon: Settings,
        description: "Explore end-to-end development solutions from MVP to scale."
      },
      {
        href: "/blogs",
        label: "Blogs",
        icon: BookOpen,
        description: "Read insights on MERN, performance tips, and real-world dev stories."
      },
    ],
    []
  );

  const navVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <LazyMotion features={domAnimation} strict>
    <nav
      className={`w-full max-w-7xl fixed top-3   bg-[#07162b]/50 backdrop-blur-lg z-20 border-[0.5px] sm:border border-[#06b6d4] sm:border-white/15 rounded-xl sm:rounded-3xl shadow-[#06b6d4] sm:shadow-black/20 ${isMenuOpen ? "shadow-sm" : ""}`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link href="/">
            <m.div whileHover={{ scale: 1.05 }}>
              <Image
                src={amitImage}
                width={64}
                height={64}
                alt="amit image"
                className="rounded-full border-2 border-white/80 shadow-md shadow-white/50"
              />
            </m.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 border border-white/20 rounded-full px-8 py-3 shadow-sm shadow-white/30 backdrop-blur-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition-colors duration-300 ${isActive
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]"
                    : "text-slate-300 hover:text-[#3ed6ac]"
                    }`}
                  aria-label={`Go to ${link.label} page`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
            <button
              onClick={toggleMenu}
              className="text-white border border-white/80 shadow-white/40 transition-colors duration-300 hover:text-[#3ed6ac] inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10 mix-blend-overlay rounded-md p-1 shadow-lg"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu
                  style={{ color: "#fff" }}
                  className="w-6 h-6 text-white"
                />
              )}
            </button>
          </div>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleDownloadResume("pdf")}
              className=" text-white font-medium uppercase"
              style={{
                fontWeight: 600,
                borderRadius: "20px",
                border: "0.5px solid #F9DDB5",
                background:
                  "linear-gradient(90deg, #EEB056 0%,rgb(161, 103, 16) 100%)", // Gradient background
                boxShadow: "0px 4px 8px 0pxrgba(251, 250, 250, 0.3)", // Subtle shadow for depth
                position: "relative", // Ensure proper layering
                outline: "none", // Remove default outline
              }}
              aria-label="Download Amit Kumar's resume in PDF format"
            >
              <Download
                style={{ fontWeight: 600 }}
                className="w-4 h-4 mr-1 text-white"
              />
              Resume
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <m.div
          variants={navVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          className="md:hidden overflow-hidden"
        // transition-colors duration-300 bg-[#07162b]/50 backdrop-blur-lg border border-white/15 rounded-3xl shadow-lg shadow-black/20
        >
          <div className="px-4 py-4 my-3 mb-4 bg-white/15 border-b border-white/20 shadow-black shadow-md rounded-sm">
            <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-0.5">Quick Navigation</p>
            <p className="text-sm text-slate-300">Choose the way that works for you.</p>
          </div>

          <div className="flex flex-col space-y-4 pb-3 overflow-y-auto h-full border border-white/20 rounded-xl p-5 mb-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  className={`flex items-start gap-3 pl-4 rounded-lg transition-all duration-300 ${isActive
                    ? "bg-gradient-to-r from-[#8ef3c1]/20 to-[#06b6d4]/20 border border-[#06b6d4]/90 text-white shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-white/10 bg-white/5 border border-white/40 hover:border-white/20 transition-colors duration-300"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Go to ${link.label} page`}
                >
                  <link.icon className={`w-8 h-8 flex-shrink-0 top-1/2 translate-y-1/2 ${isActive ? "text-[#06b6d4]" : "text-slate-400 bg-white/10 rounded  px-1"}`} />
                  <div className="flex-1">
                    <span className="font-semibold block py-1">{link.label}</span>
                    <p className="text-[10px] leading-relaxed text-slate-200 mb-1.5">{link.description}</p>
                    {/* {isActive && <span className="text-xs text-[#06b6d4] mt-1 block">Active</span>} */}
                  </div>
                  <span className={`text-[#06b6d4] text-sm font-medium arrow ${isActive ? "opacity-100" : "opacity-0"}`}><ArrowBigLeft className="m-0.5" /></span>
                </Link>
              );
            })}

            <Button
              onClick={() => {
                handleDownloadResume("pdf");
                setIsMenuOpen(false);
              }}
              style={{
                fontWeight: 900,
                borderRadius: "20px",
                border: "1px solid #F9DDB5",
                background:
                  "linear-gradient(90deg, #EEB056 0%,rgb(161, 103, 16) 100%)", // Gradient background
                boxShadow: "0px 4px 8px 0pxrgba(251, 250, 250, 0.3)", // Subtle shadow for depth
                position: "relative", // Ensure proper layering
                outline: "none", // Remove default outline
              }}
              className=" text-white w-40 tracking-wide mx-auto"
              aria-label="Download Amit Kumar's resume in PDF format"
            >
              <Download
                className="w-4 h-4 mr-1"
                style={{ fontWeight: 900, fontSize: "20px", color: "#fffem" }}
              />
              Resume
            </Button>
          </div>
        </m.div>
      </div>
    </nav>
    </LazyMotion>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { Download, Menu, X } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { useState, useMemo } from "react";
// import { handleDownloadResume } from "@/utility";
// import Image from "next/image";
// import amitImage from "../../../public/favicons/web-app-manifest-192x192.png";
// import { usePathname } from "next/navigation";

// // --- Framer Motion Variants for the Drawer ---
// const drawerVariants = {
//   closed: {
//     x: "100%", // Start off-screen to the right
//     opacity: 0,
//     transition: { type: "tween", duration: 0.3 },
//   },
//   open: {
//     x: 0, // Slide fully onto the screen
//     opacity: 1,
//     transition: { type: "tween", duration: 0.3 },
//   },
// };

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navLinks = useMemo(
//     () => [
//       { href: "/", label: "Home" },
//       { href: "/about", label: "About" },
//       { href: "/contact", label: "Contact" },
//       { href: "/services", label: "Services" },
//       { href: "/blog", label: "Blog" },
//     ],
//     []
//   );

//   return (
//     <>
//       {/* --- Main Navigation Header (Fixed Top) --- */}
//       <motion.nav
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         // Removed -translate-x-1/2 from container for better centering in fixed position
//         className="w-full mx-auto max-w-7xl fixed top-3 transform -translate-x-1/2 bg-[#07162b]/50 backdrop-blur-lg z-30 border border-white/15 rounded-xl sm:rounded-3xl shadow-lg shadow-black/20"
//       >
//         <div className="px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-2">
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Image
//                 src={amitImage}
//                 width={192}
//                 height={192}
//                 alt="amit image"
//                 className="h-16 w-16 rounded-full border-2 border-white/50 shadow-md shadow-white/80"
//                 priority
//               />
//             </motion.div>

//             {/* Desktop Links */}
//             <div className="hidden md:flex space-x-8 border border-white/20 rounded-full px-8 py-3 shadow-sm shadow-white/30 backdrop-blur-lg">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`font-semibold transition-colors duration-300 ${
//                       isActive
//                         ? "bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]"
//                         : "text-slate-300 hover:text-[#3ed6ac]"
//                     }`}
//                     aria-label={`Go to ${link.label} page`}
//                   >
//                     {link.label}
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden text-white">
//               <button
//                 onClick={toggleMenu}
//                 className="text-white border border-white/30 transition-colors duration-300 hover:text-[#3ed6ac] inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10 mix-blend-overlay rounded-md p-2 shadow-lg shadow-black/50"
//                 aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//               >
//                 {isMenuOpen ? (
//                   <X className="w-6 h-6 text-white" />
//                 ) : (
//                   <Menu
//                     style={{ color: "#fff" }}
//                     className="w-6 h-6 text-white"
//                   />
//                 )}
//               </button>
//             </div>

//             {/* Resume Button (Desktop) */}
//             <div className="hidden md:block">
//               <Button
//                 onClick={() => handleDownloadResume("pdf")}
//                 className=" text-white font-medium uppercase"
//                 style={{
//                   fontWeight: 600,
//                   borderRadius: "20px",
//                   border: "0.5px solid #F9DDB5",
//                   background:
//                     "linear-gradient(90deg, #EEB056 0%,rgb(161, 103, 16) 100%)",
//                   boxShadow: "0px 4px 8px 0pxrgba(251, 250, 250, 0.3)",
//                   position: "relative",
//                   outline: "none",
//                 }}
//                 aria-label="Download Amit Kumar's resume in PDF format"
//               >
//                 <Download
//                   style={{ fontWeight: 600 }}
//                   className="w-4 h-4 mr-1 text-white"
//                 />
//                 Resume
//               </Button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* --- Mobile Drawer (Right-Side Slide-Out) --- */}
//       {/* Conditional render or transition to fade in a transparent overlay */}
//       {isMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={toggleMenu}
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//         />
//       )}

//       <motion.div
//         variants={drawerVariants}
//         initial="closed"
//         animate={isMenuOpen ? "open" : "closed"}
//         // New styles for the drawer
//         className="fixed top-0 right-0 w-3/4 max-w-xs h-full min-h-screen  backdrop-blur-xl z-50 shadow-2xl md:hidden"
//       >
//         <div className="flex flex-col h-full p-6">
//           {/* Drawer Header (Close Button) */}
//           <div className="flex justify-end mb-10">
//             <button
//               onClick={toggleMenu}
//               className="text-white border border-white/30 shadow-lg shadow-white/20 transition-colors duration-300 hover:text-[#3ed6ac] rounded-md p-2"
//               aria-label="Close menu"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Nav Links */}
//           <div className="flex flex-col space-y-3 flex-grow">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;
//               return (
//                 <Link
//                   key={`mobile-${link.href}`}
//                   href={link.href}
//                   className={`text-right text-xl font-semibold transition-colors duration-300 py-1 ${
//                     isActive
//                       ? "bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]"
//                       : "text-slate-200 hover:text-[#3ed6ac]"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                   aria-label={`Go to ${link.label} page`}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Resume Button (Pushed to Bottom) */}
//           <div className="mt-8 pb-4">
//             {" "}
//             {/* Added padding bottom for spacing */}
//             <Button
//               onClick={() => {
//                 handleDownloadResume("pdf");
//                 setIsMenuOpen(false);
//               }}
//               style={{
//                 fontWeight: 600,
//                 borderRadius: "20px",
//                 border: "1px solid #F9DDB5",
//                 background:
//                   "linear-gradient(90deg, #EEB056 0%,rgb(161, 103, 16) 100%)",
//                 boxShadow: "0px 4px 8px 0pxrgba(251, 250, 250, 0.3)",
//                 position: "relative",
//                 outline: "none",
//               }}
//               className="text-white w-full tracking-wide py-3" // Changed to w-full for full width in drawer
//               aria-label="Download Amit Kumar's resume in PDF format"
//             >
//               <Download
//                 className="w-4 h-4 mr-1.5"
//                 style={{ fontWeight: 600 }}
//               />
//               Download Resume
//             </Button>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// }
