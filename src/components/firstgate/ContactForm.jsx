import React, { useState } from "react";
import { useScrollReveal, textRevealStyle, lineRevealStyle, STAGGER } from "./useScrollReveal";
import { useCountUp } from "./useCountUp";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ContactForm() {
  const { ref, isVisible } = useScrollReveal();
  const sectionNum = useCountUp(7, isVisible);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await base44.integrations.Core.SendEmail({
        to: "sagy@2fellasmedia.com",
        subject: `New enquiry from ${form.fullName}${form.companyName ? ` — ${form.companyName}` : ""}`,
        body: `Name: ${form.fullName}\nCompany: ${form.companyName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#38383A] py-4 text-[#F5F3EF] placeholder-[#F5F3EF]/25 focus:border-[#BEAA6D] focus:outline-none transition-colors duration-500 text-base";

  return (
    <section id="contact" ref={ref} className="bg-[#0D0D0D] py-[15vh] px-6 md:px-[10vw]">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16 md:mb-24" style={lineRevealStyle(isVisible)} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 mb-16 md:mb-24">
        <div className="overflow-hidden">
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
        <div className="md:pt-6">
          <div className="overflow-hidden mb-4">
            <p
              className="text-[#BEAA6D] text-sm tracking-[0.3em] uppercase"
              style={textRevealStyle(isVisible, STAGGER)}
            >
              Contact
              </p>
              </div>
              <div className="overflow-hidden">
              <h2
               className="text-3xl md:text-4xl text-white font-light leading-[1.2] tracking-tight max-w-xl"
               style={textRevealStyle(isVisible, STAGGER * 2)}
              >
               Let's discuss your next design and construction project.
               </h2>
               </div>
               </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Form */}
        <div
          className="lg:col-span-7"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${STAGGER * 3}ms`,
          }}
        >
          {submitted ? (
            <div className="py-20 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#BEAA6D] flex items-center justify-center mx-auto mb-6">
                <span className="text-[#BEAA6D] text-2xl">✓</span>
              </div>
              <h3 className="text-white text-2xl font-light mb-3">Thank you for reaching out.</h3>
              <p className="text-[#F5F3EF]/50 text-base">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div>
                  <label htmlFor="fullName" className="sr-only">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="sr-only">Company Name</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    value={form.companyName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#BEAA6D] text-[#0D0D0D] px-10 py-4 text-sm tracking-[0.2em] uppercase rounded-full hover:bg-[#d4c17f] transition-all duration-500 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BEAA6D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D] ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {loading ? "Sending..." : "Request a Consultation"}
                </button>
                {error && (
                  <p className="text-red-400 text-sm mt-4">{error}</p>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div
          className="lg:col-span-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.9s cubic-bezier(0.25, 0.1, 0.0, 1.0) ${STAGGER * 4}ms`,
          }}
        >
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#BEAA6D] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#F5F3EF]/40 text-xs tracking-[0.2em] uppercase mb-2">Address</p>
                <p className="text-[#F5F3EF]/70 text-base leading-[1.7]">
                  15th Floor, The Towers<br />
                  2 Hertzog Boulevard<br />
                  Foreshore, Cape Town, 8000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-[#BEAA6D] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#F5F3EF]/40 text-xs tracking-[0.2em] uppercase mb-2">Phone</p>
                <a
                  href="tel:+27214931791"
                  className="text-[#F5F3EF]/70 text-base hover:text-[#BEAA6D] transition-colors duration-300"
                >
                  +27 21 493 1791
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-[#BEAA6D] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#F5F3EF]/40 text-xs tracking-[0.2em] uppercase mb-2">Email</p>
                <a
                  href="mailto:sales@firstgate.co.za"
                  className="text-[#F5F3EF]/70 text-base hover:text-[#BEAA6D] transition-colors duration-300"
                >
                  sales@firstgate.co.za
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-[#F5F3EF]/40 text-xs tracking-[0.2em] uppercase mb-4">Follow Us</p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/first-gate-enterprises-sa-pty-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#F5F3EF]/70 hover:text-[#BEAA6D] transition-colors duration-300" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}