
'use client';
import useMousePosition from '../../utils/useMousePosition';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Description from '../Description';


function Home() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false); // Tracks if mouse is in the div
  const size = isHovered ? 300 : 40;


  return (
    <main
      id="home"
      className={`${styles.main} home`}
      onMouseEnter={() => setIsActive(true)} // Activate when mouse enters the div
      onMouseLeave={() => setIsActive(false)} // Deactivate when mouse leaves the div
    >
      {isActive && ( // Only render the mask effect when active
        <motion.div
          className={styles.mask}
          style={{
            maskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{
            type: 'tween',
            duration: 0.2,
            ease: 'backOut',
          }}
        >
          <h1
            onMouseEnter={() => {setIsHovered(true)}}
            onMouseLeave={() => setIsHovered(false)}
            className="font-bold"
            style={{
              maskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
          >
            <span>EMELY</span><span>BARCENAS</span>
            </h1>
            <div className={`${window.innerWidth < 540 ? "mt-[40vh]" : "mt-[25vh]"} ml-[10vw] mr-[5vw]`}>
       <Description isHovered={isHovered} x={x} y={y} size={size} onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}/>
        </div>
 
       
        </motion.div>
      )}


      <motion.div className={`${styles.body} font-bold`}>
       <h1><span>EMELY</span><span>BARCENAS</span>
       </h1>
       <div className={`${window.innerWidth < 540 ? "mt-[25vh]" : "mt-[25vh]"} ml-[10vw] mr-[5vw]`}>
       <Description isHovered={isHovered} x={x} y={y} size={size} onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}/>
        </div>
       


     
      </motion.div>
     
     
    </main>
  );
}


export default Home;


