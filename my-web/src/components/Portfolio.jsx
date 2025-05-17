import Navigation from "./Navigation-Bar/Navigation.jsx";
import Footer from "./Footer.jsx";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LoopingText = () => {
    const texts = ["Designer & Developer", "Best of both worlds"];  // Dynamic words
    const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(1); // State to control opacity

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0); // Start fading out
            setTimeout(() => {
                setIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % texts.length;  // Loop back to the start
                    setCurrentText(texts[nextIndex]);  // Update the text state
                    return nextIndex;
                });
                setOpacity(1); // Start fading in
            }, 500); // Wait for 500ms before changing the text
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []); // Empty dependency array so this effect runs only once

    return (
        <h3
        className='whitespace-nowrap'
            style={{
                opacity: opacity,
                transition: 'opacity 0.5s ease-in-out', // Apply transition effect for opacity
            }}
        > {currentText}
        </h3>
    );
};
// Data for portfolio projects
const projects = [
      {
        title: "TINKER",
        path: "/portfolio/tinker",
        img: "/portfolio-covers/tinkercover.png"
    },
    {
        title: "BINDING",
        path: "/portfolio/binding",
        img: "/portfolio-covers/bindingcover.png"
    },
     {
        title: "PAWS UP",
        path: "/portfolio/pawsUpXR",
        img: "/portfolio-covers/pawsUpcover.jpg"
    },
    {
        title: "BRILLIANCE SAT PREP",
        path: "/portfolio/brilliancesatprep",
        img: "/portfolio-covers/brilliancecover.png"
    },
    {
        title: "HERTECHPATH",
        path: "/portfolio/hertechpath",
        img: "/portfolio-covers/hertechpathcover.png"
    },
    {
        title: "INIT EXPLORE PINS",
        path: "/portfolio/explorePins",
        img: "/portfolio-covers/initpinscover.png"
    },
    {
        title: "AGILIS",
        path: "/portfolio/agilis",
        img: "/portfolio-covers/agiliscover1.png"
    },
    {
        title: "LIVELY YOUTH",
        path: "/portfolio/lively",
        img: "/portfolio-covers/livelycover.png"
    },
    {
        title: "EDEN",
        path: "/portfolio/eden",
        img: "/portfolio-covers/edencover.png"
    },
    {
        title: "FEARLESS ON ICE",
        path: "/portfolio/fearlessOnIce",
        img: "/portfolio-covers/fearlessOnIceCover.png"
    }
   
];
// Reusable project card (thumbnail, path, image)
function ProjectCard({ title, path, img }) {
    return (
        <div className="w-1/3 h-1/3 flex items-center justify-center flex-col">
            {path ? (
                <Link to={path}>
                    <img src={img} className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
                    <p className="text-sm sm:text-base md:text-lg mt-3 text-[#212121] hover:underline text-center">{title}</p>
                </Link>
            ) : (
                <>
                    <img src={img} className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
                    <p className="text-sm sm:text-base md:text-lg mt-3 text-[#212121] text-center">{title}</p>
                </>
            )}
        </div>
    );
}



export default function Portfolio() {
    // Split projects into rows of 3
    const rows = [];
    for (let i = 0; i < projects.length; i += 3) {
        rows.push(projects.slice(i, i + 3));
    }

    return (
        <main className="pointer-events-auto">
            <div className="flex flex-col bg-white w-screen ">
                <nav>
                    <Navigation className="z-50 top-0 left-0 h-full" />
                </nav>
                <section className="flex flex-col items-center justify-center mt-[10vh]">
                    <h3 className="text-[7vh] items-center align-center text-[#212121] font-bold ">PORTFOLIO</h3>
                    <h3 className="text-3xl items-center align-center text-[#212121] "><LoopingText /></h3>
                </section>
                <div className="mt-10">
                {rows.map((row, idx) => (
                    <section key={idx} className="flex flex-row w-screen px-[5vw] mb-[1vh] gap-[1vw]">
                        {row.map((proj, i) => (
                            <ProjectCard key={proj.title} {...proj} />
                        ))}
                    </section>
                ))}
                </div>
            </div>
            <footer className="pointer-events-auto sticky bottom-0 z-[-1]">
                <Footer className="pointer-events-auto" />
            </footer>
        </main>
    );
}