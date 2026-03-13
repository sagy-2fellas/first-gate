import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "mx-4 md:mx-12 mt-3 rounded-full bg-[#38383A]/80 backdrop-blur-xl border-t border-[#BEAA6D]/30"
          : "mx-0 mt-0 bg-transparent"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.0, 1.0)" }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <button onClick={() => scrollTo("hero")} className="focus:outline-none">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/74f7a3925_one_colour__gold_-removebg-preview.png"
            alt="First Gate"
            className="h-8 w-auto object-contain"
          />
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-12">
          {["about", "differentiators", "services", "process", "projects", "clients", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-[#F5F3EF]/70 hover:text-[#BEAA6D] text-xs tracking-[0.15em] uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BEAA6D] rounded"
            >
              {s === "differentiators" ? "Why Us" : s}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:block border border-[#BEAA6D] text-[#BEAA6D] px-6 py-2.5 text-xs tracking-[0.15em] uppercase rounded-full hover:bg-[#BEAA6D] hover:text-[#0D0D0D] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BEAA6D]"
          >
            Discuss Project
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BEAA6D] rounded p-1"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-[1.5px] bg-[#F5F3EF] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-[#F5F3EF] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-[#F5F3EF] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-[#38383A]/50 px-6 py-8 flex flex-col gap-6">
          {["about", "differentiators", "services", "process", "projects", "clients", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-[#F5F3EF] text-base tracking-wider uppercase text-left hover:text-[#BEAA6D] transition-colors"
            >
              {s === "differentiators" ? "Why Us" : s}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="border border-[#BEAA6D] text-[#BEAA6D] px-6 py-3 text-sm tracking-wider uppercase rounded-full hover:bg-[#BEAA6D] hover:text-[#0D0D0D] transition-all duration-500 w-fit"
          >
            Discuss Project
          </button>
        </div>
      )}
    </nav>
  );
}