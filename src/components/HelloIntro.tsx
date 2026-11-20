"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  { text: "Hello", lang: "EN / Global" },
  { text: "Hola", lang: "ES / Spanish" },
  { text: "Bonjour", lang: "FR / French" },
  { text: "Salam", lang: "AR / Arabic" },
  { text: "Namaste", lang: "HI / Hindi" },
  { text: "Ciao", lang: "IT / Italian" },
  { text: "Konnichiwa", lang: "JA / Japanese" },
  { text: "Hallo", lang: "DE / German" },
  { text: "Welcome", lang: "INTL" },
];

export default function HelloIntro() {
  const [visible, setVisible] = useState<boolean>(false);
  const [greetingIndex, setGreetingIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize & check session storage
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenHelloIntro");

    const startIntro = () => {
      setVisible(true);
      setIsClosing(false);
      setProgress(0);
      setGreetingIndex(0);
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent("intro-start"));
    };

    if (!hasSeen) {
      startIntro();
    }

    // Listen for custom trigger to replay intro anytime
    const handleReplay = () => {
      startIntro();
    };

    window.addEventListener("replay-hello-intro", handleReplay);
    return () => {
      window.removeEventListener("replay-hello-intro", handleReplay);
      document.body.style.overflow = "";
    };
  }, []);

  // Track mouse coordinates for architectural crosshair alignment
  useEffect(() => {
    if (!visible) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [visible]);

  // Handle greetings sequence & progress count-up
  useEffect(() => {
    if (!visible || isClosing) return;

    // Fast greeting cycle
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => {
        if (prev < GREETINGS.length - 1) return prev + 1;
        return prev;
      });
    }, 320);

    // Smooth loading progress bar (0 to 100%)
    const startTime = performance.now();
    const duration = 3200; // 3.2 seconds total display

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Complete animation & launch exit curtain
        setTimeout(() => {
          triggerExit();
        }, 500);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);

    return () => {
      clearInterval(greetingInterval);
      cancelAnimationFrame(animFrame);
    };
  }, [visible, isClosing]);

  const triggerExit = () => {
    setIsClosing(true);
    sessionStorage.setItem("hasSeenHelloIntro", "true");
    window.dispatchEvent(new CustomEvent("intro-curtain-open"));
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 900); // match shutter transition duration
  };

  if (!visible) return null;

  const currentGreeting = GREETINGS[greetingIndex];

  return (
    <AnimatePresence>
      <div
        ref={containerRef}
        className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-auto select-none overflow-hidden bg-[#121211]"
      >
        {/* Top Shutter Curtain Panel */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isClosing ? "-100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="absolute top-0 left-0 w-full h-[50.5%] bg-[#121211] border-b border-stone-800/80 z-10"
        />

        {/* Bottom Shutter Curtain Panel */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isClosing ? "100%" : 0 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="absolute bottom-0 left-0 w-full h-[50.5%] bg-[#121211] border-t border-stone-800/80 z-10"
        />

        {/* Laser Split Divider Glow on Exit */}
        {isClosing && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-accent z-30 shadow-[0_0_20px_#c87040]"
          />
        )}

        {/* Content Container (fades out as shutters part) */}
        <motion.div
          animate={{ opacity: isClosing ? 0 : 1, scale: isClosing ? 0.96 : 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-20 w-full h-full flex flex-col justify-between p-6 md:p-12 pointer-events-none"
        >
          {/* Subtle Dynamic Mouse Crosshairs (Architectural Drafting lines) */}
          <div
            className="absolute pointer-events-none opacity-20 hidden md:block"
            style={{
              top: mousePos.y,
              left: 0,
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #c87040, transparent)",
            }}
          />
          <div
            className="absolute pointer-events-none opacity-20 hidden md:block"
            style={{
              left: mousePos.x,
              top: 0,
              width: "1px",
              height: "100%",
              background: "linear-gradient(180deg, transparent, #c87040, transparent)",
            }}
          />

          {/* Corner Crosshairs (+) & Blueprint Labels */}
          <div className="absolute top-6 left-6 flex items-center gap-2 font-mono text-[9px] text-stone-500 uppercase tracking-widest">
            <span className="text-accent">+</span>
            <span>SYS_INIT</span>
          </div>

          <div className="absolute top-6 right-6 flex items-center gap-4">
            <div className="font-mono text-[9px] text-brass uppercase tracking-widest hidden sm:block">
              COORD: [{mousePos.x.toString().padStart(4, "0")} : {mousePos.y.toString().padStart(4, "0")}]
            </div>
            <button
              onClick={triggerExit}
              className="pointer-events-auto font-mono text-[10px] text-sand hover:text-ivory uppercase tracking-widest px-3 py-1 border border-stone-800 hover:border-accent bg-surface/40 transition-colors duration-200"
            >
              [ ESC / SKIP ]
            </button>
          </div>

          <div className="absolute bottom-6 left-6 font-mono text-[9px] text-stone-500 uppercase tracking-widest">
            {/* <span>ARCHITECTURAL_STUDIO // 2026</span> */}
            <span>FARHAN M // 2026</span>
          </div>

          <div className="absolute bottom-6 right-6 flex items-center gap-3 font-mono text-[10px] text-sand">
            <span className="text-brass">LOADING</span>
            <span className="text-ivory font-bold w-10 text-right">{progress}%</span>
          </div>

          {/* Central Main Stage: Official Apple SF-Hello Vector Stroke Drawing + Multilingual Greetings */}
          <div className="flex-1 flex flex-col items-center justify-center relative">

            {/* Architectural Background Grid Cross & Orbit Circle */}
            <div className="absolute w-[340px] sm:w-[560px] h-[340px] sm:h-[560px] border border-stone-850/50 rounded-full pointer-events-none flex items-center justify-center">
              <div className="w-[1px] h-full bg-stone-850/40" />
              <div className="h-[1px] w-full bg-stone-850/40 absolute" />
            </div>

            {/* Official Apple SF-Hello SVG Vector Script */}
            <div className="relative w-[280px] sm:w-[480px] md:w-[580px] h-[120px] sm:h-[180px] flex items-center justify-center">
              <svg
                viewBox="-109.06069946289062 -9 2504.0606994628906 746.156005859375"
                className="w-full h-full text-accent drop-shadow-[0_0_16px_rgba(200,112,64,0.4)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="scale(1, -1) translate(0, -728.156005859375)">
                  {/* Path 1: Ascender loop for 'h' */}
                  <motion.path
                    d="M-109.06069946289062,95.92639923095703 C1.9544999599456787,157.6403045654297 103.11389923095703,236.9969940185547 217.881103515625,372.07550048828125 C296,464.2846984863281 337.9999084472656,569.5725708007812 340,642.1939697265625 C341,696.1920166015625 314.6702880859375,737.156005859375 266,737.156005859375 C212,737.156005859375 178,696.1920166015625 157,602.1610107421875 C134,498.82000732421875 117,380.239990234375 74,0 "
                    fill="none"
                    stroke="#c87040"
                    strokeWidth="52"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.65,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  />

                  {/* Path 2: Continuous cursive stroke for 'ello.' */}
                  <motion.path
                    d="M78.21453094482422,37.160953521728516 C100.22924041748047,230.68260192871094 184,372 291,372 C355,372 395.6745910644531,321 384.1253967285156,248 C377.6238098144531,205 370.0873107910156,161 361.3063049316406,110 C351.0714111328125,46 380.3254089355469,-4 468.96173095703125,-4 C598.2246704101562,-4 739.2435302734375,67.83381652832031 811.4124145507812,179.0941619873047 C836,217 846,251 847,284 C848,344 814,389 754,389 C678,389 620,303 620,193 C620,75 684,-8 819.9180908203125,-8 C1004.7244873046875,-8 1209.4246826171875,213.84754943847656 1303.4808349609375,461.42327880859375 C1330.037353515625,531.3258056640625 1340,596.2349243164062 1340,641.593994140625 C1340,695.3764038085938 1323,736.673583984375 1275,736.673583984375 C1228,736.673583984375 1197,700.1784057617188 1169,642.5543823242188 C1136.1939697265625,575.7216186523438 1111.927734375,479.32598876953125 1102,370.3599853515625 C1077,96.94000244140625 1133,-4 1266.152099609375,-4 C1427.6083984375,-4 1607.1151123046875,220.92921447753906 1698.771728515625,462.18878173828125 C1725.037353515625,531.3258056640625 1735,596.2349243164062 1735,641.593994140625 C1735,695.3764038085938 1718,736.673583984375 1670,736.673583984375 C1623,736.673583984375 1592,700.1784057617188 1564,642.5543823242188 C1531.1939697265625,575.7216186523438 1506.927734375,479.32598876953125 1497,370.3599853515625 C1472,96.94000244140625 1528,-4 1646.906005859375,-4 C1765.623779296875,-4 1830.114990234375,99.48485565185547 1868.77880859375,209.3712158203125 C1907,318 1954,385 2052,385 C2133,385 2197,325 2197,212 C2197,87 2115.90087890625,-7 2013.41845703125,-8 C1923.234130859375,-9 1864,64 1870,174 C1877,296 1951,385 2048,385 C2104,385 2151.03564453125,360.1071472167969 2188,333 C2288.21435546875,259.8928527832031 2365.4287109375,305.0714416503906 2395,377.3571472167969 "
                    fill="none"
                    stroke="#c87040"
                    strokeWidth="52"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 2.2,
                      delay: 0.5,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  />

                  {/* Brass Accent Underlay Stroke */}
                  <motion.path
                    d="M-109.06069946289062,95.92639923095703 C1.9544999599456787,157.6403045654297 103.11389923095703,236.9969940185547 217.881103515625,372.07550048828125 C296,464.2846984863281 337.9999084472656,569.5725708007812 340,642.1939697265625 C341,696.1920166015625 314.6702880859375,737.156005859375 266,737.156005859375 C212,737.156005859375 178,696.1920166015625 157,602.1610107421875 C134,498.82000732421875 117,380.239990234375 74,0 "
                    fill="none"
                    stroke="#c2a678"
                    strokeWidth="18"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 0.65, delay: 0.1, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M78.21453094482422,37.160953521728516 C100.22924041748047,230.68260192871094 184,372 291,372 C355,372 395.6745910644531,321 384.1253967285156,248 C377.6238098144531,205 370.0873107910156,161 361.3063049316406,110 C351.0714111328125,46 380.3254089355469,-4 468.96173095703125,-4 C598.2246704101562,-4 739.2435302734375,67.83381652832031 811.4124145507812,179.0941619873047 C836,217 846,251 847,284 C848,344 814,389 754,389 C678,389 620,303 620,193 C620,75 684,-8 819.9180908203125,-8 C1004.7244873046875,-8 1209.4246826171875,213.84754943847656 1303.4808349609375,461.42327880859375 C1330.037353515625,531.3258056640625 1340,596.2349243164062 1340,641.593994140625 C1340,695.3764038085938 1323,736.673583984375 1275,736.673583984375 C1228,736.673583984375 1197,700.1784057617188 1169,642.5543823242188 C1136.1939697265625,575.7216186523438 1111.927734375,479.32598876953125 1102,370.3599853515625 C1077,96.94000244140625 1133,-4 1266.152099609375,-4 C1427.6083984375,-4 1607.1151123046875,220.92921447753906 1698.771728515625,462.18878173828125 C1725.037353515625,531.3258056640625 1735,596.2349243164062 1735,641.593994140625 C1735,695.3764038085938 1718,736.673583984375 1670,736.673583984375 C1623,736.673583984375 1592,700.1784057617188 1564,642.5543823242188 C1531.1939697265625,575.7216186523438 1506.927734375,479.32598876953125 1497,370.3599853515625 C1472,96.94000244140625 1528,-4 1646.906005859375,-4 C1765.623779296875,-4 1830.114990234375,99.48485565185547 1868.77880859375,209.3712158203125 C1907,318 1954,385 2052,385 C2133,385 2197,325 2197,212 C2197,87 2115.90087890625,-7 2013.41845703125,-8 C1923.234130859375,-9 1864,64 1870,174 C1877,296 1951,385 2048,385 C2104,385 2151.03564453125,360.1071472167969 2188,333 C2288.21435546875,259.8928527832031 2365.4287109375,305.0714416503906 2395,377.3571472167969 "
                    fill="none"
                    stroke="#c2a678"
                    strokeWidth="18"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2.2, delay: 0.6, ease: "easeInOut" }}
                  />
                </g>
              </svg>
            </div>

            {/* Multilingual Text Morphing Carousel underneath */}
            <div className="h-12 mt-4 flex flex-col items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGreeting.text}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <span className="font-serif italic text-2xl sm:text-3xl text-ivory tracking-wide font-light">
                    {currentGreeting.text}.
                  </span>
                  <span className="font-mono text-[9px] text-brass uppercase tracking-widest px-1.5 py-0.5 border border-stone-800 bg-surface/60">
                    {currentGreeting.lang}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Progress Line Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-stone-850 mt-8 relative overflow-hidden">
              <motion.div
                className="h-full bg-accent shadow-[0_0_8px_#c87040]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
