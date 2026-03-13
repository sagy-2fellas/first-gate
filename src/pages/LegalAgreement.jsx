import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function LegalAgreement() {
  return (
    <div className="bg-[#F5F3EF] text-gray-800 min-h-screen py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-3xl mx-auto">
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 transition-colors duration-300 mb-12"
        >
          ← Back to Home
        </Link>

        <p className="text-gray-900 text-xs tracking-[0.3em] uppercase mb-4">Legal</p>
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-gray-600 mb-2">By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.</p>
        <p className="text-sm text-gray-400 mb-16">Last updated: December 2024</p>

        <div className="w-full h-[1px] bg-[#BEAA6D]/30 mb-16" />

        {[
          {
            num: "1",
            title: "Introduction and Acceptance",
            content: `These Terms of Service ("Terms") govern your use of the website located at firstgate.co.za (the "Site") and any related services provided by First Gate Enterprises SA (Pty) Ltd ("we", "us", or "our"). By accessing the Site, you agree to be bound by these Terms. If you do not agree with these Terms, you are prohibited from using or accessing this Site.`,
          },
          {
            num: "2",
            title: "Intellectual Property Rights",
            content: `Unless otherwise stated, we or our licensors own the intellectual property rights for all material on the Site. This includes, but is not limited to, text, graphics, logos, images, video clips, and software. All intellectual property rights are reserved. You may not reproduce, distribute, modify, create derivative works of, publicly display, or publicly perform any of the material on our Site without our prior written consent.`,
          },
          {
            num: "3",
            title: "Use of the Website",
            content: null,
            intro: "You are permitted to use our Site for your personal and commercial use to inquire about or engage our services. However, you must not:",
            list: [
              "Engage in any activity that is illegal, fraudulent, or harmful.",
              "Attempt to gain unauthorized access to our Site, servers, or any associated databases.",
              "Use the Site to transmit spam, viruses, or other malicious software.",
              "Scrape, data-mine, or extract data from the Site without permission.",
              "Misrepresent your identity or affiliation in any way.",
            ],
          },
          {
            num: "4",
            title: "Third-Party Links",
            content: `Our Site may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.`,
          },
          {
            num: "5",
            title: "Disclaimer of Warranties",
            content: `The Site is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. We do not warrant that the Site will be uninterrupted, error-free, or secure.`,
          },
          {
            num: "6",
            title: "Limitation of Liability",
            content: `In no event shall First Gate Enterprises SA or its suppliers be liable for any consequential, indirect, or incidental damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Site, even if we have been notified orally or in writing of the possibility of such damage.`,
          },
          {
            num: "7",
            title: "Governing Law and Jurisdiction",
            content: `These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Cape Town, South Africa, and the parties hereby irrevocably consent to the personal jurisdiction and venue therein.`,
          },
        ].map((section) => (
          <section key={section.num} className="mb-12 pb-12 border-b border-gray-200 last:border-0">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-gray-900/60 text-xs tracking-[0.25em]">{String(section.num).padStart(2, "0")}</span>
              <h2 className="text-xl md:text-2xl font-light text-gray-900 tracking-tight">{section.title}</h2>
            </div>
            {section.content && <p className="text-gray-600 leading-[1.8]">{section.content}</p>}
            {section.intro && <p className="text-gray-600 leading-[1.8] mb-4">{section.intro}</p>}
            {section.list && (
              <ul className="space-y-2 ml-4">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-gray-900 mt-2 text-xs">—</span>
                    <span className="leading-[1.8]">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-gray-900/60 text-xs tracking-[0.25em]">08</span>
            <h2 className="text-xl md:text-2xl font-light text-gray-900 tracking-tight">Contact Us</h2>
          </div>
          <p className="text-gray-600 leading-[1.8] mb-3">If you have any questions about these Terms, please contact us at:</p>
          <a href="mailto:sales@firstgate.co.za" className="text-gray-900 hover:underline tracking-wide">
            sales@firstgate.co.za
          </a>
        </section>
      </div>
    </div>
  );
}