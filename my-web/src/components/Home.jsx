'use client';
import useMousePosition from '../utils/useMousePosition';
import styles from './Home.module.css'; // Adjust the path and filename
import { motion } from 'framer-motion';
import { useState } from 'react';

function Home() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);  // Fixed here
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          maskPosition: `${x - size / 2}px ${y - size / 2}px`, // For standard browsers
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`, // For webkit-based browsers (Safari)
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut' }} // Optional smooth transition
      >
        <h1 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          Emely Barcenas
        </h1>
      </motion.div>
      <motion.div className={styles.body}>
        <h1>Emely Barcenas</h1>
      </motion.div>
    </main>
  );
}

export default Home;
