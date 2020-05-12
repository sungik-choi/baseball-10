import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameCanvas from "./GameCanvas";
import Character from "./Character";
import Button from "style/Button";
import { scale } from "style/Animation";

const GameBoard = ({ plates }) => {
  let { baseFirst, baseSecond, baseThird } = plates;
  const [isRun, setIsRun] = useState(true);
  const [isPitchBtnAppear, setIsPitchBtnAppear] = useState(true);
  const clickHandler = () => {
    setIsRun(!isRun);
    setIsPitchBtnAppear(false);
    baseFirst++;
    console.log(+baseFirst);
  };

  const ENTER_DELAY = 2;

  useEffect(() => {
    console.log(baseFirst, baseSecond, baseThird);
    setTimeout(() => setIsRun(false), ENTER_DELAY * 1000);
  }, [baseFirst, baseSecond, baseThird]);

  return (
    <GameBoardWrap>
      <GameCanvas />
      {+baseFirst === 0 && <Character isRun={isRun} enterDelay={ENTER_DELAY} base={baseFirst} />}
      {+baseFirst > 0 && <Character isRun={isRun} enterDelay={ENTER_DELAY} base={baseFirst} />}
      {+baseSecond > 0 && <Character isRun={isRun} enterDelay={ENTER_DELAY} base={baseSecond} />}
      {+baseThird > 0 && <Character isRun={isRun} enterDelay={ENTER_DELAY} base={baseThird} />}
      <PitchButton appear={isPitchBtnAppear} onClick={clickHandler}>
        {PITCH_TEXT}
      </PitchButton>
    </GameBoardWrap>
  );
};

const PITCH_TEXT = "PITCH!";

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
  /* display: ${props => props.appear ? "block" : "none"}; */
  position: absolute;
  width: 15rem;
  left: 1.5rem;
  bottom: 1.5rem;
  animation: ${scale({ from: 0, to: 1 })} 0.5s cubic-bezier(0.68, 0.04, 0.05, 1.21) both !important;
`;

export default GameBoard;
