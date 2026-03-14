import React, { useState, useEffect } from "react";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

const HERO_IMAGES = [
  {
    src: "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/6c5934cef_Untitleddesign1.jpg",
    alt: "Modern interior living space",
  },
  {
    src: "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/a365e5c0c_Untitleddesign2.jpg",
    alt: "DM Attorneys office reception",
  },
  {
    src: "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/d90d51f86_Untitleddesign3.jpg",
    alt: "Rooftop terrace",
  },
  {
    src: "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/d8fec99ee_Untitleddesign4.jpg",
    alt: "Callpay office reception",
  },
  {
    src: "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/34cd8cf86_Untitleddesign5.jpg",
    alt: "Beachfront lounge interior",
  },
  {
    src: "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/af555ea0a_Untitleddesign6.jpg",
    alt: "Callpay headquarters lobby",
  },
];

function HeroContent({ loaded, scrollToContact }) {
  return (
    <>
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[#0D0D0D]/40 z-20 pointer-events-none" />

      {/* Hero text content */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end px-6 md:px-[10vw] pb-[10vh] md:pb-[12vh]">
        <div className="max-w-4xl">
          {["Design. Build.", "Deliver."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <h1
                className="text-[8vw] md:text-[5vw] lg:text-[4vw] font-light text-white leading-[1.1] tracking-tight"
                style={{
                  transform: loaded ? "translateY(0)" : "translateY(100%)",
                  transition: `transform 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${800 + i * 150}ms`,
                }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="overflow-hidden">
            <p
              className="text-[#F5F3EF]/60 text-sm md:text-base tracking-[0.3em] uppercase"
              style={{
                transform: loaded ? "translateY(0)" : "translateY(100%)",
                transition: `transform 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) 1300ms`,
              }}
            >
              Design + Construction + Compliance
            </p>
          </div>

          <div className="overflow-hidden">
            <div
              style={{
                transform: loaded ? "translateY(0)" : "translateY(100%)",
                transition: `transform 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) 1450ms`,
              }}
            >
              <button
                onClick={scrollToContact}
                className="border border-[#BEAA6D] text-[#BEAA6D] px-8 py-3.5 text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#BEAA6D] hover:text-[#0D0D0D] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BEAA6D]"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
        <div
          className="w-[1px] h-12 bg-gradient-to-b from-[#BEAA6D] to-transparent"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 2s",
          }}
        />
      </div>
    </>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative bg-[#0D0D0D]">
      {/* Mobile: simple full-screen static hero image */}
      <div className="md:hidden relative h-screen overflow-hidden">
        <img
          src={HERO_IMAGES[0].src}
          alt={HERO_IMAGES[0].alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Triple panel reveal overlay */}
        <div className="absolute inset-0 flex pointer-events-none z-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex-1 bg-[#0D0D0D]"
              style={{
                transform: loaded ? "scaleX(0)" : "scaleX(1)",
                transformOrigin: i === 0 ? "left" : i === 2 ? "right" : "center",
                transition: `transform 1.4s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${300 + i * 200}ms`,
              }}
            />
          ))}
        </div>
        <HeroContent loaded={loaded} scrollToContact={scrollToContact} />
      </div>

      {/* Desktop: full zoom parallax */}
      <div className="hidden md:block">
        <ZoomParallax images={HERO_IMAGES}>
          {/* Triple panel reveal overlay */}
          <div className="absolute inset-0 flex pointer-events-none z-10">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex-1 bg-[#0D0D0D]"
                style={{
                  transform: loaded ? "scaleX(0)" : "scaleX(1)",
                  transformOrigin: i === 0 ? "left" : i === 2 ? "right" : "center",
                  transition: `transform 1.4s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${300 + i * 200}ms`,
                }}
              />
            ))}
          </div>
          <HeroContent loaded={loaded} scrollToContact={scrollToContact} />
        </ZoomParallax>
      </div>
    </section>
  );
}