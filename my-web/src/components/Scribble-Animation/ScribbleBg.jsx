import React from 'react';
import ContactPage from "../Contact/ContactPage";
import Scene from "../Scribble-Animation/Scene";
import Navigation from '../Navigation-Bar/Navigation';
import Text from "../Scribble-Animation/Text"
import Contact from '../Contact/Contact';
import Footer from '../Footer';
import {useState, useEffect} from 'react';

export default function ScribbleBg() {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // Adjust 768px for your desired breakpoint
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div>
        <main className="flex flex-col w-full h-auto justify-center items-center">
          <h2 className='pt-[10vh] w-full flex flex-col justify-center items-center leading-none font-bold text-[15vw] bg-white'>LET'S GET
          <div className='flex w-full items-center justify-center'>
           IN T<img src="/smiley_1.svg" className='w-[11vw]'/>UCH
          </div>
            </h2>
          <div className=" w-screen h-auto pb-10 justify-center bg-white">
            <Contact className="" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
    <Navigation />
    <main className="flex w-full h-screen items-center relative">
      <Scene className="relative w-full h-screen top-0 left-0 z-0"/>
      <img src="/intouch.svg" className='absolute pointer-events-none w-[80vw] translate-x-[3vw]'/>
      <div className="absolute translate-x-[55vw] w-[40vw]">
      <Contact className="absolute"/>
      </div>
    </main>

    </div>
  );
}
