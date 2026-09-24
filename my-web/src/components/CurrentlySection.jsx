import { useEffect, useState } from "react";
import LazyImage from "./LazyImage.jsx";

/* Homepage "What I've been up to lately" — an editorial layout: a list of
   what I'm doing on the left (the active one white, the rest faded) and a
   single large frame on the right.
   Clicking an item crossfades to it, and the
   frame auto-advances every few seconds unless the section is hovered. */
const AUTO_ADVANCE_MS = 6000;
const CURRENTLY = [
  {
    name: "ShellHacks",
    title: "Designing for Florida's largest hackathon",
    img: "/shellhacks-gallery.jpg",
    imgAlt: "A collage of ShellHacks 2026 marketing posters and social graphics",
    href: "https://shellhacks.net",
  },
  {
    name: "Adobe",
    title: "Adobe Student Ambassador",
    img: "/adobe-student-ambassador-logo.png",
    imgAlt: "Adobe Student Ambassador logo",
    href: "https://www.linkedin.com/posts/emelybarcenas_adobeexpress-adobestudentambassador-fiu-activity-7500968780899033088-AE2K",
    contain: true,
  },
];

export default function CurrentlySection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const step = (dir) => setActive((i) => (i + dir + CURRENTLY.length) % CURRENTLY.length);
  const pad = (n) => String(n).padStart(2, "0");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  // Restart the timer whenever the active item changes, so a click gets a full turn.
  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const t = setTimeout(() => step(1), AUTO_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduceMotion]);

  const autoplaying = !paused && !reduceMotion;

  return (
    <div
      className="bg-[#181818] w-full text-white py-10 md:py-14 px-4 md:px-8 flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="w-full max-w-[1600px]">
        <h3 className="font-medium leading-[0.95] tracking-tight text-[clamp(2.25rem,4.5vw,4.5rem)] mb-8 md:mb-10">
          What I&apos;ve been up to lately{" "}
          <span aria-hidden="true" className="inline-block align-middle text-[#FF97DB] text-[0.6em] -translate-y-[0.08em]">
            ✦
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(12rem,1fr)_3fr] gap-6 md:gap-10">
          {/* Left rail — numbered list; the active item is white with a progress bar */}
          <ul className="order-2 md:order-1 flex flex-col justify-end gap-5 md:gap-6">
            {CURRENTLY.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group w-full text-left transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    <span className={`block text-xs mb-1 ${isActive ? "text-[#FF97DB]" : ""}`}>{pad(i + 1)}</span>
                    <span className="block text-xl md:text-2xl leading-tight">{item.title}</span>
                    <span className="mt-3 block h-px w-full bg-white/15 overflow-hidden">
                      {isActive && (
                        <span
                          key={`${active}-${autoplaying}`}
                          className={`block h-full bg-[#FF97DB] ${autoplaying ? "currently-progress" : "w-full"}`}
                          style={autoplaying ? { animationDuration: `${AUTO_ADVANCE_MS}ms` } : undefined}
                        />
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right — one large frame, items crossfade inside it */}
          <div className="order-1 md:order-2 relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] overflow-hidden rounded-[3px]">
            {CURRENTLY.map((item, i) => {
              const isActive = i === active;
              // Items with an href open their site in a new tab; the rest are plain frames.
              const Frame = item.href ? "a" : "div";
              const linkProps = item.href
                ? { href: item.href, target: "_blank", rel: "noopener noreferrer", tabIndex: isActive ? 0 : -1 }
                : {};
              return (
                <Frame
                  key={item.name}
                  {...linkProps}
                  aria-hidden={!isActive}
                  className={`group absolute inset-0 block overflow-hidden transition-opacity duration-500 ${item.contain ? "bg-white" : ""} ${
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <LazyImage
                    src={item.img}
                    alt={item.imgAlt}
                    className={`w-full h-full object-center ${item.contain ? "object-contain p-12 md:p-24" : "object-cover"} ${
                      item.href ? "transition-transform duration-300 group-hover:scale-[1.03]" : ""
                    }`}
                  />
                </Frame>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
