import React  from 'react';
import styled from "styled-components";
import GameCanvas from "./GameCanvas"
import Character from "./Character";

const GameBoard = ({ plates: {baseFirst, baseSecond, baseThird} }) => {
  console.log(baseFirst, baseSecond, baseThird);

  return (
    <GameBoardWrap>
      <GameCanvas />
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
  background-color: var(--green);
`;

export default GameBoard;