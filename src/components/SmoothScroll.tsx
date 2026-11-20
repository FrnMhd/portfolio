"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Initialize Lenis with refined kinetic momentum
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
    });

    // Request Animation Frame loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global reference for programmatic navigation
    (window as any).lenis = lenis;

    // Pause scroll when HelloIntro is active
    const handleIntroStart = () => {
      lenis.stop();
    };

    const handleIntroEnd = () => {
      lenis.start();
    };

    // If intro is currently visible on page load, stop scroll until curtain opens
    const hasSeen = sessionStorage.getItem("hasSeenHelloIntro") === "true";
    if (!hasSeen) {
      lenis.stop();
    }

    window.addEventListener("intro-start", handleIntroStart);
    window.addEventListener("intro-curtain-open", handleIntroEnd);

    // Smooth Anchor Interceptor for #hash links
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.origin === window.location.origin
      ) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -40,
            duration: 1.3,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("intro-start", handleIntroStart);
      window.removeEventListener("intro-curtain-open", handleIntroEnd);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}
