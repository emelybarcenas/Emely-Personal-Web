import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </>
  )
}

export default App
