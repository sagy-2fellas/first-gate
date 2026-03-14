import React from "react";
import { useScrollReveal, textRevealStyle, lineRevealStyle, imageRevealStyle, STAGGER } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";

const SERVICES = [
  {
    title: "Design & Planning",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/106a67930_moblinder_a_realistic_photo_of_an_engineer_reviewing_plans_on_a_0ad5a2cf-f000-422e-ad18-5dfdd18ada60.png",
    items: ["Architectural and interior design", "Space planning and test fits", "3D renders and visualisations", "Look and feel concepts", "White box design"],
  },
  {
    title: "Turnkey Fit-Out & Construction",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/116df1906_u8536594759_split_view_interior_transformation_left_side_hand-d_7696103e-ebbe-47ef-bbc7-05c2d3434f11.png",
    items: ["Commercial and residential fit-outs", "White box refurbishment", "Full construction works", "Interior finishes and joinery", "Flooring, tiling, and painting"],
  },
  {
    title: "Technical & Specialist Services",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    items: ["Electrical installations", "IT and networking", "Security systems and access control", "Plumbing and utilities", "Aluminium and glass", "Ceilings, doors, hardware, and partitions"],
  },
  {
    title: "Regulatory & Compliance",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/2e50ccbb9_dima90__high-quality_editorial_photo_mortgage_entry_in_land_and_13defe75-da84-409a-ae27-18af6ac92ebc.png",
    items: ["Council submissions and approvals", "Occupancy certificates", "Compliance coordination"],
  },
  {
    title: "Project & Cost Management",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/fa2580e69_1773232863198-cvaf5bq06e.png",
    items: ["End-to-end project management", "Construction programmes", "Cost planning and control", "Contractor and trade coordination"],
  },
];

function ServiceBlock({ service, index }) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 border-t border-[#38383A]/50"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0), transform 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0)`,
      }}
    >
      {/* Image */}
      <div className={`overflow-hidden group ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 lg:h-80 object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          style={{
            transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.0, 1.0)",
            transform: isVisible ? "scale(1)" : "scale(1.05)",
            transition: "transform 1.4s cubic-bezier(0.25, 0.1, 0.0, 1.0)",
          }}
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center px-8 py-10 lg:py-12 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <h3
          className="text-white text-2xl md:text-3xl font-light tracking-tight mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) 150ms, transform 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) 150ms`,
          }}
        >
          {service.title}
        </h3>
        <div>
          {service.items.map((item, j) => (
            <p
              key={j}
              className="text-[#F5F3EF]/50 text-base leading-[2] flex items-center gap-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(15px)",
                transition: `opacity 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${200 + j * 60}ms, transform 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${200 + j * 60}ms`,
              }}
            >
              <span className="w-1 h-1 bg-[#BEAA6D]/50 rounded-full flex-shrink-0" />
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal();
  const sectionNum = useCountUp(3, isVisible);

  return (
    <section id="services" ref={ref} className="bg-[#0D0D0D] py-16 md:py-[12vh] px-6 md:px-[10vw]">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16 md:mb-24" style={lineRevealStyle(isVisible)} />

      {/* Header */}
      <div className="mb-16 md:mb-24">
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
        <div className="overflow-hidden mb-4">
          <p
            className="text-[#BEAA6D] text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase"
            style={textRevealStyle(isVisible, STAGGER)}
          >
            Our Services
          </p>
        </div>
        <div className="overflow-hidden">
          <h2
            className="text-3xl md:text-4xl text-white font-light leading-[1.2] tracking-tight max-w-xl"
            style={textRevealStyle(isVisible, STAGGER * 2)}
          >
            Design, construction, and project management — delivered through one integrated team.
          </h2>
        </div>
      </div>

      {/* Service blocks */}
      <div>
        {SERVICES.map((service, i) => (
          <ServiceBlock key={i} service={service} index={i} />
        ))}
        <div className="border-t border-[#38383A]/50" />
      </div>
    </section>
  );
}