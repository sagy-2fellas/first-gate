import React from "react";
import { useScrollReveal, textRevealStyle, lineRevealStyle, imageRevealStyle, STAGGER } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";

const ABOUT_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/fdab2c2f1_generated_c1dc8c88.png";

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  const sectionNum = useCountUp(1, isVisible);

  return (
    <section id="about" ref={ref} className="relative bg-[#0D0D0D] py-[15vh] px-6 md:px-[10vw]">
      {/* Section divider */}
      <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16 md:mb-24" style={lineRevealStyle(isVisible)} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left column */}
        <div className="lg:col-span-5">
          {/* Section number */}
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
              About Us
            </p>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-sm mt-8 group">
            <div style={imageRevealStyle(isVisible, STAGGER * 2)}>
              <img
                src={ABOUT_IMG}
                alt="Polished concrete meeting brass trim - luxury construction materials"
                className="w-full h-[50vh] md:h-[60vh] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.0, 1.0)" }}
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="overflow-hidden mb-8">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-[1.2] tracking-tight"
              style={textRevealStyle(isVisible, STAGGER * 2)}
            >
              First Gate Enterprises SA is a leading integrated design, fit-out and construction company based in Cape Town, specialising in corporate and commercial environments.
            </h2>
            </div>

            <div className="overflow-hidden mb-6">
            <p
              className="text-[#F5F3EF]/60 text-lg leading-[1.7] max-w-2xl"
              style={textRevealStyle(isVisible, STAGGER * 3)}
            >
              With over 15 years of experience, we deliver end-to-end turnkey solutions — from architectural consultancy and space planning through to construction, compliance, and occupancy certification. One team, one contract, full accountability.
            </p>
            </div>

            <div className="overflow-hidden mb-6">
            <p
              className="text-[#F5F3EF]/60 text-lg leading-[1.7] max-w-2xl"
              style={textRevealStyle(isVisible, STAGGER * 4)}
            >
              Our mission is simple: to make the fit-out process straightforward while delivering high-impact spaces that enhance productivity, reflect your brand, and stand the test of time.
            </p>
            </div>

            <div className="overflow-hidden">
            <p
              className="text-[#BEAA6D]/80 text-sm tracking-[0.15em] uppercase font-medium"
              style={textRevealStyle(isVisible, STAGGER * 5)}
            >
              Proud B-BBEE Level 1 Contributor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}