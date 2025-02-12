import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Navigation from './components/Navigation-Bar/Navigation.jsx';
import ThreeScene from './components/ThreeScene.jsx';
import DesignerText from './components/DesignerText.jsx';
import downArrowIcon from "./assets/down-arrow-icon.svg";
import RecentProjects from './components/RecentProjects.jsx';
import About from './components/About.jsx';
import AboutPage from './components/AboutPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio.jsx';
import ContactPage from './components/Contact/ContactPage.jsx';
import ScribbleBg from './components/Scribble-Animation/ScribbleBg.jsx';
import Footer from './components/Footer.jsx'
import Carousel from './components/Carousel.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <Routes>
        <Route path="/" element={

<main className='mainPage'>

<div className="everything">
     <div id="navigation"> 
        <Navigation />
    </div>

<div className='firstTwoContainer'>

    <div className="app-container containerSec">
      <Home />
      <DesignerText />
     <a href="#about">
      <button>
        <img src={downArrowIcon} alt="Down arrow" className='down-arrow' />
        </button>
        </a>
        <div>
          <img src="/circle-lines.svg" className='circleLinesBott'/>
        </div>
        <div>
          <img src="/circle-lines.svg" className='circleLinesTop'/>
        </div>
    </div>


    <div className='about containerSec' id="about">
    <About />
    </div>

  </div>


  <RecentProjects className="projRectangles"/>


    <div id="contact" className='containerSec'>
      <ScribbleBg className="scribbleBg"/>
      </div>
 

    <div className='bg-black flex flex-row'>
      <ThreeScene modelname="scene"/>
      <ThreeScene modelname="scene" />
    </div>
   
   
</div>

<footer className='sticky bottom-0 z-[-10] w-100 pointer-events-auto'>
<Footer className="footer"/>
</footer>

</main>

        } />
        
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-page" element={<ContactPage />}/>
      </Routes>
    
     
  
    </>
  )
}

export default App
