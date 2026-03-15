"use client";

import type React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Mail, Phone, Download, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import PrimaryButtons from "@/components/buttons/primaryButtons";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";

import { fadeInUp, staggerContainer } from "@/constant";
import { handleDownloadResume } from "@/utility";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ContactUs() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = (field: keyof typeof errors) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateField = (field: keyof typeof errors, value: string) => {
    let error = "";
    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Email is invalid";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
    return !error;
  };

  const validateForm = () => {
    const values = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      subject: subjectRef.current?.value || "",
      message: messageRef.current?.value || "",
    };

    let isValid = true;
    (Object.keys(values) as Array<keyof typeof values>).forEach((field) => {
      if (!validateField(field, values[field])) isValid = false;
    });
    return isValid;
  };

  const handleBlur = (field: keyof typeof errors) => {
    const value = (field === "message" ? messageRef.current?.value : (field === "name" ? nameRef.current?.value : (field === "email" ? emailRef.current?.value : subjectRef.current?.value))) || "";
    validateField(field, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      subject: subjectRef.current?.value || "",
      message: messageRef.current?.value || "",
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // After successful submission
        toast.success(
          <div className="text-left">
            <h2 className="text-xl font-bold text-white mb-2">Message Received—Let's Build Something Epic!</h2>
            <p className="text-slate-300 mb-4">Thanks, {formData.name}! I'll reply within 24h with next steps.</p>
            <Link href="/services" className="text-[#06b6d4] hover:underline text-sm">Explore Services →</Link>
          </div>,
          { duration: 5000, style: { background: "#1e293b", border: "1px solid #06b6d4" } }
        );

        // Clear form fields
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (subjectRef.current) subjectRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";

        // Clear errors
        setErrors({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.error || "Failed to send message", { duration: 4000 });
      }
    } catch (error: any) {
      toast.error("Network error. Please try again.");
      console.log("error", error.message)
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen relative overflow-hidden">
        {/* Decorative gradient layers */}


        <div className="pt-32 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <m.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center mb-12 sm:mb-16"
            >
              <m.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] mb-4"
              >
                Let's Connect
              </m.h1>
              <m.p
                variants={fadeInUp}
                className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
              >
                Ready to discuss your next project or just want to say hello? I'm
                available for freelance opportunities and would love to explore
                how we can work together.
              </m.p>
            </m.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact Information */}
              <m.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8 lg:col-span-5"
              >
                <div>
                  <h2 className="text-3xl font-bold text-[#06b6d4] mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-base text-slate-400">
                    I'm always open to discussing new freelance opportunities or
                    interesting projects. Feel free to reach out.
                  </p>
                </div>

                <m.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="space-y-4"
                >
                  <m.div variants={fadeInUp} className="">
                    <Card className="p-4 bg-white/5 border border-white/10 hover:border-white/30 transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-[#3ed6ac]" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-slate-100">
                            Email
                          </h3>
                          <a
                            href="mailto:notgetin18@gmail.com"
                            className="text-sm text-[#3ed6ac] hover:text-[#8ef3c1] transition-colors"
                            aria-label="Email Amit Kumar at notgetin18@gmail.com"
                          >
                            notgetin18@gmail.com
                          </a>
                        </div>
                      </div>
                    </Card>
                  </m.div>

                  <m.div variants={fadeInUp}>
                    <Card className="p-4 bg-white/5 border border-white/10 hover:border-white/30 transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-[#3ed6ac]" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-slate-100">
                            Phone
                          </h3>
                          <a
                            href="tel:+919660637657"
                            className="text-sm text-[#3ed6ac] hover:text-[#8ef3c1] transition-colors"
                            aria-label="Call Amit Kumar at +91 9660637657"
                          >
                            (+91) 9660637657
                          </a>
                        </div>
                      </div>
                    </Card>
                  </m.div>

                  <m.div variants={fadeInUp}>
                    <Card className="p-4 bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-[#3ed6ac]" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-slate-100">
                            Location
                          </h3>
                          <p className="text-sm text-slate-300">Delhi, India</p>
                        </div>
                      </div>
                    </Card>
                  </m.div>
                </m.div>

                {/* Social Links */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4 backdrop-blur-lg">
                    <m.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      href="https://github.com/mern-developer-expert"
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-300 bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-300"
                      aria-label="Visit Amit Kumar's GitHub profile"
                    >
                      <GitHubIcon className="w-7 h-7" />
                    </m.a>
                    <m.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://www.linkedin.com/in/mern-developer-expert-amit"
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-300 bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-300"
                      aria-label="Visit Amit Kumar's LinkedIn profile"
                    >
                      <LinkedinIcon className="w-7 h-7" />
                    </m.a>
                    <m.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href="https://x.com/Amitsin40190332"
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-300 bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-300"
                      aria-label="Visit Amit Kumar's X profile"
                    >
                      <XIcon className="w-10 h-10 pt-2.5 pl-2.5" />
                    </m.a>
                  </div>
                </m.div>

                {/* Resume Download */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <div className="flex flex-col space-y-4">
                    <div
                      onClick={() => handleDownloadResume("pdf")}
                      className="w-full flex items-center justify-center py-3 text-base rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200 text-white cursor-pointer"
                      aria-label="Download Amit Kumar's resume in PDF format"
                    >
                      <Download className="w-5 h-5 mr-2 text-[#3ed6ac]" />
                      <span>Download Resume (PDF)</span>
                    </div>
                    <div
                      onClick={() => handleDownloadResume("docx")}
                      className="w-full flex items-center justify-center py-3 text-base rounded-md bg-transparent border border-white/10 hover:bg-white/5 transition-colors duration-200 text-white cursor-pointer"
                      aria-label="Download Amit Kumar's resume in DOCX format"
                    >
                      <Download className="w-5 h-5 mr-2 text-[#3ed6ac]" />
                      <span>Download Resume (DOCX)</span>
                    </div>
                  </div>
                </m.div>
              </m.div>

              {/* Contact Form */}
              <m.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <Card className="p-6 sm:p-8 bg-white/5 border border-white/10 backdrop-blur-lg">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-300 mb-2"
                        >
                          Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          ref={nameRef}
                          onFocus={() => clearError("name")}
                          onBlur={() => handleBlur("name")}
                          className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-300 mb-2"
                        >
                          Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          ref={emailRef}
                          onFocus={() => clearError("email")}
                          onBlur={() => handleBlur("email")}
                          className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                          placeholder="your.email@example.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            className="text-red-600 text-sm mt-1"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        ref={subjectRef}
                        onFocus={() => clearError("subject")}
                        onBlur={() => handleBlur("subject")}
                        className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                        placeholder="What's this about?"
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                      />
                      {errors.subject && (
                        <p
                          id="subject-error"
                          className="text-red-600 text-sm mt-1"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        ref={messageRef}
                        onFocus={() => clearError("message")}
                        onBlur={() => handleBlur("message")}
                        rows={6}
                        className="w-full bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:ring-[#3ed6ac]"
                        placeholder="Tell me about your project or just say hello..."
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-red-600 text-sm mt-1"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <PrimaryButtons
                      isDisabled={isSubmitting}
                      title={isSubmitting ? "Sending..." : "Send Message"}
                      btnType="submit"
                      containerStyles="w-full justify-center py-2 sm:py-3 text-lg sm:text-xl font-semibold rounded-full"
                      ariaLabel="Send message to Amit Kumar"
                    />
                  </form>
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    This form uses client-side validation and doesn't store your
                    data. By sending, you agree that I will receive your message
                    via email.
                  </p>
                </Card>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}