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



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div>
     <div id="navigation"> 
        <Navigation />
    </div>
    <div className="app-container">
      <Home />
      <DesignerText />
     <a href="#contact">
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
    <div id="recentProjects" className='recentProjects'>
      <RecentProjects className="projRectangles"/>
    </div>
 
    <div id="contact">
      <Contact />
      </div>
     
    <div className='bg-black flex flex-row'>
      <ThreeScene modelname="scene"/>
      <ThreeScene modelname="scene" />
    </div>
</div>
 
    </>
  )
}

export default App
