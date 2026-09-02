
import Head from "next/head";
import HelloIntro from "@/components/HelloIntro";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Head>
        <title>Farhan M — Developer & Automation Designer</title>
        <meta name="description" content="Farhan M's personal developer portfolio showcasing architectural design, software development, and automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HelloIntro />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ExperienceSection />
      <Projects />
      <AboutSection />
      <ContactSection />
    </>
  );
}
