
import CursorTrail from "@/components/CursorTrail";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";

import ScrollProgress from "@/components/ScrollProgress";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

import Head from "next/head"

export default function Home() {
  return (
    <>
        <Head>
          <title>Farhan M - Full-Stack Developer Portfolio</title>
          <meta name="description" content="Farhan M's portfolio showcasing projects, experience, and skills as a full-stack developer." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
