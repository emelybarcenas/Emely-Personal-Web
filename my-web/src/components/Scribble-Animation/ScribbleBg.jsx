import React from 'react';
import ContactPage from "../Contact/ContactPage";
import Scene from "../Scribble-Animation/Scene";
import Navigation from '../Navigation-Bar/Navigation';
import Text from "../Scribble-Animation/Text"
import Contact from '../Contact/Contact';
export default function ScribbleBg() {
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
