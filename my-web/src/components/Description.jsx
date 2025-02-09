import { useState, useEffect } from "react";
import styles from './Description.module.css'
function Description({ x, y, size, isHovered, onMouseEnter, onMouseLeave,className}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Customize breakpoint for smaller screens
    };
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <p
      className={styles.description}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        maskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
        
      }}
    >
      {isSmallScreen ? (
         <>
   <span>Driven by a passion for tech</span>
   <span>and design, I’m a Computer</span>
   <span>Science student who </span>
   <span>thrives on coding</span>
   <span>smart solutions.</span>
        </>
      ) : (
        <>
     <span>Driven by a passion for tech and design,</span>
          <span>I’m a Computer Science student who</span>
          <span>thrives on coding innovative solutions</span>
          <span>and creating captivating designs.</span>
        </>
      )}
    </p>
  );
}

export default Description;
