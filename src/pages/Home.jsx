import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/firstgate/Navbar";
import Hero from "@/components/firstgate/Hero";
import About from "@/components/firstgate/About";
import Differentiators from "@/components/firstgate/Differentiators";
import Services from "@/components/firstgate/Services";
import Process from "@/components/firstgate/Process";
import RecentProjects from "@/components/firstgate/RecentProjects";
import Clients from "@/components/firstgate/Clients";
import CookieConsent from "@/components/firstgate/CookieConsent";
import ContactForm from "@/components/firstgate/ContactForm";
import Footer from "@/components/firstgate/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#0D0D0D] min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Differentiators />
        <Services />
        <Process />
        <RecentProjects />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}