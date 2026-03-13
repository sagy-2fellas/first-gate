import React from "react";
import { useScrollReveal, textRevealStyle, lineRevealStyle, imageRevealStyle, STAGGER } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";
import { ClipboardList, Map, Lightbulb, BadgeDollarSign, PenTool, CalendarCheck, HardHat, CheckCircle2 } from "lucide-react";

const PROCESS_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/64336e0df_generated_11da3a0b.png";

const STEPS = [
  { text: "Client Brief & Needs Analysis", Icon: ClipboardList },
  { text: "Site Survey & Feasibility", Icon: Map },
  { text: "Concept Design & Test Fit", Icon: Lightbulb },
  { text: "High-Level Costing & Approval", Icon: BadgeDollarSign },
  { text: "Detailed Design & Specifications", Icon: PenTool },
  { text: "Detailed Costing & Scheduling", Icon: CalendarCheck },
  { text: "Construction & Fit-Out Delivery", Icon: HardHat },
  { text: "Compliance, Handover & Close-Out", Icon: CheckCircle2 },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal();
  const sectionNum = useCountUp(4, isVisible);

  return (
    <section id="process" ref={ref} className="bg-[#0D0D0D] py-[15vh] px-6 md:px-[10vw]">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16 md:mb-24" style={lineRevealStyle(isVisible)} />

      {/* Header */}
      <div className="flex flex-col mb-16 md:mb-24">
        <div className="overflow-hidden mb-6">
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
        <div className="overflow-hidden mb-4">
          <p
            className="text-[#BEAA6D] text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase"
            style={textRevealStyle(isVisible, STAGGER)}
          >
            Our Process
          </p>
        </div>
        <div className="overflow-hidden">
          <h2
            className="text-3xl md:text-4xl text-white font-light leading-[1.2] tracking-tight max-w-xl"
            style={textRevealStyle(isVisible, STAGGER * 2)}
          >
            A structured delivery process from brief to handover.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Timeline */}
        <div className="lg:col-span-7">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 w-[1px] bg-[#38383A]/60"
              style={{
                height: isVisible ? "100%" : "0%",
                transition: "height 2s cubic-bezier(0.25, 0.1, 0.0, 1.0) 300ms",
                background: "linear-gradient(to bottom, #BEAA6D40, #38383A60)",
              }}
            />

            {STEPS.map(({ text, Icon }, i) => (
              <div
                key={i}
                className="relative flex gap-6 pb-10 group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.8s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${STAGGER * (i + 2)}ms`,
                }}
              >
                {/* Icon node */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-[#BEAA6D]/40 bg-[#0D0D0D] flex items-center justify-center group-hover:border-[#BEAA6D] group-hover:bg-[#BEAA6D]/10 transition-all duration-300">
                  <Icon className="w-4 h-4 text-[#BEAA6D]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <span className="text-[#BEAA6D]/40 text-xs tracking-[0.25em] uppercase font-light block mb-1">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#F5F3EF]/70 text-base md:text-lg leading-[1.5] group-hover:text-white transition-colors duration-300">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-sm group sticky top-32">
            <div style={imageRevealStyle(isVisible, STAGGER * 4)}>
              <img
                src={PROCESS_IMG}
                alt="Architectural blueprints and precision instruments"
                className="w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.0, 1.0)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}