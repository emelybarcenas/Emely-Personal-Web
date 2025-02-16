import React, { useState, useEffect } from 'react';
import Scene from "../Scribble-Animation/Scene";
import Navigation from '../Navigation-Bar/Navigation';
import Text from "../Scribble-Animation/Text";
import Contact from '../Contact/Contact';
import Footer from '../Footer';
import ScribbleBg from '../Scribble-Animation/ScribbleBg';

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint at 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div> {/* Adds margin-top only for mobile */}
    <Navigation />
      <ScribbleBg />
      <div className='sticky bottom-0'>
        <Footer className="pointer-events-auto"/>
      </div>
    </div>
  );
}
