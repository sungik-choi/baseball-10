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
    const ctx = canvasElem.getContext("2d");
    const TILE_COUNT = 10;
    fixDpi(canvasElem);

    for (let index = 0; index < TILE_COUNT; index++) {
      if (index % 2 === 0) ctx.fillStyle = "#71A01C";
      else ctx.fillStyle = "#27850E";
      ctx.fillRect(canvasElem.width * (TILE_COUNT / 100) * index, 0, canvasElem.width * (TILE_COUNT / 100), canvas.current.height);
    }

    const COURT_SIZE = 450;
    const BASE_SIZE = 80;
    const centerX = canvasElem.width * 0.5;
    const centerY = canvasElem.height * 0.5;
    const offsetY = 100;

    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 8;

    // outer rect
    // ctx.beginPath();
    // ctx.moveTo(centerX, centerY + 420);
    // ctx.lineTo(0, -30);
    // ctx.lineTo(canvasElem.width, -30);
    // ctx.closePath();
    // ctx.stroke();

    // Inner rect
    ctx.save();
    ctx.translate(centerX, centerY + offsetY);
    ctx.rotate((45 * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);
    ctx.strokeRect(centerX - COURT_SIZE * 0.5, centerY - COURT_SIZE * 0.5, COURT_SIZE, COURT_SIZE);

    // center ellipse
    ctx.fillStyle = "#E3B189";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // home
    ctx.restore();
    ctx.fillStyle = "#fff";
    ctx.save();
    ctx.translate(centerX, centerY + COURT_SIZE * 0.5 + BASE_SIZE + offsetY);
    ctx.translate(-centerX, -centerY);
    ctx.fillRect(centerX - BASE_SIZE * 0.5, centerY - BASE_SIZE * 0.5, BASE_SIZE, BASE_SIZE);

    // first inning
    ctx.restore();
    ctx.save();
    ctx.translate(centerX + COURT_SIZE * 0.5 + BASE_SIZE, centerY + offsetY);
    ctx.rotate((45 * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);
    ctx.fillRect(centerX - BASE_SIZE * 0.5, centerY - BASE_SIZE * 0.5, BASE_SIZE, BASE_SIZE);

    // second inning
    ctx.restore();
    ctx.save();
    ctx.translate(centerX, centerY - COURT_SIZE * 0.5 - BASE_SIZE + offsetY);
    ctx.rotate((45 * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);
    ctx.fillRect(centerX - BASE_SIZE * 0.5, centerY - BASE_SIZE * 0.5, BASE_SIZE, BASE_SIZE);

    // third inning
    ctx.restore();
    ctx.save();
    ctx.translate(centerX - COURT_SIZE * 0.5 - BASE_SIZE, centerY + offsetY);
    ctx.rotate((45 * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);
    ctx.fillRect(centerX - BASE_SIZE * 0.5, centerY - BASE_SIZE * 0.5, BASE_SIZE, BASE_SIZE);
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
