import { useState } from 'react';
import styles from './Home.module.css';

function HeroCopy({ className = '', onTextEnter, onTextLeave }) {
  return (
    <section className={`${styles.intro} ${className}`}>
      <h1
        className={styles.reveal}
        onPointerEnter={onTextEnter}
        onPointerLeave={onTextLeave}
      >
        EMELY BARCENAS
      </h1>
      <p
        className={`${styles.lead} ${styles.reveal}`}
        onPointerEnter={onTextEnter}
        onPointerLeave={onTextLeave}
      >
        Where thoughtful product design meets engineering
      </p>
      <div className={`${styles.details} ${styles.reveal}`}>
        <div>
          <strong onPointerEnter={onTextEnter} onPointerLeave={onTextLeave}>
            <em>CS Student • Prev @ IBM + Miami Heat</em>
          </strong>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isPointerInside, setIsPointerInside] = useState(false);
  const [isTextHovering, setIsTextHovering] = useState(false);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  };

  return (
    <main
      id="home"
      className={styles.main}
      onPointerEnter={() => setIsPointerInside(true)}
      onPointerLeave={() => setIsPointerInside(false)}
      onPointerMove={handlePointerMove}
    >
      <div className={`${styles.orbit} ${styles.orbitOne}`} aria-hidden="true" />
      <div className={`${styles.orbit} ${styles.orbitTwo}`} aria-hidden="true" />
      <div className={`${styles.orbit} ${styles.orbitThree}`} aria-hidden="true" />
      <div className={styles.content}>
        <HeroCopy
          onTextEnter={() => setIsTextHovering(true)}
          onTextLeave={() => setIsTextHovering(false)}
        />
      </div>
      <div
        className={`${styles.maskLayer} ${isTextHovering ? styles.maskLayerVisible : ''}`}
        style={{ '--pointer-x': `${pointer.x}px`, '--pointer-y': `${pointer.y}px` }}
        aria-hidden="true"
      >
        <div className={styles.content}>
          <HeroCopy className={styles.maskIntro} />
        </div>
      </div>
      <div
        className={`${styles.cursorRing} ${isPointerInside ? styles.cursorRingVisible : ''} ${isTextHovering ? styles.cursorRingLarge : ''}`}
        style={{ left: pointer.x, top: pointer.y }}
        aria-hidden="true"
      />
    </main>
  );
}

export default Home;