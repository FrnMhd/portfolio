"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [hudMessage, setHudMessage] = useState<string | null>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number; active: boolean; nextTheme: Theme } | null>(null);

  // Initialize theme from localStorage / system preference
  useEffect(() => {
    const saved = localStorage.getItem("architectural-theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const x = e ? e.clientX : typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    const y = e ? e.clientY : typeof window !== "undefined" ? window.innerHeight / 2 : 0;

    // Trigger radial shutter wave
    setRipple({ x, y, active: true, nextTheme });

    setTimeout(() => {
      setTheme(nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("architectural-theme", nextTheme);
    }, 200);

    // Show HUD toast notification
    setHudMessage(
      nextTheme === "light"
        ? "[ PALETTE_CHANGED: DAYLIGHT_PAPER_THEME_INITIALIZED ]"
        : "[ PALETTE_CHANGED: NIGHT_CONCRETE_THEME_INITIALIZED ]"
    );

    setTimeout(() => {
      setRipple(null);
    }, 700);

    setTimeout(() => {
      setHudMessage(null);
    }, 2800);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}

      {/* Radial Wave Iris Transition Overlay */}
      <AnimatePresence>
        {ripple && ripple.active && (
          <motion.div
            initial={{ clipPath: `circle(0px at ${ripple.x}px ${ripple.y}px)` }}
            animate={{ clipPath: `circle(2000px at ${ripple.x}px ${ripple.y}px)` }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9990] pointer-events-none"
            style={{
              backgroundColor: ripple.nextTheme === "light" ? "#f5f4ef" : "#121211",
            }}
          />
        )}
      </AnimatePresence>

      {/* HUD Toast Notification */}
      <AnimatePresence>
        {hudMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[9995] font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/50 bg-background/90 px-4 py-2.5 shadow-[0_0_25px_rgba(200,112,64,0.3)] backdrop-blur-md flex items-center gap-2 select-none"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>{hudMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}
