import React from 'react';
import styled, { keyframes } from "styled-components";
import Character from "./Character";

const GameBoard = () => {
  return (
    <GameBoardWrap>
      <Character />
    </GameBoardWrap>
  );
};

const GameBoardWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--border-radius) - var(--border-size));
  background-color: black;
`;

export default GameBoard;