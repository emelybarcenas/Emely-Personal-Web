import Navigation from "./Navigation-Bar/Navigation.jsx";
import Footer from "./Footer.jsx";
import LazyImage from "./LazyImage.jsx";
import LazyVideo from "./LazyVideo.jsx";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LoopingText = () => {
  const texts = ["Designer & Developer", "Best of both worlds"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentText((prev) => (prev === texts[0] ? texts[1] : texts[0]));
        setOpacity(1);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h3
      className="whitespace-nowrap"
      style={{
        opacity,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {currentText}
    </h3>
  );
};

const gallery = [
  { title: "PlateItForward", path: "/portfolio/plateItForward", img: "/banners/plateItForwardBanner.png", w: 1920, h: 1080, tags: ["UI/UX", "Figma"] },
  { title: "Paws Up", path: "/portfolio/pawsUpXR", video: "/pawsup.mp4", w: 1920, h: 1080, square: true, tags: ["Meta Quest", "Unity", "Blender", "Branding"] },
  { title: "Cipher", img: "/play/cipher.png", w: 1920, h: 1080 },
  { title: "ShellHacks X", href: "https://shellhacks.net", video: "/play/shell-on-computer.mp4", w: 1920, h: 1080 },
  { title: "Eden", path: "/portfolio/eden", img: "/eden/cup-square.jpg", w: 1200, h: 1200, tags: ["Branding", "Graphic Design", "Photoshop", "Illustrator"] },
  { title: "Lively Youth", path: "/portfolio/lively", img: "/lively/allmockups-web.jpg", w: 2000, h: 1333, tags: ["Branding", "Graphic Design", "Photoshop", "Illustrator"] },
  { title: "Agilis", path: "/portfolio/agilis", img: "/portfolio-covers/agiliscover1.png", w: 3164, h: 3164, square: true, tags: ["Branding", "Web Design"] },
  { title: "Tinker", path: "/portfolio/tinker", img: "/portfolio-covers/tinkercover.png", w: 928, h: 568, tags: ["Full-stack", "Supabase", "React"] },
  { title: "Init Explore Pins", path: "/portfolio/explorePins", img: "/portfolio-covers/initpinscover.png", w: 798, h: 788, tags: ["Branding", "Photoshop", "Mockups"] },
  { title: "HerTechPath", path: "/portfolio/hertechpath", img: "/portfolio-covers/hertechpathcover.png", w: 951, h: 705, tags: ["Figma", "UI"] },
];

function useColumnCount() {
  const getCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const handleResize = () => setCount(getCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return count;
}

function GalleryTile({ title, path, href, img, video, square, w, h }) {
  const Wrapper = path ? Link : href ? "a" : "div";
  const wrapperProps = path
    ? { to: path, "aria-label": title }
    : href
    ? { href, target: "_blank", rel: "noopener noreferrer", "aria-label": title }
    : {};

  return (
    <figure className="w-full mb-6 break-inside-avoid group">
      <Wrapper {...wrapperProps} className="block w-full">
        <div className="relative w-full rounded-[3px] overflow-hidden bg-gray-100">
        {video ? (
          <LazyVideo
            src={video}
            width={w}
            height={h}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full ${square ? "aspect-square object-cover" : "h-auto"} transition-transform duration-300 ease-in-out transform group-hover:scale-105`}
          />
        ) : (
          <LazyImage
            src={img}
            alt={title}
            width={w}
            height={h}
            className={`w-full ${square ? "aspect-square object-cover" : "h-auto"} transition-transform duration-300 ease-in-out transform group-hover:scale-105`}
          />
        )}
        </div>
      </Wrapper>
    </figure>
  );
}

export default function Portfolio() {
  const columnCount = useColumnCount();
  const columns = Array.from({ length: columnCount }, () => []);
  gallery.forEach((item, i) => columns[i % columnCount].push(item));

  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navigation />
      </nav>

      <div className="relative z-10 pb-10 bg-white">
        <section className="flex flex-col items-center justify-center pt-[10vh]">
          <h3 className="text-[7vh] font-bold text-[#181818]">TINKERING</h3>
          <h3 className="text-3xl text-[#181818]">
            <LoopingText />
          </h3>
        </section>
        <div className="mt-10 px-4 md:px-8 flex justify-center">
          <div className="w-full max-w-[1600px] flex flex-row gap-6">
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col flex-1 min-w-0">
                {col.map((item) => (
                  <GalleryTile key={item.title} {...item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="sticky bottom-0 z-0 pointer-events-auto">
        <Footer />
      </footer>
    </div>
  );
}
