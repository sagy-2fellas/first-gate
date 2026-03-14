import { useEffect, useRef, useState } from "react";

const EASING = "cubic-bezier(0.25, 0.1, 0.0, 1.0)";
const DURATION = "0.9s";
const STAGGER = 150;

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    // If the element is taller than the viewport, a threshold > 0 will never fire.
    // In that case, lower it to 0 so it triggers as soon as any pixel is visible.
    const el = ref.current;
    if (!el) return;
    const effectiveThreshold =
      el.getBoundingClientRect().height > window.innerHeight * 0.8
        ? 0
        : threshold;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: effectiveThreshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function revealStyle(isVisible, delay = 0) {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    clipPath: isVisible ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
    transition: `all ${DURATION} ${EASING} ${delay}ms`,
  };
}

export function textRevealStyle(isVisible, delay = 0) {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(100%)",
    transition: `all ${DURATION} ${EASING} ${delay}ms`,
  };
}

export function lineRevealStyle(isVisible, delay = 0) {
  return {
    transform: isVisible ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: `transform ${DURATION} ${EASING} ${delay}ms`,
  };
}

export function imageRevealStyle(isVisible, delay = 0) {
  return {
    clipPath: isVisible ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
    transition: `clip-path 1.2s ${EASING} ${delay}ms`,
  };
}

export { STAGGER, DURATION, EASING };