import styles from './Description.module.css'
function Description({ x, y, size, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={styles.description}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        maskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
    >
      <p>
        I design human-centered experiences by blending UX, visual design, and engineering.
        I focus on creating clear, intuitive solutions that make products easier and more enjoyable to use.
      </p>
      <p>Books, music, and bullet-journaling keep my creative brain happy :)</p>
      <p>CS Student ✦ Prev @ IBM + Miami Heat</p>
    </div>
  );
}

export default Description;
