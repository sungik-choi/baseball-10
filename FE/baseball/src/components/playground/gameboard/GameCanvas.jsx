import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const GameCanvas = () => {
  const canvas = useRef(null);

  const fixDpi = (target) => {
    const dpi = window.devicePixelRatio;
    const style = {
      height() {
        return +getComputedStyle(target)
          .getPropertyValue("height")
          .slice(0, -2);
      },
      width() {
        return +getComputedStyle(target)
          .getPropertyValue("width")
          .slice(0, -2);
      },
    };
    target.setAttribute("width", style.width() * dpi);
    target.setAttribute("height", style.height() * dpi);
  };

  useEffect(() => {
    const canvasElem = canvas.current; 
    const context = canvasElem.getContext("2d");
    const TILE_COUNT = 10;
    fixDpi(canvasElem);
    for (let index = 0; index < TILE_COUNT; index++) {
      if (index % 2 === 0) context.fillStyle = "#71A01C";
      else context.fillStyle = "#27850E";
      context.fillRect(canvasElem.width * 0.1 * index, 0, canvasElem.width * 0.1, canvas.current.height);
    }
  });

  return (
    <>
      <Canvas ref={canvas} />
    </>
  );
};

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  border-radius: calc(var(--border-radius) - var(--border-size));
`;

export default GameCanvas;