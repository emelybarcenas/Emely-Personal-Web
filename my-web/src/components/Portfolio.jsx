import Navigation from "./Navigation-Bar/Navigation.jsx";
import Footer from "./Footer.jsx";
import LazyImage from "./LazyImage.jsx";
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
  { title: "TINKER", path: "/portfolio/tinker", img: "/portfolio-covers/tinkercover.png", tags: ["Full-stack", "Supabase", "React"] },
  { title: "BINDING", path: "/portfolio/binding", img: "/portfolio-covers/bindingcover.png", tags: ["HTML", "CSS", "JavaScript", "Figma"] },
  { title: "PAWS UP", path: "/portfolio/pawsUpXR", img: "/portfolio-covers/pawsUpcover.jpg", tags: ["Meta Quest", "Unity", "Blender", "Branding"] },
  { title: "HERTECHPATH", path: "/portfolio/hertechpath", img: "/portfolio-covers/hertechpathcover.png", tags: ["Figma", "UI"] },
  { title: "INIT EXPLORE PINS", path: "/portfolio/explorePins", img: "/portfolio-covers/initpinscover.png", tags: ["Branding", "Photoshop", "Mockups"] },
  { title: "AGILIS", path: "/portfolio/agilis", img: "/portfolio-covers/agiliscover1.png", tags: ["Branding", "Web Design"] },
  { title: "LIVELY YOUTH", path: "/portfolio/lively", img: "/portfolio-covers/livelycover.png", tags: ["Branding", "Graphic Design", "Photoshop", "Illustrator"] },
  { title: "EDEN", path: "/portfolio/eden", img: "/portfolio-covers/edencover.png", tags: ["Branding", "Graphic Design", "Photoshop", "Illustrator"] },
];

function GalleryTile({ title, path, img, tags }) {
  const Wrapper = path ? Link : "div";
  const wrapperProps = path ? { to: path } : {};

  return (
    <figure className="w-1/3 flex items-center justify-center flex-col group">
      <Wrapper {...wrapperProps} className="relative w-full">
        <LazyImage src={img} alt={title} className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
        {tags?.length > 0 && (
          <div className="absolute bottom-2 left-2 hidden md:flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white text-black text-xs rounded-full border border-[#E0E0E0] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Wrapper>
      <div className="flex flex-row justify-between items-center w-full mt-3">
        {path ? (
          <Link to={path} className="text-sm sm:text-base md:text-lg text-black text-left hover:underline">{title}</Link>
        ) : (
          <p className="text-sm sm:text-base md:text-lg text-black text-left">{title}</p>
        )}
      </div>
    </figure>
  );
}

export default function Portfolio() {
  const rows = [];
  for (let i = 0; i < gallery.length; i += 3) {
    rows.push(gallery.slice(i, i + 3));
  }

  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navigation />
      </nav>

      <div className="relative bg-white z-10 pb-10">
        <section className="flex flex-col items-center justify-center mt-[10vh]">
          <h3 className="text-[7vh] text-[#181818] font-bold">PLAY</h3>
          <h3 className="text-3xl text-[#181818]">
            <LoopingText />
          </h3>
        </section>
        <div className="mt-10">
          {rows.map((row) => (
            <section key={row.map((p) => p.title).join("-")} className="flex flex-row w-full px-[5vw] mb-[1vh] gap-[1vw]">
              {row.map((item) => (
                <GalleryTile key={item.title} {...item} />
              ))}
            </section>
          ))}
        </div>
      </div>

      <footer className="sticky bottom-0 z-0 pointer-events-auto">
        <Footer />
      </footer>
    </div>
  );
}
