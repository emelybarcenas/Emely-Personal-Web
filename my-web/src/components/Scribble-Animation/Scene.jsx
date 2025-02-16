'use client'
import React, { useEffect, useRef } from 'react';
import useWindow from './useWindow';

export default function Scene() {
  const { dimension } = useWindow();
  const topCanvas = useRef();
  const bottomCanvas = useRef();

  const lastMouse = useRef({ x: null, y: null });
  const smoothMouse = useRef({ x: null, y: null });

  useEffect(() => {
    if (dimension.width > 0) {
      init();
    }
  }, [dimension]);

  const init = () => {
    const bottomCtx = bottomCanvas.current.getContext("2d");
    const topCtx = topCanvas.current.getContext("2d");

    const scale = window.devicePixelRatio || 1;

    bottomCanvas.current.width = dimension.width * scale;
    bottomCanvas.current.height = dimension.height * scale;
    bottomCtx.scale(scale, scale);

    topCanvas.current.width = dimension.width * scale;
    topCanvas.current.height = dimension.height * scale;
    topCtx.scale(scale, scale);

    const img = new Image();
    img.src = "background.svg"; 
    img.onload = () => {
      bottomCtx.clearRect(0, 0, dimension.width, dimension.height);
      bottomCtx.drawImage(img, 0, 0, Math.floor(dimension.width), Math.floor(dimension.height));
    };

    topCtx.fillStyle = "white";
    topCtx.fillRect(0, 0, dimension.width, dimension.height);
  };

  // Linear interpolation function
  const lerp = (start, end, t) => start + (end - start) * t;

  // Mouse movement handler with smoothing
  const manageMouseMove = (e) => {
    const canvasRect = topCanvas.current.getBoundingClientRect();
    const offsetX = e.clientX - canvasRect.left;
    const offsetY = e.clientY - canvasRect.top;

    if (lastMouse.current.x === null || lastMouse.current.y === null) {
      lastMouse.current = { x: offsetX, y: offsetY };
      smoothMouse.current = { x: offsetX, y: offsetY };
      return;
    }

    lastMouse.current = { x: offsetX, y: offsetY };

    // Animate smoother motion
    requestAnimationFrame(smoothDraw);
  };

  const smoothDraw = () => {
    const easingFactor = 0.15; // Adjust for smoother/faster movement
    smoothMouse.current.x = lerp(smoothMouse.current.x, lastMouse.current.x, easingFactor);
    smoothMouse.current.y = lerp(smoothMouse.current.y, lastMouse.current.y, easingFactor);

    draw(smoothMouse.current.x, smoothMouse.current.y, 70);

    // Continue updating until it's close to the target position
    if (
      Math.abs(smoothMouse.current.x - lastMouse.current.x) > 0.1 ||
      Math.abs(smoothMouse.current.y - lastMouse.current.y) > 0.1
    ) {
      requestAnimationFrame(smoothDraw);
    }
  };

  const draw = (x, y, radius) => {
    const ctx = topCanvas.current.getContext("2d");
    ctx.globalCompositeOperation = "destination-out"; 
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {dimension.width === 0 && <div className="absolute w-full h-full bg-black" />}
      
      <canvas 
        ref={bottomCanvas} 
        height={dimension.height} 
        width={dimension.width} 
        className="absolute top-0 left-0 w-full h-full"
      />

      <canvas 
        ref={topCanvas} 
        height={dimension.height} 
        width={dimension.width} 
        onMouseMove={manageMouseMove}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};
