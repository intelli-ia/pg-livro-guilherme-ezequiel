"use client";

import { useEffect } from "react";
import { CHECKOUT_URL } from "@/lib/config";

const STORAGE_KEY = "checkout_tracking_params";
const isTracked = (key: string) => key.startsWith("utm_") || key === "src" || key === "sck";

function readStored(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

/**
 * Repassa as UTMs (utm_*, src, sck) da URL da página para os links de checkout.
 * Guarda na sessão para não perder a origem se o visitante navegar/recarregar sem os parâmetros.
 */
export default function UtmForwarder() {
  useEffect(() => {
    const params = readStored();
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (isTracked(key) && value) params[key] = value;
    });
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    } catch {}

    const entries = Object.entries(params);
    if (!entries.length) return;

    document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
      const raw = a.getAttribute("href") ?? "";
      if (!raw.startsWith(CHECKOUT_URL.split("?")[0])) return;
      const url = new URL(raw);
      entries.forEach(([k, v]) => url.searchParams.set(k, v));
      a.setAttribute("href", url.toString());
    });
  }, []);

  return null;
}
