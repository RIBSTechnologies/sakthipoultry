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
  const [ready, setReady] = useState(!hideUntilPlaying);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || controls) return;

    let cancelled = false;
    let attempts = 0;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const markReady = () => {
      if (!cancelled) setReady(true);
    };

    const tryPlay = async () => {
      if (cancelled || !video) return;

      try {
        video.muted = true;
        video.defaultMuted = true;
        await video.play();
        markReady();
      } catch {
        attempts += 1;
        if (attempts < 10) {
          retryTimer = setTimeout(() => {
            void tryPlay();
          }, Math.min(250 * attempts, 1500));
          return;
        }
        // Autoplay blocked, but a decoded frame is enough to show something.
        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          markReady();
        }
      }
    };

    const onMediaReady = () => {
      void tryPlay();
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    video.addEventListener("loadeddata", onMediaReady);
    video.addEventListener("canplay", onMediaReady);
    video.addEventListener("playing", markReady);
    document.addEventListener("visibilitychange", onVisibility);

    // Hard refresh can leave the element without a fresh load attempt.
    video.load();
    void tryPlay();

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
      video.removeEventListener("loadeddata", onMediaReady);
      video.removeEventListener("canplay", onMediaReady);
      video.removeEventListener("playing", markReady);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [controls, src]);

  if (failed && !controls) return null;

  return (
    <video
      ref={videoRef}
      key={src}
      src={src}
      className={`${className}${hideUntilPlaying && !ready ? " opacity-0" : ""}`}
      autoPlay={!controls}
      muted={!controls}
      loop={!controls}
      playsInline
      controls={controls}
      preload={controls ? "metadata" : "auto"}
      poster={hideUntilPlaying ? undefined : poster}
      aria-hidden={!controls}
      onPlaying={() => setReady(true)}
      onError={() => setFailed(true)}
    />
  );
}
