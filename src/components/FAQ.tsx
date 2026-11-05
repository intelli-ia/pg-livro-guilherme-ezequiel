"use client";
import { useState } from "react";
import { Minus, Plus } from "@/components/Icons";
import { PRICE_FAQ } from "@/lib/config";

const faqs = [
  {
    q: "O livro é para quem já lidera ou para quem deseja liderar?",
    a: "Escrevi para os dois momentos: quem quer se preparar para assumir uma posição de liderança e quem já ocupa o cargo e deseja desenvolver sua forma de conduzir pessoas e tomar decisões.",
  },
  {
    q: "Quais assuntos vou encontrar no livro?",
    a: "São 14 capítulos sobre comportamento, comunicação, feedback, conversas difíceis, desenvolvimento de pessoas, delegação, gestão, indicadores financeiros, cultura e o peso pessoal das responsabilidades de liderar.",
  },
  {
    q: "O conteúdo tem aplicação prática?",
    a: "Sim. Ao longo do livro, compartilho situações profissionais, perguntas de reflexão, exercícios e ferramentas, incluindo roteiros para preparar conversas difíceis e quadros para consultar na rotina.",
  },
  {
    q: "O livro é físico ou digital?",
    a: "Você receberá um exemplar físico de O Preço da Liderança no endereço informado durante a compra.",
  },
  {
    q: "Preciso pagar pelo frete?",
    a: `Não. O frete está incluso no valor de ${PRICE_FAQ}.`,
  },
  {
    q: "O que está incluído como bônus?",
    a: "Sua compra inclui o Workshop “Próximo Nível”, que será liberado posteriormente. O bônus não estará disponível imediatamente após a compra.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-ink/10">
            <button
              type="button"
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span
                className={`text-base font-semibold leading-snug transition-colors duration-200 group-hover:text-gold-deep md:text-lg ${
                  isOpen ? "text-ink" : "text-ink/85"
                }`}
              >
                {f.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? "bg-gold text-ink" : "bg-ink/[0.06] text-ink/70 group-hover:bg-gold/20"
                }`}
              >
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted md:text-base">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
