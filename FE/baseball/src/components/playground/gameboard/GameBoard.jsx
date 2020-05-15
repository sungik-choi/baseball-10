import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameCanvas from "./GameCanvas";
import Character from "./Character";
import Button from "style/Button";
import { scale } from "style/Animation";
import { useBaseballDispatch } from "context/context";
import { useBaseballState } from "context/context";
import { playGroundFetch } from "components/useFetch";
import { STR } from "constants/constants";
import _ from "../../../util/util";

import demo_data from "store/demoPlayer.js";

console.log(demo_data[0]);

const GameBoard = () => {
  const { playGround } = useBaseballState();
  const dispatch = useBaseballDispatch();

  const { defenseTeam, attackTeam, plates } = playGround;
  const { baseFirst, baseSecond, baseThird } = plates;

  const [isRun, setIsRun] = useState(true);
  const [isHit, setIsHit] = useState(false);
  const [isGetScore, setIsGetScore] = useState(false);
  const [isPitchBtnAppear, setIsPitchBtnAppear] = useState(true);
  const [buttonAvailable, setButtonAvailable] = useState(true);

  const [demo_currentPitch, setDemo_currentPitch] = useState(0);

  const ANIMATION_DELAY = 2;

  const requsetAPI = process.env.REACT_APP_API_URL + ``;

  const __clickHandler = () => {
    playGroundFetch(requsetAPI, "PLAYGROUND", dispatch).then((defense) => {
      if (_.transformBooleanType(defense)) {
        return;
      } else {
        _.judgeDefenseTeam(dispatch);
      }
    });
  };

  const demo_pitch = () => {
    dispatch({ type: "DEMO_PLAYGROUND", data: demo_data[demo_currentPitch] });
    clickHandler();
    setDemo_currentPitch(demo_currentPitch + 1);
  };

  const clickHandler = () => {
    if (isHit) {
      setIsRun(true);
      console.log("get score !");
    }
    setButtonAvailable(false);
    setIsPitchBtnAppear(false);
    setTimeout(() => {
      setButtonAvailable(true);
    }, ANIMATION_DELAY * 1500);
  };

  const platesType = [STR.PITCHER, STR.BATTER, STR.FIRST, STR.SECOND, STR.THIRD, STR.HOME];

  const isExist = (type) => {
    switch (type) {
      case STR.BATTER:
        return true;
      case STR.FIRST:
        return +baseFirst;
      case STR.SECOND:
        return +baseSecond;
      case STR.THIRD:
        return +baseThird;
      case STR.HOME:
        return isGetScore;
      default:
        return false;
    }
  };

  const characters = platesType.map((type, index) => {
    if (type === STR.PITCHER) return <Character key={index} team={defenseTeam.location} plate={STR.PITCHER} isRun={false} aniDelay={ANIMATION_DELAY} />;
    if (isExist(type)) return <Character key={index} team={attackTeam.location} plate={type} isRun={isRun} aniDelay={ANIMATION_DELAY} />;
  });

  useEffect(() => {
    if (isRun) setTimeout(() => setIsRun(false), ANIMATION_DELAY * 1000);
  }, [isRun]);

  useEffect(() => {
    // 원래 로직의 경우 버튼을 누르고, 해당 데이터가 true면 달리기 애니메이션 출력
  }, [isHit]);

  return (
    <GameBoardWrap>
      <GameCanvas />
      {characters}
      {_.transformBooleanType(playGround.defense) &&
        (buttonAvailable ? (
          <PitchButton appear={isPitchBtnAppear} onClick={demo_pitch}>
            {PITCH_TEXT}
          </PitchButton>
        ) : (
          <PitchButton white>{LOADING_TEXT}</PitchButton>
        ))}
    </GameBoardWrap>
  );
};

const PITCH_TEXT = "PITCH!";
const LOADING_TEXT = "게임 진행중...";

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
  animation: ${scale({ from: 0, to: 1 })} 0.5s cubic-bezier(0.68, 0.04, 0.05, 1.21) both !important;
`;

export default GameBoard;
