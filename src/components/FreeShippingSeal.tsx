import { Truck } from "@/components/Icons";

/** Selo circular: o caminhão fica fixo no centro e só o texto "FRETE GRÁTIS" gira ao redor. */
export default function FreeShippingSeal({ className = "relative" }: { className?: string }) {
  return (
    <div
      className={`aspect-square ${className}`}
      role="img"
      aria-label="Frete grátis"
    >
      {/* fundo estático */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full drop-shadow-[0_14px_24px_rgba(0,0,0,0.45)]" aria-hidden>
        <circle cx="100" cy="100" r="98" fill="#161d26" stroke="#f0b221" strokeWidth="3" />
        <circle cx="100" cy="100" r="50" fill="#f0b221" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#f0b221" strokeOpacity=".35" strokeWidth="1" strokeDasharray="2 5" />
      </svg>

      {/* texto girando */}
      <svg viewBox="0 0 200 200" className="seal-spin absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <path id="seal-circle" d="M100 100 m-70 0 a70 70 0 1 1 140 0 a70 70 0 1 1 -140 0" />
        </defs>
        <text fill="#f6cd5e" fontSize="19" fontWeight="800" letterSpacing="1" textAnchor="middle">
          {/* dois textos e duas estrelas em posições fixas do círculo: espaçamento igual dos dois lados */}
          <textPath href="#seal-circle" startOffset="25%">FRETE GRÁTIS</textPath>
          <textPath href="#seal-circle" startOffset="75%">FRETE GRÁTIS</textPath>
          <textPath href="#seal-circle" startOffset="0%">✦</textPath>
          <textPath href="#seal-circle" startOffset="50%">✦</textPath>
        </text>
      </svg>

      {/* caminhão fixo */}
      <span className="absolute inset-0 flex items-center justify-center text-ink">
        <Truck className="h-[30%] w-[30%]" />
      </span>
    </div>
  );
}
