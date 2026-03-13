import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal, textRevealStyle, lineRevealStyle, STAGGER } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";

const PROJECTS = [
  {
    title: "DM Attorneys",
    category: "Commercial Fit-Out",
    location: "Cape Town CBD",
    year: "2024",
    description:
      "A full commercial fit-out for DM Attorneys in the heart of Cape Town CBD. The brief called for a sophisticated, functional workspace that reflects the firm's professional identity — featuring custom joinery, integrated IT infrastructure, and a refined material palette of stone, timber, and brushed metal.",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/016bef518_DM_Attorneys__1_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/6276a0565_DM_Attorneys__2_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/6feedf9d7_DM_Attorneys__3_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/1a8f23f27_DM_Attorneys__5_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/c4503ac61_DM_Attorneys__6_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/a038029e2_DM_Attorneys__7_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/7251ce85f_DM_Attorneys__8_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/e9134b967_DM_Attorneys__9_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/37fad0b82_DM_Attorneys__10_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/565b742cb_DM_Attorneys__11_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/f30063837_DM_Attorneys__12_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/03db6fbdb_DM_Attorneys__13_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/843202d3e_DM_Attorneys__14_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/65190de88_DM_Attorneys__15_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/d3f94488c_DM_Attorneys__16_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/3914ce837_DM_Attorneys__17_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/d840f734b_DM_Attorneys__18_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/9f02a3b9a_DM_Attorneys__19_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/cd451ac6d_DM_Attorneys__20_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/919c046de_DM_Attorneys__21_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/aa370163e_DM_Attorneys__22_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/a89f948bc_DM_Attorneys__23_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/7d4d0e594_DM_Attorneys__24_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/23c9c322e_DM_Attorneys__25_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/c551add31_DM_Attorneys__27_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/f403c42ec_DM_Attorneys__28_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/73fcc6fe8_DM_Attorneys__29_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/237a6e6bc_DM_Attorneys__30_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/f351f9344_DM_Attorneys__31_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/0033fcdef_DM_Attorneys__32_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/0e8d106fc_DM_Attorneys__33_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/654afdf5f_DM_Attorneys__34_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/1cdf70a62_DM_Attorneys__35_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/cf46d7ab1_DM_Attorneys__36_.jpg",
    ],
  },
  {
    title: "Callpay",
    category: "Office Design & Construction",
    location: "Stellenbosch",
    year: "2024",
    description:
      "End-to-end design and construction of Callpay's new headquarters in Stellenbosch. The space was designed to support a fast-growing fintech team with open-plan collaboration zones, private meeting suites, and a striking reception area that embodies the brand's forward-thinking culture.",
    images: [
      "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/af555ea0a_Untitleddesign6.jpg",
      "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/d8fec99ee_Untitleddesign4.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/fd0fb9b3c_Callpay_Office___3_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/c0bce0b7e_Callpay_Office___5_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/67aa53886_Callpay_Office___6_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/2068a8218_Callpay_Office___7_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/4c424f7fe_Callpay_Office___8_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/1f7dfacec_Callpay_Office___9_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/de730436c_Callpay_Office___10_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/44a4c693e_Callpay_Office___11_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/2ece9f6e6_Callpay_Office___12_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/4402f112e_Callpay_Office___13_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/665776e14_Callpay_Office___14_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/351c9a4a3_Callpay_Office___15_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/96745f356_Callpay_Office___16_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/e1658a1dc_Callpay_Office___17_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/2d57cea6f_Callpay_Office___18_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/8ab2d9da8_Callpay_Office___19_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/a89216e46_Callpay_Office___20_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/6fc01d36c_Callpay_Office___21_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/7c02dd188_Callpay_Office___22_.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/742a677ce_Callpay_Office___24_.jpg",
    ],
  },
];

