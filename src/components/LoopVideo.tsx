"use client";

import { useEffect, useRef } from "react";

/**
 * Vídeo mudo em loop. Só baixa/toca quando entra na tela e pausa ao sair,
 * para não pesar a página. Sem JS ou com autoplay bloqueado, fica o poster.
 */
export default function LoopVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
