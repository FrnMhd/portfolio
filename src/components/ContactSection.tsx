"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { section } from "framer-motion/m";

export default function ContactSection() {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: (
        <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "farhanmedappil@gmail.com",
      link: "mailto:farhanmedappil@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/farhanmp",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: (
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "Check my repos",
      link: "https://github.com/FrnMhd",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <>
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-[#0a1628] via-[#0d1b35] to-[#0a1628] relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-400/8 blur-[100px] rounded-full animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-5 tracking-tight">
              Get In Touch
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Interested in working together or just want to say hi? I’m always open to new
              projects and collaborations — feel free to reach out anytime.
            </p>
          </div>
        </Reveal>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((contact, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <a
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative block"
                onMouseEnter={() => setHoveredContact(i)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contact.gradient} opacity-0 transition-opacity duration-500 -z-10 blur-xl ${
                      hoveredContact === i ? "opacity-25" : ""
                    }`}
                  />
                  {/* Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${contact.gradient} rounded-t-2xl`} />
                  
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-gradient-to-br ${contact.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                  >
                    <div className="text-white">{contact.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {contact.label}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {contact.value}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                    <span>Connect</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* CTA Box */}
        <Reveal delay={0.5}>
          <div className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-14 border border-white/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse rounded-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-400/20 rounded-full border border-emerald-400/30 backdrop-blur-sm mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-emerald-300">
                  Available for opportunities
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let’s Build Something Amazing
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind or just want to chat about technology,
                I’d love to hear from you — drop me a message!
              </p>

              <a
                href="mailto:farhanmedappil@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 text-white rounded-full font-semibold shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Me an Email
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
    <div className="container mx-auto px-6 py-4 text-sm">
        <p className="text-center text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Farhan Medappil. All rights reserved.
        </p>
      </div>
      </>
  );
}