function ProjectGallery({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImg((p) => (p + 1) % project.images.length);
      if (e.key === "ArrowLeft") setActiveImg((p) => (p - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const prev = () => setActiveImg((p) => (p - 1 + project.images.length) % project.images.length);
  const next = () => setActiveImg((p) => (p + 1) % project.images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ backgroundColor: "rgba(13,13,13,0.97)" }}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-5 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-[#BEAA6D] text-xs tracking-[0.3em] uppercase">{project.category} · {project.location}</p>
          <h3 className="text-white text-xl md:text-2xl font-light tracking-tight mt-1">{project.title}</h3>
        </div>
        <button onClick={onClose} className="text-[#F5F3EF]/50 hover:text-[#BEAA6D] transition-colors duration-200 ml-8">
          <X size={22} />
        </button>
      </div>

      {/* Main image */}
      <div
        className="flex-1 relative flex items-center justify-center px-4 md:px-16 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={activeImg}
          src={project.images[activeImg]}
          alt={`${project.title} ${activeImg + 1}`}
          className="max-w-full max-h-full object-contain rounded-sm"
          style={{ animation: "fadeIn 0.35s ease" }}
        />

        {/* Nav arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#0D0D0D]/70 hover:bg-[#BEAA6D] text-white hover:text-[#0D0D0D] rounded-sm transition-colors duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#0D0D0D]/70 hover:bg-[#BEAA6D] text-white hover:text-[#0D0D0D] rounded-sm transition-colors duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Counter */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#F5F3EF]/40 text-xs tracking-[0.2em]">
            {String(activeImg + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
          </div>
        )}
      </div>

      {/* Thumbnail strip + description */}
      <div className="flex-shrink-0 px-6 md:px-10 pb-6 pt-4" onClick={(e) => e.stopPropagation()}>
        <p className="text-[#F5F3EF]/50 text-sm leading-[1.8] mb-4 max-w-2xl">{project.description}</p>
        {project.images.length > 1 && (
          <div className="flex gap-2">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className="overflow-hidden rounded-sm flex-shrink-0"
                style={{
                  outline: activeImg === i ? "1.5px solid #BEAA6D" : "1.5px solid rgba(56,56,58,0.6)",
                  outlineOffset: "2px",
                }}
              >
                <img src={img} alt="" className="w-16 h-12 md:w-20 md:h-14 object-cover transition-opacity duration-200"
                  style={{ opacity: activeImg === i ? 1 : 0.45 }} />
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
}

export default function RecentProjects() {
  const { ref, isVisible } = useScrollReveal();
  const sectionNum = useCountUp(5, isVisible);

  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  return (
    <section ref={ref} className="bg-[#0D0D0D] py-[15vh] px-6 md:px-[10vw]">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16 md:mb-24" style={lineRevealStyle(isVisible)} />

      {/* Header */}
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
              Recent Projects
            </p>
          </div>
          <div className="overflow-hidden">
            <h2
              className="text-3xl md:text-4xl text-white font-light leading-[1.2] tracking-tight"
              style={textRevealStyle(isVisible, STAGGER * 2)}
            >
              Selected commercial office and fit-out projects.
            </h2>
          </div>
        </div>
      </div>

      {/* Project rows with hover image */}
      <div className="relative">
        {/* Floating image */}
        <div
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[28vw] h-[35vh] overflow-hidden rounded-sm pointer-events-none z-10"
          style={{
            opacity: hoveredIdx !== null ? 1 : 0,
            transform: hoveredIdx !== null ? "translateY(-50%) scale(1)" : "translateY(-50%) scale(0.94)",
            transition: "opacity 0.5s cubic-bezier(0.25, 0.1, 0.0, 1.0), transform 0.5s cubic-bezier(0.25, 0.1, 0.0, 1.0)",
          }}
        >
          {PROJECTS.map((project, i) => (
            <img
              key={i}
              src={project.images[0]}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: hoveredIdx === i ? 1 : 0, transition: "opacity 0.4s ease" }}
            />
          ))}
        </div>

        {/* Rows */}
        <div className="lg:pr-[32vw]">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="border-t border-[#38383A]/50 group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${STAGGER * (i + 2)}ms`,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setOpenProject(project)}
            >
              <div className="flex items-center gap-6 py-6 md:py-7">
                <span className="text-[#BEAA6D]/60 text-lg font-light flex-shrink-0">•</span>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight transition-colors duration-300 block"
                    style={{ color: hoveredIdx === i ? "#BEAA6D" : "#F5F3EF" }}
                  >
                    {project.title}
                  </span>
                  <span className="text-[#F5F3EF]/35 text-sm tracking-wider mt-1 block">
                    {project.category} · {project.location}
                  </span>
                </div>
                <span
                  className="text-[#BEAA6D] text-lg transition-all duration-300 flex-shrink-0"
                  style={{
                    opacity: hoveredIdx === i ? 1 : 0,
                    transform: hoveredIdx === i ? "translateX(0)" : "translateX(-8px)",
                  }}
                >
                  →
                </span>
              </div>
            </div>
          ))}
          <div className="border-t border-[#38383A]/50" />
        </div>
      </div>

      {/* Gallery Modal */}
      {openProject && (
        <ProjectGallery project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  );
}