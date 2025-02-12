import React from 'react';
import Scene from "../Scribble-Animation/Scene";
import Navigation from '../Navigation-Bar/Navigation';
import Text from "../Scribble-Animation/Text"
import Contact from '../Contact/Contact';
import Footer from '../Footer';
import ScribbleBg from '../Scribble-Animation/ScribbleBg';

export default function ContactPage() {
  return (
    <div>
    <ScribbleBg />
    <div className='sticky bottom-0'>
    <Footer className="pointer-events-auto"/>
    </div>
    </div>
  );
}
