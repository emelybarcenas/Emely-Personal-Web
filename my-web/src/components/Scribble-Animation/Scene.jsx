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

    // Adjust for high-DPI screens using devicePixelRatio
    const scale = window.devicePixelRatio || 1;

    // Set canvas size
    bottomCanvas.current.width = dimension.width * scale;
    bottomCanvas.current.height = dimension.height * scale;
    bottomCtx.scale(scale, scale); // Scale context to match

    topCanvas.current.width = dimension.width * scale;
    topCanvas.current.height = dimension.height * scale;
    topCtx.scale(scale, scale); // Scale context to match

    // Load the background image onto the bottom canvas
    const img = new Image();
    img.src = "background.svg"; // Replace with your image path or URL
    img.onload = () => {
      // Clear any existing content and draw the image with correct scaling
      bottomCtx.clearRect(0, 0, dimension.width, dimension.height);
      bottomCtx.drawImage(img, 0, 0, Math.floor(dimension.width), Math.floor(dimension.height));
    };

    // Fill the top canvas with white
    topCtx.fillStyle = "white";
    topCtx.fillRect(0, 0, dimension.width, dimension.height);
  };

  const manageMouseMove = (e) => {
    // Adjust mouse coordinates based on the canvas position
    const canvasRect = topCanvas.current.getBoundingClientRect();
    const offsetX = e.clientX - canvasRect.left;
    const offsetY = e.clientY - canvasRect.top;
    
    // Draw only if within canvas bounds
    if (offsetX >= 0 && offsetX <= topCanvas.current.width && offsetY >= 0 && offsetY <= topCanvas.current.height) {
      draw(offsetX, offsetY, 50); // Adjust radius as needed
    }
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
