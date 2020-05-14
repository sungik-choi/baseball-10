import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameCanvas from "./GameCanvas";
import Character from "./Character";
import Button from "style/Button";
import { scale } from "style/Animation";
import { useBaseballState } from "context/context";
import _ from "../../../util/util";

const GameBoard = ({ userTeam, plates }) => {
  let { baseFirst, baseSecond, baseThird } = plates;
  const { playGround } = useBaseballState();
  const [isRun, setIsRun] = useState(true);
  const [isPitchBtnAppear, setIsPitchBtnAppear] = useState(true);
  const [buttonAvailable, setButtonAvailable] = useState(true);
  const clickHandler = () => {
    setButtonAvailable(false);
    setIsRun(!isRun);
    setIsPitchBtnAppear(false);
    setTimeout(() => {
      setButtonAvailable(true);
    }, 3000);
  };

  const opposingTeam = userTeam === "HOME" ? "HOME" : "AWAY";
  const ENTER_DELAY = 2;

  useEffect(() => {
    setTimeout(() => setIsRun(false), ENTER_DELAY * 1000);
  }, [baseFirst, baseSecond, baseThird]);

  return (
    <GameBoardWrap>
      <GameCanvas />
      <Character team={opposingTeam} isExist={baseFirst} isRun={isRun} enterDelay={ENTER_DELAY} />
      <Character team={userTeam} base={"first"} isExist={baseFirst} isRun={isRun} enterDelay={ENTER_DELAY} />
      {_.transformBooleanType(playGround.defense) && buttonAvailable ? (
        <PitchButton appear={isPitchBtnAppear} onClick={clickHandler}>
          {PITCH_TEXT}
        </PitchButton>
      ) : (
        <PitchButton white>{LOADING_TEXT}</PitchButton>
      )}
    </GameBoardWrap>
  );
};

const PITCH_TEXT = "PITCH!";
const LOADING_TEXT = "GOGOGO !!!";

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
  /* display: ${(props) => (props.appear ? "block" : "none")}; */
  position: absolute;
  width: 15rem;
  left: 1.5rem;
  bottom: 1.5rem;
  animation: ${scale({ from: 0, to: 1 })} 0.5s cubic-bezier(0.68, 0.04, 0.05, 1.21) both !important;
`;

export default GameBoard;
