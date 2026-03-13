import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useScrollReveal, lineRevealStyle, STAGGER } from "./useScrollReveal";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer ref={ref} className="bg-[#0D0D0D] pt-[10vh] pb-10 px-6 md:px-[10vw] min-h-[80vh] flex flex-col justify-between">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16 md:mb-24" style={lineRevealStyle(isVisible)} />

      {/* Logo */}
      <div
        className="mb-16 md:mb-24"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 1.2s cubic-bezier(0.25, 0.1, 0.0, 1.0), transform 1.2s cubic-bezier(0.25, 0.1, 0.0, 1.0)`,
        }}
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/74f7a3925_one_colour__gold_-removebg-preview.png"
          alt="First Gate"
          className="h-16 md:h-24 w-auto object-contain"
        />
      </div>

      {/* Contact grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            label: "Location",
            value: "15th Floor, The Towers\n2 Hertzog Boulevard\nForeshore, Cape Town, 8000",
          },
          {
            label: "Phone",
            value: "+27 21 493 1791",
            href: "tel:+27214931791",
          },
          {
            label: "Email",
            value: "sales@firstgate.co.za",
            href: "mailto:sales@firstgate.co.za",
          },
          {
            label: "Web",
            value: "firstgate.co.za",
            href: "https://firstgate.co.za",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border-t border-[#38383A]/50 pt-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(15px)",
              transition: `all 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${STAGGER * (i + 1)}ms`,
            }}
          >
            <p className="text-[#F5F3EF]/30 text-xs tracking-[0.3em] uppercase mb-3">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[#F5F3EF]/60 text-sm hover:text-[#BEAA6D] transition-colors duration-300"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-[#F5F3EF]/60 text-sm whitespace-pre-line leading-[1.7]">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#38383A]/30 pt-8">
        <p className="text-[#F5F3EF]/25 text-xs tracking-wider">
          © {new Date().getFullYear()} First Gate Enterprises SA. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://2fellasmedia.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F3EF]/25 text-xs tracking-wider hover:text-[#BEAA6D] transition-colors duration-300">Made with ♥ by 2 Fellas Media</a>
          <Link to={createPageUrl("LegalAgreement")} className="text-[#F5F3EF]/25 text-xs tracking-wider hover:text-[#BEAA6D] transition-colors duration-300">
            Legal Agreement
          </Link>
          <Link to={createPageUrl("PrivacyPolicy")} className="text-[#F5F3EF]/25 text-xs tracking-wider hover:text-[#BEAA6D] transition-colors duration-300">
            Privacy Policy
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <img
            src="https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/d414f3b5c_BEE-Level1-removebg-preview.png"
            alt="Level 1 BEE Contributor"
            className="h-14 w-auto object-contain"
          />
          <a href="https://www.linkedin.com/company/first-gate-enterprises-sa-pty-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#F5F3EF]/40 hover:text-[#BEAA6D] transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}