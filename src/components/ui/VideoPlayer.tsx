"use client";

import { useEffect, useRef, useState } from "react";

export function VideoPlayer({
  src,
  poster,
  className = "",
  controls = false,
  hideUntilPlaying = false,
  onFail,
}: {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  hideUntilPlaying?: boolean;
  onFail?: () => void;
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
    let failTimer: ReturnType<typeof setTimeout> | undefined;

    const markReady = () => {
      if (!cancelled) setReady(true);
    };

    const markFailed = () => {
      if (cancelled) return;
      setFailed(true);
      onFail?.();
    };

    const tryPlay = async () => {
      if (cancelled || !video) return;

      try {
        video.muted = true;
        video.defaultMuted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) await playPromise;
        if (!cancelled && !video.paused) markReady();
      } catch {
        attempts += 1;
        if (attempts < 12) {
          retryTimer = setTimeout(() => {
            void tryPlay();
          }, Math.min(200 * attempts, 1200));
          return;
        }
        markFailed();
      }
    };

    const onPlaying = () => markReady();
    const onCanPlay = () => {
      void tryPlay();
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("muted", "");

    video.addEventListener("playing", onPlaying);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onCanPlay);
    document.addEventListener("visibilitychange", onVisibility);

    void tryPlay();

    // If autoplay never starts, surface the poster/fallback path.
    failTimer = setTimeout(() => {
      if (!cancelled && video.paused) markFailed();
    }, 8000);

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
      if (failTimer) clearTimeout(failTimer);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onCanPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [controls, onFail, src]);

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
      onError={() => {
        setFailed(true);
        onFail?.();
      }}
    />
  );
}
