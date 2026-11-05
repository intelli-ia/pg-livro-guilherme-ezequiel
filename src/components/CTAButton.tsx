import { Arrow } from "@/components/Icons";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CHECKOUT_URL } from "@/lib/config";

type Props = {
  label?: string;
  href?: string;
  /** gold: principal · outline: contorno dourado, fundos escuros · dark: fundos claros · whatsapp */
  variant?: "gold" | "outline" | "dark" | "whatsapp";
  size?: "sm" | "default" | "lg";
  icon?: "arrow" | "whatsapp" | "none";
  full?: boolean;
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 max-sm:gap-2 max-sm:whitespace-nowrap overflow-hidden rounded-full text-center font-bold leading-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

const variants = {
  gold: "bg-gradient-to-b from-gold-soft to-gold text-ink shadow-[0_14px_36px_-12px_rgba(240,178,33,0.65),inset_0_1px_0_rgba(255,255,255,0.45)] hover:shadow-[0_20px_44px_-12px_rgba(240,178,33,0.85),inset_0_1px_0_rgba(255,255,255,0.5)]",
  outline: "border-2 border-gold/70 text-gold hover:border-gold hover:bg-gold hover:text-ink",
  dark: "bg-ink text-white shadow-[0_14px_30px_-14px_rgba(22,29,38,0.8)] hover:bg-ink-3",
  whatsapp: "bg-[#25D366] text-ink hover:bg-[#1fb857]",
};

// abaixo de sm (celular) todos os botões ficam pequenos e com o texto em uma linha só
const sizes = {
  sm: "px-3 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm",
  default: "px-4 py-2 text-xs sm:px-9 sm:py-4 sm:text-base",
  lg: "px-4 py-2.5 text-[0.8125rem] sm:px-11 sm:py-5 sm:text-lg",
};

export default function CTAButton({
  label = "Quero meu exemplar",
  href = "#oferta",
  variant = "gold",
  size = "default",
  icon = "arrow",
  full = false,
  className = "",
}: Props) {
  const external = /^https?:/.test(href);
  const isCheckout = href === CHECKOUT_URL && href.startsWith("http");
  const iconCls = size === "sm" ? "h-3.5 w-3.5 sm:h-4 sm:w-4" : "h-3.5 w-3.5 sm:h-5 sm:w-5";
  return (
    <a
      href={href}
      {...(external || isCheckout ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${sizes[size]} ${full ? "flex w-full" : "w-full sm:w-auto"} ${className}`}
    >
      {variant === "gold" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]"
        />
      )}
      {icon === "whatsapp" && <WhatsAppIcon className={`${iconCls} shrink-0`} />}
      <span className="relative">{label}</span>
      {icon === "arrow" && <Arrow className={`${iconCls} relative shrink-0 transition-transform duration-300 group-hover:translate-x-1`} />}
    </a>
  );
}
