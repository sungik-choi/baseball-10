import React, { useEffect }  from 'react';
import styled from "styled-components";
import GameCanvas from "./GameCanvas"
import Character from "./Character";
import Button from "style/Button";
import { scaleUp } from "style/Animation"; 

const GameBoard = ({ plates }) => {
  const {baseFirst, baseSecond, baseThird} = plates;
  console.log(baseFirst, baseSecond, baseThird);

  useEffect(() => {

  }, [baseFirst, baseSecond, baseThird])

  return (
    <GameBoardWrap>
      <GameCanvas />
      <Character plates={plates}/>
      <PitchButton>{PITCH_TEXT}</PitchButton>
    </GameBoardWrap>
  );
};

const PITCH_TEXT = "PITCH!"

const GameBoardWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--border-radius) - var(--border-size));
  background-color: var(--green);
`;

const PitchButton = styled(Button)`
  position: absolute;
  width: 15rem;
  left: 1.5rem;
  bottom: 1.5rem;
  animation: ${scaleUp} 0.5s cubic-bezier(0.68, 0.04, 0.05, 1.21) !important;
`;

export default GameBoard;