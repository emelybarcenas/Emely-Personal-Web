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
        <span
        className='whitespace-nowrap ml-[0.8vw] font-bold'
            style={{
                opacity: opacity,
                transition: 'opacity 0.5s ease-in-out', // Apply transition effect for opacity
            }}
        > {currentText}
        </span>    );
};


export default function Footer() {
    const location = useLocation();
    const isAbout = location.pathname === '/about-page';
    const isHome = location.pathname === '/';

    return (
        <div className="footerContent w-full h-[70vh] px-6 sm:px-[5vw] pb-8 sm:pb-10 bg-[#181818] text-white flex flex-col pointer-events-auto">
            <section className="footerTop mt-[5vh] flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className={`footerIntro flex leading-tight font-bold ${isHome ? 'text-[clamp(1.75rem,4vh,3rem)]' : 'text-[clamp(1.5rem,3.4vh,2.5rem)]'}`}>

                {isAbout ? (
                    <h1 className="flex flex-col sm:flex-row font-normal">
                        Born to
                        <LoopingText />
                    </h1>
                ) : isHome ? (
                    <h1 className="font-medium">Thanks for stopping by :)</h1>
                ) : (
                    <h1 className="font-bold">Let's work together.</h1>
                )}
                </div>

                <div className="footerLinks flex gap-8 sm:gap-[5vw]">
                    <div>
                        <ul className="flex flex-col pointer-events-auto">
                            <li><a href="/" className='hover:underline '>Home</a></li>
                            <li><a href="/portfolio" className='hover:underline '>Portfolio</a></li>
                            <li><a href="/contact-page" className='hover:underline '>Contact Me</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col pointer-events-auto">
                            <li>
                                <a href="https://www.linkedin.com/in/emelybarcenas/" target="_blank" rel="noopener noreferrer" className='hover:underline '>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/emelybarcenas" target="_blank" rel="noopener noreferrer" className='hover:underline '>
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="/EmelyBarcenasResume.pdf" download className='hover:underline '>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="footerSignature mt-auto text-left bg-[#181818] w-full pb-1">
                <h1 className="footerName font-bold flex flex-col">
                    <span>EMELY</span>
                    <span>BARCENAS</span>
                </h1>
                <div className="footerRule border-t-2 border-white mt-4"></div>
                <div className="footerMeta flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-4 text-left">
                    <h3>© 2025 Emely Barcenas</h3>
                    <h3 className=''>Made with React, Tailwind CSS, & love &lt;3</h3>
                </div>
            </section>
        </div>
    );
}
