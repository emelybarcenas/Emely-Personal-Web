import Navigation from "./Navigation-Bar/Navigation.jsx";
import Footer from "./Footer.jsx";
import React, { useState, useEffect } from 'react';

const LoopingText = () => {
    const texts = ["Designer & Developer.", "Best of both worlds."];  // Dynamic words
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

export default function Portfolio(){
return(
  <main className="pointer-events-auto">

<div className="flex flex-col bg-white w-screen ">
<nav>
        <Navigation className="z-50 top-0 left-0 h-full" />
</nav>
<section className="flex flex-col items-center justify-center mt-[10vh]">
<h3 className="text-[7vh] items-center align-center text-[#212121] font-bold ">PORTFOLIO</h3>
<h3 className="text-3xl items-center align-center text-[#212121] "><LoopingText /></h3>
</section>
<section className="flex flex-row w-screen px-[5vw] mt-[5vh] mb-[1vh] gap-[1vw]">
    <div className="w-1/3 h-1/3">
    <a href="/binding">
      <img src="/portfolio-covers/bindingcover.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121] hover:underline">BINDING</p>
    </a>
    </div>
    <div className="w-1/3 h-1/3">
    <a href="/brilliancesatprep">
      <img src="/portfolio-covers/brilliancecover.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121 hover:underline">BRILLIANCE SAT PREP</p>
    </a>
    </div>
    <div className="w-1/3 h-1/3">
    <a href="/hertechpath">
      <img src="/portfolio-covers/hertechpathcover.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121] hover:underline">HERTECHPATH</p>
      </a>
    </div>
  </section>

  <section className="flex flex-row w-screen px-[5vw] mb-[1vh] gap-[1vw]">
    <div className="w-1/3 h-1/3">
    <a href="/init-explore-pins">
      <img src="/portfolio-covers/initpinscover.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121] hover:underline">INIT EXPLORE PINS</p>
    </a>
    </div>
    <div className="w-1/3 h-1/3">
    <a href="/agilis">
      <img src="/portfolio-covers/agiliscover1.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121] hover:underline">AGILIS</p>
    </a>
    </div>
    <div className="w-1/3 h-1/3 flex flex-col">
    <a href="/lively">
      <img src="/portfolio-covers/livelycover.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121] hover:underline">LIVELY YOUTH</p>
      </a>
    </div>
  </section>

  <section className="flex flex-row w-screen px-[5vw] mb-[1vh] gap-[1vw]">
    <div className="w-1/3 h-1/3">
    <a href="/fearlessOnIce">
      <img src="/portfolio-covers/fearlessOnIceCover.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121] hover:underline">FEARLESS ON ICE</p>
    </a>
    </div>
    <div className="w-1/3 h-1/3">
    <a href="/eden">
      <img src="/portfolio-covers/edencover.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121] hover:underline">EDEN</p>
    </a>
    </div>
    <div className="w-1/3 h-1/3 flex flex-col">
   
      <img src="/portfolio-covers/metaquestcover.png" className="w-full h-full object-cover border-2 border-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105" />
      <p className="text-lg mt-3 text-[#212121]">COMING SOON..</p>

    </div>
  </section>
 
</div>
    <footer className="pointer-events-auto sticky bottom-0 z-[-1]">
      <Footer className="pointer-events-auto"/>
    </footer>

    </main>
)
}