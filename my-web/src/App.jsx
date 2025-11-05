import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Navigation from './components/Navigation-Bar/Navigation.jsx';
import ThreeScene from './components/ThreeScene.jsx';
import DesignerText from './components/SubTitle.jsx';
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
import PortfolioTemplate from './components/PortfolioTemplate.jsx';
import PlateItForward from './components/plateItForward.jsx';
import GoRedesign from './components/GoRedesign.jsx';
import SubTitle from './components/SubTitle.jsx';

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
  <SubTitle />
</div>   

{/* About section starts here, sticky/scrolling effect applies here */}
<div className='about containerSec'>
<RecentProjects />
<About />
</div>
 
</div>



    <div id="contact" className='containerSec'>
      <ScribbleBg className="scribbleBg"/>
      </div>

    <div className='bg-black flex flex-row'>
      <ThreeScene modelname="scene"/>
      <ThreeScene modelname="scene" />
    </div>
   
   
</div>

<footer className='sticky bottom-0 z-0 w-100 pointer-events-auto'>
<Footer className="footer"/>
</footer>

</main>

        } />
        
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-page" element={<ContactPage />}/>
        <Route path="/portfolio/plateItForward" element={<PlateItForward />}/>
        <Route path="/portfolio/goTransitRedesign" element={<GoRedesign />}/>
        <Route path="/portfolio/:projectID" element={<PortfolioTemplate />} />
      </Routes>

     
  
    </>
  )
}

export default App
