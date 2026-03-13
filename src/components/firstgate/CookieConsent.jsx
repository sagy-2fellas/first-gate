import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-xl"
      style={{
        animation: "slideUp 0.4s cubic-bezier(0.25, 0.1, 0.0, 1.0) forwards",
      }}
    >
      <div className="bg-[#1A1A1A] border border-[#38383A] rounded-sm px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
        <p className="text-[#F5F3EF]/70 text-sm leading-relaxed flex-1">
          We use cookies to improve your experience. By continuing, you agree to our{" "}
          <a href="/PrivacyPolicy" className="text-[#BEAA6D] hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-[#F5F3EF]/40 text-xs tracking-[0.15em] uppercase hover:text-[#F5F3EF]/70 transition-colors duration-200"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-[#BEAA6D] text-[#0D0D0D] text-xs tracking-[0.15em] uppercase font-medium px-5 py-2 rounded-sm hover:bg-[#BEAA6D]/80 transition-colors duration-200"
          >
            Accept
          </button>
        </div>
      </div>
      <style>{`@keyframes slideUp { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }`}</style>
    </div>
  );
}