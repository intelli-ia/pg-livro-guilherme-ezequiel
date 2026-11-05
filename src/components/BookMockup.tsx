import Image from "next/image";
import { BOOK_TITLE, AUTHOR, IMAGES } from "@/lib/config";

/**
 * Mockup do livro. Com IMAGES.book definido, mostra a imagem enviada pelo cliente;
 * enquanto isso, renderiza um livro 3D em CSS com a identidade da marca.
 */
export default function BookMockup({
  width = "clamp(11.5rem, 46vw, 19rem)",
  className = "",
}: {
  width?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} role="img" aria-label={`Livro ${BOOK_TITLE}, de ${AUTHOR}`}>
      <div className="book-scene" style={{ ["--bw" as string]: width }}>
        <div className="book">
          <div className="book-face book-back" />
          <div className="book-face book-spine" />
          <div className="book-face book-pages" />
          <div className={`book-face book-cover ${IMAGES.cover ? "book-cover-img" : ""}`}>
            {IMAGES.cover ? (
              <>
                <Image
                  src={IMAGES.cover}
                  alt=""
                  fill
                  sizes="20rem"
                  className="object-cover"
                  priority
                />
                {/* brilho de luz sobre a capa */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14)_0%,transparent_30%,transparent_70%,rgba(0,0,0,0.3)_100%)]" />
              </>
            ) : (
            <div className="relative flex h-full flex-col items-center justify-between px-[1.1em] pb-[1.5em] pt-[1.6em] text-center">
              <p className="text-[0.46em] font-semibold uppercase tracking-[0.34em] text-gold/90">{AUTHOR}</p>

              <div className="flex flex-col items-center">
                {/* emblema: moeda com degraus */}
                <svg viewBox="0 0 64 64" className="mb-[0.7em] h-[2.6em] w-[2.6em]" fill="none" aria-hidden>
                  <circle cx="32" cy="32" r="28" stroke="#F0B221" strokeWidth="1.4" />
                  <circle cx="32" cy="32" r="22" stroke="#F0B221" strokeOpacity=".4" strokeWidth="1" />
                  <path d="M20 41h8v-7h8v-7h8" stroke="#F0B221" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[0.62em] font-medium uppercase tracking-[0.3em] text-white/85">O Preço da</p>
                <p className="gold-text mt-[0.2em] text-[1.18em] font-bold uppercase leading-none tracking-[0.02em]">
                  Liderança
                </p>
              </div>

              <div className="flex w-full flex-col items-center gap-[0.6em]">
                <span className="h-px w-[3em] bg-gold/70" />
                <p className="text-[0.4em] font-medium uppercase tracking-[0.28em] text-white/60">
                  Decidir · Delegar · Desenvolver
                </p>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className="book-shadow" />
      </div>
    </div>
  );
}
