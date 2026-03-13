import React from "react";

const CLIENTS = [
  { name: "ALT Capital Partners", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/7a8c9259e_ALT-logo-1-removebg-preview.png" },
  { name: "Callpay", src: "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/2f3bc36d2_cropped-Callpay-Logo-Blue.png" },
  { name: "DM Attorneys", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/8299ce22c_9-removebg-preview.png" },
  { name: "Excellerate JHI", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/0f8f82dba_JHI-removebg-preview.png" },
  { name: "Growthpoint Properties", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/3fbf06d50_images__1_-removebg-preview1.png" },
  { name: "Amaanat Investment Holdings", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/c81d81562_Amaanat-Logo-Design.png" },
  { name: "Redefine Properties", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/a55d31c46_7-removebg-preview.png" },
  { name: "NV Properties", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/b92935be4_6-removebg-preview.png" },
  { name: "Pepkor Holdings", src: "https://media.base44.com/images/public/69b0299c443f8438ee7f3b53/60b77d343_Pepkor-Holdings-Limited-logo.png" },
  { name: "Premier Hotels & Resorts", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/f8801a374_4-removebg-preview.png" },
  { name: "Sanlam", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/3fc478bb8_2-removebg-preview.png" },
  { name: "VBO Global", src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/50749454e_Light-scaled-removebg-preview.png" },
];

const DOUBLED = [...CLIENTS, ...CLIENTS];

export default function ClientLogos() {
  return (
    <div className="relative overflow-hidden border-y border-[#38383A]/40 py-8 bg-[#2A2A2A]">
      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-[#2A2A2A] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-[#2A2A2A] to-transparent z-10" />

      <div
        className="flex items-center w-max"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {DOUBLED.map((client, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-10 border-r border-[#38383A]/40 last:border-r-0"
            style={{ minWidth: "160px" }}
          >
            <img
              src={client.src}
              alt={client.name}
              className="w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
              style={(() => {
                const xlarge = client.src.includes("a55d31c46_7-removebg");
                const large = !xlarge && ["3fc478bb8_2-removebg", "b92935be4_6-removebg", "f8801a374_4-removebg"].some(id => client.src.includes(id));
                return { maxWidth: xlarge ? "480px" : large ? "320px" : "160px", height: xlarge ? "168px" : large ? "112px" : "56px" };
              })()}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none; }
        }
      `}</style>
    </div>
  );
}