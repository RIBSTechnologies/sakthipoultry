"use client";

import { useState } from "react";

export function VideoPlayer({
  src,
  poster,
  className = "",
  controls = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed && !controls) return null;

  return (
    <video
      className={className}
      autoPlay={!controls}
      muted={!controls}
      loop={!controls}
      playsInline
      controls={controls}
      preload={controls ? "metadata" : "auto"}
      poster={poster}
      aria-hidden={!controls}
      onError={() => setFailed(true)}
    >
      <source
        src={src}
        type={src.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
      />
    </video>
  );
}
