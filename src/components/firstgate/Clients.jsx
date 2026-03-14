import React from "react";
import { useScrollReveal, textRevealStyle, lineRevealStyle, STAGGER } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";
import ClientLogos from "./ClientLogos";

const SECTORS = [
  "Property Developers",
  "REITs & Property Funds",
  "Corporate Tenants",
  "Commercial & Retail Landlords",
  "Law Firms & Professional Services",
  "Financial Institutions",
];

export default function Clients() {
  const { ref, isVisible } = useScrollReveal();
  const sectionNum = useCountUp(6, isVisible);

  return (
    <section ref={ref} className="bg-[#0D0D0D] py-16 md:py-[12vh] px-6 md:px-[10vw]">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16 md:mb-24" style={lineRevealStyle(isVisible)} />

      {/* Header row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 md:mb-24">
        <div className="lg:col-span-5">
          <div className="overflow-hidden mb-8">
            <span
              className="text-[15vw] md:text-[10vw] font-light leading-none"
              style={{
                WebkitTextStroke: "1px #BEAA6D",
                WebkitTextFillColor: "transparent",
                ...textRevealStyle(isVisible),
              }}
            >
              {String(sectionNum).padStart(2, "0")}
            </span>
          </div>
          <div className="overflow-hidden mb-6">
            <p
              className="text-[#BEAA6D] text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase"
              style={textRevealStyle(isVisible, STAGGER)}
            >
              Who We Work With
            </p>
          </div>
          <div className="overflow-hidden">
            <h2
              className="text-3xl md:text-4xl text-white font-light leading-[1.2] tracking-tight"
              style={textRevealStyle(isVisible, STAGGER * 2)}
            >
              Trusted by leading developers, funds, and corporate tenants across South Africa.
            </h2>
          </div>
        </div>
      </div>

      {/* Sector rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {SECTORS.map((sector, i) => (
          <div
            key={i}
            className="border-t border-[#38383A]/50"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${STAGGER * (i + 2)}ms`,
            }}
          >
            <div className="flex items-center gap-6 py-6 md:py-8">
              <span className="text-[#BEAA6D]/40 text-xs flex-shrink-0">•</span>
              <span className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-[#F5F3EF]">
                {sector}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-width client logos marquee */}
      <div
        className="-mx-6 md:-mx-[10vw] mt-16 md:mt-24"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: `opacity 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${STAGGER * 6}ms`,
        }}
      >
        <p className="text-[#F5F3EF]/30 text-xs tracking-[0.3em] uppercase mb-6 px-6 md:px-[10vw]">Selected Clients</p>
        <ClientLogos />
      </div>
    </section>
  );
}