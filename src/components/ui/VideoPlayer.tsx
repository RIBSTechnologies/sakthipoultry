"use client";

import { useEffect, useRef, useState } from "react";

export function VideoPlayer({
  src,
  poster,
  className = "",
  controls = false,
  hideUntilPlaying = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  hideUntilPlaying?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || controls) return;

    const start = () => {
      void video.play().catch(() => {});
    };

    start();
    video.addEventListener("loadeddata", start);
    video.addEventListener("canplay", start);

    return () => {
      video.removeEventListener("loadeddata", start);
      video.removeEventListener("canplay", start);
    };
  }, [controls, src]);

  if (failed && !controls) return null;

  return (
    <video
      ref={videoRef}
      className={`${className}${hideUntilPlaying && !playing ? " opacity-0" : ""}`}
      autoPlay={!controls}
      muted={!controls}
      loop={!controls}
      playsInline
      controls={controls}
      preload={controls ? "metadata" : "auto"}
      poster={hideUntilPlaying ? undefined : poster}
      aria-hidden={!controls}
      onPlaying={() => setPlaying(true)}
      onError={() => setFailed(true)}
    >
      <source
        src={src}
        type={src.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
      />
    </video>
  );
}
