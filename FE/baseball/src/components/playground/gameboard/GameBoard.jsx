import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameCanvas from "./GameCanvas";
import Character from "./Character";
import Button from "style/Button";
import { scale } from "style/Animation";
import { useBaseballDispatch } from "context/context";

const GameBoard = ({ defenseTeam, attackTeam, userTeam, plates }) => {
  let { baseFirst, baseSecond, baseThird } = plates;
  const dispatch = useBaseballDispatch();
  const [isRun, setIsRun] = useState(false);
  const [isGetScore, setIsGetScore] = useState(true);
  const [isPitchBtnAppear, setIsPitchBtnAppear] = useState(true);

  const clickHandler = () => {
    // setIsRun(!isRun);
    // dispatch({ type: "TEST" });
    if (isGetScore) {
      setIsRun(true);
      console.log("get score !");
    }
    setIsPitchBtnAppear(false);
  };

  const ANIMATION_DELAY = 2;
  const platesType = ["PITCHER", "HOME", "FIRST", "SECOND", "THIRD"];

  const isExist = (type) => {
    switch (type) {
      case "HOME":
        return true;
      case "FIRST":
        return +baseFirst;
      case "SECOND":
        return +baseSecond;
      case "THIRD":
        return +baseThird;
      default:
        return false;
    }
  };

  const characters = platesType.map((type, index) => {
    if (type === "PITCHER") return <Character key={index} team={defenseTeam.location} plate={"PITCHER"} isRun={false} aniDelay={ANIMATION_DELAY} />;
    if (isExist(type)) return <Character key={index} team={attackTeam.location} plate={type} isRun={isRun} aniDelay={ANIMATION_DELAY} />;
  });

  useEffect(() => {
    console.log(baseFirst, baseSecond, baseThird);
    console.log("userTeam : ", userTeam);
    if (isRun) setTimeout(() => setIsRun(false), ANIMATION_DELAY * 1000);
  }, [isRun, baseFirst, baseSecond, baseThird]);

  return (
    <GameBoardWrap>
      <GameCanvas />
      {characters}
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
  /* display: ${(props) => (props.appear ? "block" : "none")}; */
  position: absolute;
  width: 15rem;
  left: 1.5rem;
  bottom: 1.5rem;
  animation: ${scale({ from: 0, to: 1 })} 0.5s cubic-bezier(0.68, 0.04, 0.05, 1.21) both !important;
`;

export default GameBoard;
