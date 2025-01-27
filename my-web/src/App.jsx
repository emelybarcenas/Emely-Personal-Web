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
import Description from './components/Description.jsx';


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
