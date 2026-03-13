import React from "react";

const SECTIONS = [
  {
    number: "01",
    title: "Responsible Party",
    content: (
      <p>First Gate Enterprises SA is the responsible party for the processing of your personal information as defined under POPIA.</p>
    ),
  },
  {
    number: "02",
    title: "Personal Information We Collect",
    content: (
      <ul className="space-y-3">
        {[
          ["Contact Information", "Name, email address, phone number, company name"],
          ["Project Information", "Project details, budget information, business requirements"],
          ["Communication Records", "Messages, inquiries, and correspondence with us"],
          ["Technical Information", "IP address, browser type, device information, website usage data"],
          ["Marketing Preferences", "Newsletter subscriptions and communication preferences"],
          ["File Uploads", "Project briefs, documents, and other materials you choose to share"],
        ].map(([label, desc]) => (
          <li key={label} className="flex gap-3">
            <span className="text-[#BEAA6D] mt-0.5 flex-shrink-0">—</span>
            <span><span className="text-[#0D0D0D]/80">{label}:</span> <span className="text-[#0D0D0D]/50">{desc}</span></span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "03",
    title: "How We Collect Your Information",
    content: (
      <ul className="space-y-2">
        {[
          "Contact forms on our website",
          "Email communications and inquiries",
          "Phone calls and meetings",
          "Newsletter sign-ups",
          "Cookies and website analytics tools",
          "Social media interactions",
          "Business cards and networking events",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[#0D0D0D]/50">
            <span className="text-[#BEAA6D] flex-shrink-0">—</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "04",
    title: "Purpose of Processing",
    content: (
      <ul className="space-y-3">
        {[
          ["Service Delivery", "To provide our creative and marketing services"],
          ["Communication", "To respond to inquiries and maintain client relationships"],
          ["Marketing", "To send relevant updates and promotional materials (with consent)"],
          ["Business Operations", "To improve our services and website functionality"],
          ["Legal Compliance", "To comply with applicable laws and regulations"],
          ["Analytics", "To understand website usage and improve user experience"],
        ].map(([label, desc]) => (
          <li key={label} className="flex gap-3">
            <span className="text-[#BEAA6D] mt-0.5 flex-shrink-0">—</span>
            <span><span className="text-[#0D0D0D]/80">{label}:</span> <span className="text-[#0D0D0D]/50">{desc}</span></span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "05",
    title: "Sharing of Personal Information",
    content: (
      <div className="space-y-4 text-[#0D0D0D]/50">
        <p>We may share your personal information with:</p>
        <ul className="space-y-2">
          {[
            ["Service Providers", "Third-party vendors who assist with our operations (email services, cloud storage, analytics)"],
            ["Business Partners", "When collaborating on projects (with your consent)"],
            ["Legal Authorities", "When required by law or to protect our rights"],
          ].map(([label, desc]) => (
            <li key={label} className="flex gap-3">
              <span className="text-[#BEAA6D] flex-shrink-0">—</span>
              <span><span className="text-[#0D0D0D]/80">{label}:</span> {desc}</span>
            </li>
          ))}
        </ul>
        <p>We do not sell your personal information to third parties. All sharing is done in accordance with POPIA requirements and with appropriate data protection measures.</p>
      </div>
    ),
  },
  {
    number: "06",
    title: "Data Security and Retention",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-[#BEAA6D]/70 text-xs tracking-[0.25em] uppercase mb-3">Security Measures</p>
          <ul className="space-y-2">
            {[
              "Industry-standard encryption for data transmission and storage",
              "Secure servers and regular security updates",
              "Access controls and employee training on data protection",
              "Regular security audits and vulnerability assessments",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[#0D0D0D]/50">
                <span className="text-[#BEAA6D] flex-shrink-0">—</span>{item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[#BEAA6D]/70 text-xs tracking-[0.25em] uppercase mb-3">Retention Periods</p>
          <ul className="space-y-2">
            {[
              ["Client Records", "7 years after project completion (for tax and legal purposes)"],
              ["Marketing Data", "Until consent is withdrawn or 3 years of inactivity"],
              ["Website Analytics", "26 months (Google Analytics default)"],
              ["Email Communications", "3 years or until deletion requested"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-3">
                <span className="text-[#BEAA6D] flex-shrink-0">—</span>
                <span className="text-[#0D0D0D]/50"><span className="text-[#0D0D0D]/80">{label}:</span> {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: "07",
    title: "Your Rights Under POPIA",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            title: "Access & Information",
            items: ["Request access to your personal information", "Know what data we have about you", "Receive a copy of your data"],
          },
          {
            title: "Control & Correction",
            items: ["Correct or update inaccurate information", "Object to certain processing activities", "Withdraw consent for marketing communications"],
          },
          {
            title: "Deletion & Restriction",
            items: ["Request deletion of your personal information", "Restrict how we process your data", "Data portability where technically feasible"],
          },
          {
            title: "Complaints",
            items: ["Lodge complaints with us directly", "Contact the Information Regulator", "Seek judicial remedies"],
          },
        ].map((group) => (
          <div key={group.title} className="border border-[#0D0D0D]/10 p-5">
            <p className="text-[#BEAA6D]/70 text-xs tracking-[0.25em] uppercase mb-3">{group.title}</p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2 text-[#0D0D0D]/50 text-sm">
                  <span className="text-[#BEAA6D]/50 flex-shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="sm:col-span-2 text-[#0D0D0D]/50 text-sm pt-2">
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:info@firstgate.co.za" className="text-[#BEAA6D]/70 hover:text-[#BEAA6D] transition-colors duration-300">
            info@firstgate.co.za
          </a>
        </div>
      </div>
    ),
  },
  {
    number: "08",
    title: "Cookies and Tracking",
    content: (
      <div className="space-y-4 text-[#0D0D0D]/50">
        <p>Our website uses cookies and similar technologies to:</p>
        <ul className="space-y-2">
          {["Ensure proper website functionality","Analyze website traffic and user behavior","Personalize your experience","Remember your preferences"].map(item => (
            <li key={item} className="flex gap-3"><span className="text-[#BEAA6D]">—</span>{item}</li>
          ))}
        </ul>
        <p>By using our website, you consent to our use of cookies. You can control cookie settings through your browser, but this may affect website functionality.</p>
      </div>
    ),
  },
  {
    number: "09",
    title: "Changes to This Policy",
    content: (
      <div className="space-y-3 text-[#0D0D0D]/50">
        <p>We may update this privacy policy from time to time. When we make significant changes, we will:</p>
        <ul className="space-y-2">
          {["Update the \"Last updated\" date at the top of this policy","Notify you via email if you're subscribed to our communications","Display a prominent notice on our website"].map(item => (
            <li key={item} className="flex gap-3"><span className="text-[#BEAA6D]">—</span>{item}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "10",
    title: "Contact Us",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-[#0D0D0D]/10 p-5">
            <p className="text-[#BEAA6D]/70 text-xs tracking-[0.25em] uppercase mb-2">General Inquiries</p>
            <a href="mailto:info@firstgate.co.za" className="text-[#0D0D0D]/60 hover:text-[#BEAA6D] transition-colors duration-300 text-sm">
              info@firstgate.co.za
            </a>
          </div>
          <div className="border border-[#0D0D0D]/10 p-5">
            <p className="text-[#BEAA6D]/70 text-xs tracking-[0.25em] uppercase mb-2">Privacy Matters</p>
            <p className="text-[#0D0D0D]/50 text-sm">For POPIA-related requests and data protection concerns</p>
          </div>
        </div>
        <div className="border border-[#BEAA6D]/20 p-5">
          <p className="text-[#BEAA6D]/70 text-xs tracking-[0.25em] uppercase mb-3">Information Regulator of South Africa</p>
          <div className="space-y-1 text-sm text-[#0D0D0D]/50">
            <p>Website: <a href="https://inforegulator.org.za" target="_blank" rel="noreferrer" className="text-[#BEAA6D]/60 hover:text-[#BEAA6D] transition-colors duration-300">inforegulator.org.za</a></p>
            <p>Email: <a href="mailto:PAIACompliance@inforegulator.org.za" className="text-[#BEAA6D]/60 hover:text-[#BEAA6D] transition-colors duration-300">PAIACompliance@inforegulator.org.za</a></p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]">
      {/* Top nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-[#0D0D0D]/10 bg-white/90 backdrop-blur-sm px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 border border-[#BEAA6D]/50 flex items-center justify-center group-hover:border-[#BEAA6D] transition-colors duration-300">
            <span className="text-[#BEAA6D] text-[10px] font-light tracking-widest">FG</span>
          </div>
          <span className="text-[#0D0D0D]/50 text-xs tracking-[0.3em] uppercase group-hover:text-[#0D0D0D]/80 transition-colors duration-300">First Gate</span>
        </a>
        <a
          href="/"
          className="flex items-center gap-2 text-[#0D0D0D]/40 text-xs tracking-[0.25em] uppercase hover:text-[#BEAA6D] transition-colors duration-300"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m7-7-7 7 7 7" />
          </svg>
          Back
        </a>
      </div>

      {/* Hero header */}
      <div className="pt-32 pb-20 px-6 md:px-[10vw] border-b border-[#0D0D0D]/10">
        <p className="text-[#BEAA6D] text-xs tracking-[0.4em] uppercase mb-6">Legal</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1
            className="text-5xl md:text-7xl font-light leading-none tracking-tight"
            style={{ color: "#0D0D0D" }}
          >
            Privacy<br />Policy
          </h1>
          <div className="md:text-right">
            <p className="text-[#0D0D0D]/40 text-xs tracking-[0.3em] uppercase">POPIA Compliant</p>
            <p className="text-[#0D0D0D]/30 text-xs mt-1">Last updated: December 2024</p>
          </div>
        </div>
        <p className="mt-8 text-[#0D0D0D]/55 text-base font-light leading-relaxed max-w-2xl">
          Your privacy matters to us. This policy explains how we collect, use, and protect your personal information in accordance with South Africa's Protection of Personal Information Act (POPIA).
        </p>
      </div>

      {/* Sections */}
      <div className="px-6 md:px-[10vw] py-16 md:py-24 space-y-0">
        {SECTIONS.map((section, i) => (
          <div
            key={section.number}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-[#0D0D0D]/10 last:border-b-0"
          >
            {/* Number + title */}
            <div className="md:col-span-4">
              <span
                className="text-[8vw] md:text-[4vw] font-light leading-none block mb-3"
                style={{ WebkitTextStroke: "1px rgba(190,170,109,0.6)", WebkitTextFillColor: "transparent" }}
              >
                {section.number}
              </span>
              <h2 className="text-lg md:text-xl text-[#0D0D0D]/80 font-light tracking-tight">
                {section.title}
              </h2>
            </div>
            {/* Content */}
            <div className="md:col-span-8 text-sm font-light leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="border-t border-[#0D0D0D]/10 px-6 md:px-[10vw] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#0D0D0D]/30 text-xs tracking-wider">© {new Date().getFullYear()} First Gate Enterprises SA. All rights reserved.</p>
        <p className="text-[#0D0D0D]/25 text-xs tracking-[0.25em] uppercase">POPIA · South Africa</p>
      </div>
    </div>
  );
}