
import { motion } from "framer-motion";
import CursorTrail from "@/components/CursorTrail";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
        <ScrollProgress />
        <CursorTrail />
        <Navbar />
        
        {/* hero sec */}
        <Hero />

        {/* experience */}
        <ExperienceSection />

        {/* projects */}
        <Projects />

        {/* about sec */}
        <AboutSection />           

        {/* contact sec */}
        <ContactSection />
    
    </>
  );
}
