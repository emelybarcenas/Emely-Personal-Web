import Navigation from "./Navigation-Bar/Navigation.jsx";
import Footer from "./Footer.jsx";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoopingText = () => {
    const texts = ["Designer & Developer", "Best of both worlds"];
    const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % texts.length;
                    setCurrentText(texts[nextIndex]);
                    return nextIndex;
                });
                setOpacity(1);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <h3
        className='whitespace-nowrap'
            style={{
                opacity: opacity,
                transition: 'opacity 0.5s ease-in-out',
            }}
        > {currentText}
        </h3>
    );
};

const projects = [
    {
        title: "GO TRANSIT REDESIGN",
        path: "/portfolio/goTransitRedesign",
        tags: ["UI/UX", "Case Study", "Research"],
        img: "/portfolio-covers/goAppCover.png"
        
    },
    {
        title: "PLATEITFORWARD",
        path: "/portfolio/plateItForward",
        tags: ["UI/UX", "Case Study"],
        img: "/portfolio-covers/plateItForwardCover.png"
    },
      {
        title: "TINKER",
        path: "/portfolio/tinker",
        tags: ["Full-stack", "Supabase", "React"],
        img: "/portfolio-covers/tinkercover.png"
    },
    {
        title: "BINDING",
        path: "/portfolio/binding",
        tags: ["HTML", "CSS", "JavaScript", "Figma"],
        img: "/portfolio-covers/bindingcover.png"
    },
     {
        title: "PAWS UP",
        path: "/portfolio/pawsUpXR",
        tags: ["Meta Quest", "Unity", "Blender", "Branding"],
        img: "/portfolio-covers/pawsUpcover.jpg"
    },
    {
        title: "BRILLIANCE SAT PREP",
        path: "/portfolio/brilliancesatprep",
        tags: ["Figma", "UI", "Prototyping"],
        img: "/portfolio-covers/brilliancecover.png"
    },
    {
        title: "HERTECHPATH",
        path: "/portfolio/hertechpath",
        tags: ["Figma", "UI"],
        img: "/portfolio-covers/hertechpathcover.png"
    },
    {
        title: "INIT EXPLORE PINS",
        path: "/portfolio/explorePins",
        tags: ["Branding", "Photoshop", "Mockups"],
        img: "/portfolio-covers/initpinscover.png"
    },
    {
        title: "AGILIS",
        path: "/portfolio/agilis",
        tags: ["Branding", "Web Design"],
        img: "/portfolio-covers/agiliscover1.png"
    },
    {
        title: "LIVELY YOUTH",
        path: "/portfolio/lively",
        tags: ["Branding", "Graphic Design", "Photoshop", "Illustrator"],
        img: "/portfolio-covers/livelycover.png"
    },
    {
        title: "EDEN",
        path: "/portfolio/eden",
        tags: ["Branding", "Graphic Design", "Photoshop", "Illustrator"],
        img: "/portfolio-covers/edencover.png"
    },
    {
        title: "FEARLESS ON ICE",
        path: "/portfolio/fearlessOnIce",
         tags: ["Storytelling", "Illustrator"],
        img: "/portfolio-covers/fearlessOnIceCover.png"
    }
];

function ProjectCard({ title, path, img, tags }) {
    return (
        <div className="w-1/3 h-1/3 flex items-center justify-center flex-col">
            {path ? (
                <Link to={path} className="group">
                    <div className="relative w-full h-full">
                        <img
                            src={img}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                        {tags && Array.isArray(tags) && (
                            <div className="absolute bottom-2 left-2 hidden md:flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white text-black text-xs rounded-full border border-[#E0E0E0] font-medium "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        {tags && !Array.isArray(tags) && (
                            <span className="absolute bottom-2 left-2 hidden md:flex px-3 py-1 bg-white text-black text-xs rounded-full border border-[#E0E0E0] font-medium  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {tags}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-row justify-between items-center w-full mt-3">
                        <p className="text-sm sm:text-base md:text-lg text-black text-left group-hover:underline">
                            {title}
                        </p>
                    </div>
                </Link>
            ) : (
                <>
                    <div className="relative w-full h-full">
                        <img src={img} className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
                        {tags && Array.isArray(tags) && (
                            <div className="absolute bottom-2 left-2 hidden md:flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                {tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-[#F3F3F3] text-black text-xs rounded-full border border-[#E0E0E0] font-medium shadow"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        {tags && !Array.isArray(tags) && (
                            <span className="absolute left-2 right-2 hidden md:flex px-3 py-1 bg-[#F3F3F3] text-black text-xs rounded-full border border-[#E0E0E0] font-medium shadow opacity-0 hover:opacity-100 transition-opacity duration-300">
                                {tags}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-row justify-between items-center w-full mt-3">
                        <p className="text-sm sm:text-base md:text-lg text-black text-left">{title}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default function Portfolio() {
    const rows = [];
    for (let i = 0; i < projects.length; i += 3) {
        rows.push(projects.slice(i, i + 3));
    }

    return (
        <div className="relative min-h-screen">
           <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <Navigation />
    </nav>
            
            <div className="relative bg-white z-10 pb-10">
                <section className="flex flex-col items-center justify-center mt-[10vh]">
                    <h3 className="text-[7vh] items-center align-center text-[#212121] font-bold ">PORTFOLIO</h3>
                    <h3 className="text-3xl items-center align-center text-[#212121] "><LoopingText /></h3>
                </section>
                <div className="mt-10">
                {rows.map((row, idx) => (
                    <section key={idx} className="flex flex-row w-full px-[5vw] mb-[1vh] gap-[1vw]">
                        {row.map((proj, i) => (
                            <ProjectCard key={proj.title} {...proj} />
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