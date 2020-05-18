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

import { useHistory } from "react-router-dom";

import demo_data from "store/demoPlayer.js";

const GameBoard = () => {
  const { playGround } = useBaseballState();
  const dispatch = useBaseballDispatch();

  const history = useHistory();

  const { defenseTeam, attackTeam, plates, isHit, isGetScore } = playGround;
  const { baseFirst, baseSecond, baseThird } = plates;

  const [isRun, setIsRun] = useState(true);
  const [isPitchBtnAppear, setIsPitchBtnAppear] = useState(true);
  const [buttonAvailable, setButtonAvailable] = useState(true);

  const [demo_currentPitch, setDemo_currentPitch] = useState(0);

  const ANIMATION_DELAY = 11 - ``;

  const requsetAPI = process.env.REACT_APP_API_URL + ``;

  const clickHandler = () => {
    moveCharacter();
    playGroundFetch(requsetAPI, "PLAYGROUND", dispatch).then((defense) => {
      if (_.transformBooleanType(defense)) {
        return;
      } else {
        _.judgeDefenseTeam(dispatch);
      }
    });
  };

  const moveCharacter = () => {
    setButtonAvailable(false);
    setIsPitchBtnAppear(false);
    setTimeout(() => {
      setButtonAvailable(true);
    }, ANIMATION_DELAY * 1500);
  };

  // const demo_pitch = () => {
  //   dispatch({ type: "DEMO_PLAYGROUND", data: demo_data[demo_currentPitch] });
  //   clickHandler();
  //   if (playGround.gameOver) {
  //     history.push("/");
  //     return;
  //   }
  //   setDemo_currentPitch(demo_currentPitch + 1);
  //   setTimeout(() => {
  //     if (playGround.changeTeam) demo_pitch();
  //   }, 2000);
  // };

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
    if (isHit) setIsRun(true);
  }, [isHit, baseFirst, baseSecond, baseThird, isGetScore]);

  return (
    <GameBoardWrap>
      <GameCanvas />
      {characters}
      {_.transformBooleanType(playGround.defense) &&
        (buttonAvailable ? (
          <PitchButton appear={isPitchBtnAppear} onClick={clickHandler}>
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
