import { useEffect, useRef, useState } from "react";

// How long to wait for the video to start before giving up and keeping the image.
const VIDEO_TIMEOUT_MS = 6000;

// Skip the video on data-saver, very slow connections, or reduced-motion settings.
function shouldSkipVideo() {
  if (typeof window === "undefined") return true;
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn?.saveData) return true;
  if (conn && ["slow-2g", "2g"].includes(conn.effectiveType)) return true;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return true;
  return false;
}

/* A cover image that becomes a looping video once the video is actually
   playing. If the video fails, is slow, or autoplay is blocked, the image
   stays. `className` sizes both layers, so they line up exactly. */
export default function CoverMedia({ imgSrc, videoSrc, alt, className = "", style }) {
  const [useVideo, setUseVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoSrc && !shouldSkipVideo()) setUseVideo(true);
  }, [videoSrc]);

  // If the video hasn't started in time, drop it and keep the image.
  useEffect(() => {
    if (!useVideo || videoPlaying) return;
    const timer = setTimeout(() => setUseVideo(false), VIDEO_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [useVideo, videoPlaying]);

  // Some browsers block autoplay; fall back to the image if play() is rejected.
  useEffect(() => {
    if (!useVideo) return;
    videoRef.current?.play?.().catch(() => setUseVideo(false));
  }, [useVideo]);

  return (
    <div className="relative w-full overflow-hidden">
      <img src={imgSrc} alt={alt} className={`block ${className}`} style={style} />
      {useVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={imgSrc}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={() => setVideoPlaying(true)}
          onError={() => setUseVideo(false)}
          className={`${className} absolute inset-0 transition-opacity duration-500 ${videoPlaying ? "opacity-100" : "opacity-0"}`}
          style={style}
        />
      )}
    </div>
  );
}
