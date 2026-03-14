import React from "react";
import { useScrollReveal, textRevealStyle, lineRevealStyle, STAGGER } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";

const ITEMS = [
  {
    title: "Single-Point Accountability",
    desc: "One team manages every stage: design, costing, approvals, construction, and handover. Clients deal with one contract and one point of responsibility.",
  },
  {
    title: "Design-Led from the Start",
    desc: "Every project begins with architecture and interior design that balances operational performance with long-term asset value.",
  },
  {
    title: "Compliance Without Delays",
    desc: "Council submissions, occupancy certificates, and all regulatory requirements are managed in-house — so projects move on schedule.",
  },
  {
    title: "Transparent Cost Control",
    desc: "Structured project programmes, honest costing from day one, and delivery timelines that hold.",
  },
];

export default function Differentiators() {
  const { ref, isVisible } = useScrollReveal();
  const sectionNum = useCountUp(2, isVisible);

  return (
    <section ref={ref} className="bg-[#0D0D0D] py-16 md:py-[12vh] px-6 md:px-[10vw]">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16 md:mb-24" style={lineRevealStyle(isVisible)} />

      <div className="flex flex-col mb-16">
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
        <div className="overflow-hidden">
          <p
            className="text-[#BEAA6D] text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase"
            style={textRevealStyle(isVisible, STAGGER)}
          >
            What Makes Us Different
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className="border-t border-[#38383A]/50 py-10 md:py-14 md:px-8 first:md:pl-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${STAGGER * (i + 2)}ms`,
            }}
          >
            <span className="text-[#BEAA6D]/40 text-xs tracking-[0.2em] uppercase mb-4 block">
              0{i + 1}
            </span>
            <h3 className="text-white text-xl md:text-2xl font-light mb-4 tracking-tight">
              {item.title}
            </h3>
            <p className="text-[#F5F3EF]/50 text-base leading-[1.7] max-w-md">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}