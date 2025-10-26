// components/Reveal.tsx
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
