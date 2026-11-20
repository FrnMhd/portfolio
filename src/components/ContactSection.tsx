"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

// Character codes for "+91 95267 12155" to prevent static HTML/crawler indexing
const OBFUSCATED_TEL = [43, 57, 49, 32, 57, 53, 50, 54, 55, 32, 49, 50, 49, 53, 53];

// Reusable Architectural Reticle Copy Button matching site terracotta palette
function CopyReticleButton({
  isCopied,
  onCopy,
}: {
  isCopied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      onClick={onCopy}
      className={`relative text-[9px] uppercase tracking-wider px-2.5 py-1.5 transition-all duration-300 font-mono flex items-center gap-1.5 cursor-pointer ${
        isCopied
          ? "border border-accent/80 bg-accent/20 text-accent font-semibold shadow-[0_0_15px_rgba(200,112,64,0.3)]"
          : "border border-stone-800 text-stone-500 hover:text-ivory hover:border-accent/60 bg-surface/30"
      }`}
    >
      <AnimatePresence mode="wait">
        {isCopied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            className="flex items-center gap-1 text-accent"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>COPIED!</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            className="flex items-center gap-1"
          >
            <span>COPY</span>
            <span className="opacity-60">⎘</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Anti-crawler Phone Reveal State
  const [phoneRevealed, setPhoneRevealed] = useState<boolean>(false);
  const [phoneText, setPhoneText] = useState<string>("+91 ••••• •••••");
  const [isDecrypting, setIsDecrypting] = useState<boolean>(false);

  // Human interaction reveal with digital decryption scramble
  const handleRevealPhone = () => {
    if (phoneRevealed || isDecrypting) return;
    setIsDecrypting(true);

    const actualPhone = OBFUSCATED_TEL.map((c) => String.fromCharCode(c)).join("");
    const chars = ["#", "8", "X", "%", "9", "2", "@", "&", "4", "7"];
    let iterations = 0;

    const interval = setInterval(() => {
      iterations++;
      if (iterations < 6) {
        // Scramble random digital numbers
        const scrambled = actualPhone
          .split("")
          .map((ch) => (ch === " " || ch === "+" ? ch : chars[Math.floor(Math.random() * chars.length)]))
          .join("");
        setPhoneText(scrambled);
      } else {
        clearInterval(interval);
        setPhoneText(actualPhone);
        setPhoneRevealed(true);
        setIsDecrypting(false);
      }
    }, 55);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <>
      <section
        id="contact"
        className="py-32 bg-background relative overflow-hidden border-b border-stone-850"
      >
        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Section Header */}
          <Reveal>
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <span className="text-[10px] text-brass font-mono uppercase tracking-widest block mb-3">
                  [ 06 / CONTACT ]
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-ivory tracking-tight">
                  Get In <span className="font-serif italic font-normal text-accent">Touch</span>
                </h2>
              </div>
              <div className="mt-4 md:mt-0 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                {"// CALICUT, INDIA"}
              </div>
            </div>
          </Reveal>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left side info (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start font-mono text-xs text-sand">
              <p className="leading-relaxed mb-8 max-w-xl text-sand">
                Interested in collaboration, backend system integration, or automation pipelines?
                Feel free to establish communication through the endpoints provided here.
              </p>

              {/* Status Panel */}
              <div className="relative border border-accent/40 bg-surface/20 p-8 w-full max-w-xl shadow-[0_0_20px_rgba(200,112,64,0.08)]">
                {/* Corner Crosshair Reticles */}
                <span className="absolute top-2 left-2 text-accent text-xs">┌</span>
                <span className="absolute top-2 right-2 text-accent text-xs">┐</span>
                <span className="absolute bottom-2 left-2 text-accent text-xs">└</span>
                <span className="absolute bottom-2 right-2 text-accent text-xs">┘</span>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-brass uppercase tracking-widest text-[10px] font-semibold">
                    {"// AVAILABILITY"}
                  </span>
                  <span className="text-[9px] text-stone-500 uppercase tracking-widest">
                    UTC +05:30
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-accent rounded-full animate-ping" />
                  <span className="text-[11px] text-ivory uppercase tracking-wider font-semibold">
                    Accepting freelance contracts & corporate queries.
                  </span>
                </div>
              </div>
            </div>

            {/* Right side contact links (5 cols) */}
            <div className="lg:col-span-5 font-mono text-xs w-full">
              <div className="border-t border-stone-800 divide-y divide-stone-800">

                {/* 01. EMAIL */}
                <div className="py-5 flex justify-between items-center group hover:bg-surface/20 px-3 transition-colors duration-300 relative">
                  <div className="flex flex-col">
                    <span className="text-brass uppercase tracking-widest text-[10px] font-semibold flex items-center gap-2">
                      <span className="text-accent">01.</span>
                      EMAIL
                    </span>
                    <a
                      href="mailto:farhanmedappil@gmail.com"
                      className="text-ivory group-hover:text-accent font-mono text-xs transition-colors duration-300 mt-1"
                    >
                      farhanmedappil@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <CopyReticleButton
                      isCopied={copiedKey === "email"}
                      onCopy={() => handleCopy("farhanmedappil@gmail.com", "email")}
                    />

                    <a
                      href="mailto:farhanmedappil@gmail.com"
                      className="text-accent group-hover:translate-x-1.5 transition-transform"
                      aria-label="Send email"
                    >
                      →
                    </a>
                  </div>
                </div>

                {/* 02. DIRECT PHONE (Anti-Crawler Human Verification Reveal) */}
                <div className="py-5 flex justify-between items-center group hover:bg-surface/20 px-3 transition-colors duration-300 relative">
                  <div className="flex flex-col">
                    <span className="text-brass uppercase tracking-widest text-[10px] font-semibold flex items-center gap-2">
                      <span className="text-accent">02.</span>
                      DIRECT_PHONE
                      {!phoneRevealed && (
                        <span className="text-[8px] text-stone-500 border border-stone-800 px-1 py-0.2 uppercase font-normal">
                          PROTECTED
                        </span>
                      )}
                    </span>

                    {phoneRevealed ? (
                      <a
                        href={`tel:${phoneText.replace(/\s+/g, "")}`}
                        className="text-ivory group-hover:text-accent font-mono text-xs transition-colors duration-300 mt-1 flex items-center gap-1.5"
                      >
                        <span>{phoneText}</span>
                      </a>
                    ) : (
                      <span className="text-sand/70 font-mono text-xs mt-1 select-none flex items-center gap-2">
                        <span>{phoneText}</span>
                        {isDecrypting && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        )}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {phoneRevealed ? (
                      /* Revealed state: Copy Button + Direct Call Arrow */
                      <>
                        <CopyReticleButton
                          isCopied={copiedKey === "phone"}
                          onCopy={() => handleCopy(phoneText, "phone")}
                        />

                        <a
                          href={`tel:${phoneText.replace(/\s+/g, "")}`}
                          className="text-accent group-hover:translate-x-1.5 transition-transform"
                          aria-label="Direct Call"
                        >
                          →
                        </a>
                      </>
                    ) : (
                      /* Dormant Protected State: Click to Reveal */
                      <button
                        onClick={handleRevealPhone}
                        disabled={isDecrypting}
                        className="relative text-[9px] uppercase tracking-wider px-3 py-1.5 border border-accent/60 bg-accent/10 hover:bg-accent hover:text-background text-accent font-semibold transition-all duration-300 font-mono flex items-center gap-1.5 shadow-[0_0_12px_rgba(200,112,64,0.15)] cursor-pointer"
                      >
                        <span>{isDecrypting ? "DECRYPTING..." : "[ REVEAL 👁 ]"}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* 03. LINKEDIN */}
                <div className="py-5 flex justify-between items-center group hover:bg-surface/20 px-3 transition-colors duration-300 relative">
                  <div className="flex flex-col">
                    <span className="text-brass uppercase tracking-widest text-[10px] font-semibold flex items-center gap-2">
                      <span className="text-accent">03.</span>
                      LINKEDIN
                    </span>
                    <a
                      href="https://www.linkedin.com/in/farhanmp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory group-hover:text-accent font-mono text-xs transition-colors duration-300 mt-1"
                    >
                      linkedin.com/in/farhanmp
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <CopyReticleButton
                      isCopied={copiedKey === "linkedin"}
                      onCopy={() => handleCopy("https://www.linkedin.com/in/farhanmp", "linkedin")}
                    />

                    <a
                      href="https://www.linkedin.com/in/farhanmp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent group-hover:translate-x-1.5 transition-transform"
                      aria-label="Open LinkedIn"
                    >
                      →
                    </a>
                  </div>
                </div>

                {/* 04. GITHUB */}
                <div className="py-5 flex justify-between items-center group hover:bg-surface/20 px-3 transition-colors duration-300 relative">
                  <div className="flex flex-col">
                    <span className="text-brass uppercase tracking-widest text-[10px] font-semibold flex items-center gap-2">
                      <span className="text-accent">04.</span>
                      GITHUB
                    </span>
                    <a
                      href="https://github.com/FrnMhd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory group-hover:text-accent font-mono text-xs transition-colors duration-300 mt-1"
                    >
                      github.com/FrnMhd
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <CopyReticleButton
                      isCopied={copiedKey === "github"}
                      onCopy={() => handleCopy("https://github.com/FrnMhd", "github")}
                    />

                    <a
                      href="https://github.com/FrnMhd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent group-hover:translate-x-1.5 transition-transform"
                      aria-label="Open GitHub"
                    >
                      →
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Global Minimalist Architectural Footer */}
      <footer className="py-12 bg-background border-t border-stone-850 text-center font-mono text-[10px] text-stone-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Farhan Medappil.
          </p>
          <div className="flex items-center gap-4 uppercase tracking-widest text-stone-600 flex-wrap justify-center">
            <span>[ SYSTEM_ONLINE ]</span>
            <span>•</span>
            <a
              href="/raw"
              className="text-stone-400 hover:text-accent transition-colors underline underline-offset-4 decoration-stone-700"
              title="Fast text version"
            >
              [ TEXT VERSION ]
            </a>
            <span>•</span>
            <span>[ ALL_RIGHTS_RESERVED ]</span>
          </div>
        </div>
      </footer>
    </>
  );
}
