import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 
import Home from "./components/Home/Home.jsx";
import Navigation from './components/Navigation-Bar/Navigation.jsx';
import ThreeScene from './components/ThreeScene.jsx';
import DesignerText from './components/SubTitle.jsx';
import downArrowIcon from "./assets/down-arrow-icon.svg";
import RecentProjects from './components/RecentProjects.jsx';
import AboutPage from './components/AboutPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio.jsx';
import ScribbleBg from './components/Scribble-Animation/ScribbleBg.jsx';
import Footer from './components/Footer.jsx'
import Carousel from './components/Carousel.jsx';
import PortfolioTemplate from './components/PortfolioTemplate.jsx';
import PlateItForward from './components/plateItForward.jsx';
import GoRedesign from './components/GoRedesign.jsx';
import IBMDeveloperPortal from './components/IBMDeveloperPortal.jsx';
import CleanSlate from './components/CleanSlate.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    const revealSentinel = document.querySelector('.footerRevealSentinel')
    if (!revealSentinel) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      const viewportBottom = entry.rootBounds?.bottom ?? window.innerHeight
      setFooterVisible(entry.boundingClientRect.top <= viewportBottom)
    })

    observer.observe(revealSentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>

  <Routes>
        <Route path="/" element={

      <>
<main className='mainPage'>
  <div id="navigation">
    <Navigation />
  </div>

  <section className="homeLayer">
    <Home />
  </section>

  <div className="middleLayer">
    <section id="work" className="featuredLayer scroll-mt-24">
      <RecentProjects />
    </section>

    <section className="aboutLayer min-h-[40vh] flex items-center justify-center">
      <h2 className="text-white text-[8vh] font-bold">WHAT I'M UP TO</h2>
    </section>

    <section className="sceneLayer bg-black flex flex-row">
      <ThreeScene modelname="scene"/>
      <ThreeScene modelname="scene" />
    </section>

    <section id="contact" className="contactLayer">
      <ScribbleBg className="scribbleBg"/>
    </section>

    <div className="footerRevealSentinel" aria-hidden="true" />
  </div>

 </main>

<footer className={`footerLayer pointer-events-auto ${footerVisible ? 'footerVisible' : 'footerHidden'}`}>
<Footer className="footer"/>
</footer>

</>

        } />
        
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/plateItForward" element={<PlateItForward />}/>
        <Route path="/portfolio/goTransitRedesign" element={<GoRedesign />}/>
        <Route path="/portfolio/ibmDeveloperPortal" element={<IBMDeveloperPortal />}/>
        <Route path="/portfolio/cleanSlate" element={<CleanSlate />}/>
        <Route path="/portfolio/:projectID" element={<PortfolioTemplate />} />
      </Routes>

     
  
    </>
  )
}

export default App
