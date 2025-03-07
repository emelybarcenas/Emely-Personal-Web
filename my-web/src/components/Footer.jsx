import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// LoopingText Component with transition
const LoopingText = () => {
    const texts = ["create.", "inspire.", "learn.", "innovate.", "do good."];  // Dynamic words
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
        }, 4000); // Change text every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []); // Empty dependency array so this effect runs only once

    return (
        <h3
        className='whitespace-nowrap ml-[0.8vw] font-bold'
            style={{
                opacity: opacity,
                transition: 'opacity 0.5s ease-in-out', // Apply transition effect for opacity
            }}
        > {currentText}
        </h3>
    );
};


export default function Footer() {
    return (
        <div className="w-full h-[70vh] pb-10 bg-[#212121] text-white flex flex-col pointer-events-auto">
            <section className={`mt-[5vh] ${window.innerWidth<500 ? 'flex flex-col':'gap-[70vw] flex'}`}>
                <div className="flex flex-start text-[6vh] leading-[10vh] whitespace-nowrap font-bold">
                    
                <h1 className={`flex font-normal ${window.innerWidth<500? 'flex-col leading-none' : 'flex-row'}`}>
                {location.pathname === '/about-page' || location.pathname === '/' ? 'Born to' : 
                    <span className={`font-bold ${window.innerWidth<500 ? "text-[7vw]" : ""}`}>LET'S WORK TOGETHER.</span>}
                {/* Render LoopingText on /about-page and / */}
                {(location.pathname === '/about-page' || location.pathname === '/') && <LoopingText />}
                </h1>
                </div>

                <div className={`flex flex-end gap-[5vw] ${window.innerWidth <400 ? 'mt-[3vh] ml-[3vh]':''}`}>
                    <div>
                        <ul className="flex flex-col">
                            <li><a href="/">Home</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact-page">Contact Me</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col pointer-events-auto">
                            <li>
                                <a href="https://www.linkedin.com/in/emelybarcenas/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/emelybarcenas" target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="/Jan-2025-Resume.pdf" download>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mt-[15vh] text-center bg-[#212121] w-full pb-5">
                <h1 className={`font-bold ${window.innerWidth<500 ? 'text-[8vh] leading-none' : 'text-[20vh] leading-[15vh]'}`}>EMELY BARCENAS</h1>
                <div className="border-t-2 border-white mt-4 mx-[5vw]"></div>
                <div className={`flex text-nowrap mx-[5vw] ${window.innerWidth<500 ? 'flex-col items-start mt-4' : ' justify-between mt-4'}`}>
                    <h3>© 2025 Emely Barcenas</h3>
                    <h3 className=''>Made with React, Tailwind CSS, & love &lt;3</h3>
                </div>
            </section>
        </div>
    );
}
