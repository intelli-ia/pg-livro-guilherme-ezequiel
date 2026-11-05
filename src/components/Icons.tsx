type P = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Check = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2.4} className={className}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const Arrow = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2} className={className}>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export const Plus = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Minus = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2} className={className}>
    <path d="M5 12h14" />
  </svg>
);

export const Lock = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}>
    <rect x="5" y="11" width="14" height="9" rx="2.5" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const Truck = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M3 6.5h11v9H3zM14 10h4l3 3v2.5h-7" />
    <circle cx="7.5" cy="17.5" r="1.8" />
    <circle cx="17.5" cy="17.5" r="1.8" />
  </svg>
);

export const Workshop = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="4.5" width="18" height="12" rx="2.5" />
    <path d="m10.5 8.5 4 2-4 2zM8 20h8M12 16.5V20" />
  </svg>
);

export const Tools = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M9 4h6l1 2h2.5A1.5 1.5 0 0 1 20 7.500v11A1.500 1.500 0 0 1 18.500 20h-13A1.500 1.500 0 0 1 4 18.500v-11A1.500 1.500 0 0 1 5.500 6H8z" />
    <path d="m8.500 13 2.200 2.200 4.300-4.700" />
  </svg>
);

export const Compass = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.500 8.500-2 5-5 2 2-5z" />
  </svg>
);

export const Users = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="9" r="3.2" />
    <path d="M3.500 19c.4-3.200 2.600-5 5.500-5s5.100 1.800 5.500 5" />
    <path d="M16 6.300a3 3 0 0 1 0 5.400M17.500 14.300c1.700.6 2.800 2.200 3 4.700" />
  </svg>
);

export const Target = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.500" />
    <circle cx="12" cy="12" r="4.500" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const Scale = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 4v16M7 20h10M5 7h14" />
    <path d="m5 7-2.500 6a3 3 0 0 0 5 0zM19 7l-2.500 6a3 3 0 0 0 5 0z" />
  </svg>
);

export const Quote = ({ className = "h-10 w-10" }: P) => (
  <svg viewBox="0 0 48 48" fill="currentColor" className={className} aria-hidden>
    <path d="M10 30c0-9 4-15 12-18l1.500 3C19 17.500 17 20.500 17 24h6v14H10zM28 30c0-9 4-15 12-18l1.500 3C37 17.500 35 20.500 35 24h6v14H28z" />
  </svg>
);
