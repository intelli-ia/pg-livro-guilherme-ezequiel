import Image from "next/image";
import { Check } from "@/components/Icons";
import { AUTHOR, IMAGES } from "@/lib/config";

// base = celular (selos menores, quebrando em 2-3 linhas); md+ = desktop
const chipPos = [
  "-left-5 top-[34%] md:-left-4 md:top-[12%] lg:-left-12 float-a",
  "-right-5 top-[56%] md:-right-4 md:top-[46%] lg:-right-10 float-b",
  "-left-5 bottom-[5%] md:-left-2 md:bottom-[9%] lg:-left-8 float-c",
];

/**
 * Moldura em arco com a foto do autor e selos flutuando ao redor.
 * Sem IMAGES.author, mostra um espaço reservado elegante.
 */
export default function AuthorPhoto({ chips }: { chips: string[] }) {
  return (
    <div className="relative mx-auto w-[82%] max-w-sm md:h-full md:w-full md:max-w-md">
      <div className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-[999px] rounded-b-[2rem] border border-gold/50" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-ink-3 md:aspect-auto md:h-full md:min-h-[32rem]">
        {IMAGES.author ? (
          <Image
            src={IMAGES.author}
            alt={`${AUTHOR}, autor de O Preço da Liderança`}
            fill
            sizes="(min-width: 768px) 40vw, 82vw"
            className="object-cover object-[50%_20%]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(240,178,33,0.16),transparent)] text-center">
            <span className="gold-text text-7xl font-bold tracking-tight">GE</span>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">Foto do autor</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
      </div>

      {/* selos: abaixo da foto no mobile, flutuando ao redor no desktop */}
      <ul className="contents">
        {chips.map((c, i) => (
          <li
            key={c}
            className={`absolute z-10 flex w-[8.5rem] items-center gap-2 rounded-2xl border border-gold/40 bg-ink/85 px-3 py-2 text-xs font-semibold leading-tight text-gold shadow-xl shadow-black/40 backdrop-blur-md md:w-auto md:whitespace-nowrap md:rounded-full md:px-4 md:py-2.5 md:text-sm md:leading-normal ${chipPos[i % chipPos.length]}`}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
              <Check className="h-3 w-3" />
            </span>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
