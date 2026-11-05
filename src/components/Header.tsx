"use client";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

// Barra fixa que aparece depois da hero (embaixo no mobile, no topo no desktop)
export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) setVisible(hero.getBoundingClientRect().bottom <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-0 right-0 z-50 flex justify-center px-4 transition-opacity duration-300 md:bottom-auto md:top-5 ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex w-full max-w-xl items-center justify-between gap-2 rounded-full border border-gold/25 bg-ink/90 py-1.5 pl-5 pr-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:gap-4 sm:pl-6">
        <span className="text-xs font-bold leading-tight text-white sm:text-base">
          O Preço da <span className="text-gold">Liderança</span>
        </span>
        <CTAButton size="sm" label="Quero meu exemplar" className="max-sm:w-auto max-sm:shrink-0" />
      </div>
    </header>
  );
}
