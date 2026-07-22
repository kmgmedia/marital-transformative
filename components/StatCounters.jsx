"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function StatCounters() {
  const pathname = usePathname();

  useEffect(() => {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = +el.dataset.count;
          const suffix = el.dataset.suffix || "";
          const prefix = el.dataset.prefix || "";
          const duration = 1200;
          const start = performance.now();
          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = prefix + Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
