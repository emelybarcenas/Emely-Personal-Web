'use client'
import React, { useEffect, useRef } from 'react';
import useWindow from './useWindow';

export default function Scene() {
  const { dimension } = useWindow();
  const topCanvas = useRef();
  const bottomCanvas = useRef();

  useEffect(() => {
    if (dimension.width > 0) {
      init();
    }
  }, [dimension]);

  const init = () => {
    const bottomCtx = bottomCanvas.current.getContext("2d");
    const topCtx = topCanvas.current.getContext("2d");

    // Load the background image onto the bottom canvas
    const img = new Image();
    img.src = "background.png"; // Replace with your image path or URL
    img.onload = () => {
      bottomCtx.drawImage(img, 0, 0, dimension.width, dimension.height);
    };

    // Fill the top canvas with white
    topCtx.fillStyle = "white";
    topCtx.fillRect(0, 0, dimension.width, dimension.height);
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    draw(clientX, clientY, 50);
  };

  const draw = (x, y, radius) => {
    const ctx = topCanvas.current.getContext("2d");
    ctx.globalCompositeOperation = "destination-out"; // Erases parts of the white layer
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {dimension.width === 0 && <div className="absolute w-full h-full bg-black" />}
      
      {/* Bottom Canvas (Background Image) */}
      <canvas 
        ref={bottomCanvas} 
        height={dimension.height} 
        width={dimension.width} 
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Top Canvas (White Layer to Erase) */}
      <canvas 
        ref={topCanvas} 
        height={dimension.height} 
        width={dimension.width} 
        onMouseMove={manageMouseMove}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
