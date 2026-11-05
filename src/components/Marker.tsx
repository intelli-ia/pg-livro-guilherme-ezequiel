"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Marca-texto dourado que se desenha da esquerda para a direita quando entra na tela. */
export default function Marker({ children, delay = 0.3 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 0.34em" }}
      whileInView={{ backgroundSize: "100% 0.34em" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-gradient-to-r from-gold to-gold-soft bg-[position:0_90%] bg-no-repeat [box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
    >
      {children}
    </motion.span>
  );
}
