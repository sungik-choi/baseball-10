import React from "react";
import styled, { keyframes, css } from "styled-components";
import { fadeIn } from "style/Animation";
import idleHome from "assets/idle_home.png";
import idleAway from "assets/idle_away.png";
import runHome from "assets/run_home.png";
import runAway from "assets/run_away.png";
import { STR } from "constants/constants";

const Character = ({ team, plate, isRun, aniDelay }) => {
  const idle = team === "HOME" ? idleHome : idleAway;
  const run = team === "HOME" ? runHome : runAway;

  return (
    <CharacterWrap isRun={isRun} team={team} plate={plate} delay={aniDelay}>
      <CharacterDiv idleAni={idle} runAni={run} isRun={isRun}></CharacterDiv>
      <ShadowDiv></ShadowDiv>
    </CharacterWrap>
  );
};

const ANIMATION_SPEED = 0.5;
const SPRITE_NUM = 11;
const HOME_OFFSET_Y = 30;

const getCharacterPosition = (plate) => {
  switch (plate) {
    case STR.PITCHER:
      return {
        x: 50,
        y: 54,
      };
    case STR.BATTER:
      return {
        x: 50,
        y: 82,
      };
    case STR.FIRST:
      return {
        x: 64,
        y: 54,
      };
    case STR.SECOND:
      return {
        x: 50,
        y: 27,
      };
    case STR.THIRD:
      return {
        x: 36,
        y: 54,
      };
    case STR.HOME:
      return {
        x: 50,
        y: 82 + HOME_OFFSET_Y,
      };
    default:
      break;
  }
};

const move = (type) => {
  switch (type) {
    case STR.BATTER:
      return keyframes`
        0% {
          left: ${getCharacterPosition(type).x}%;
          top: ${getCharacterPosition(type).y + HOME_OFFSET_Y}%;
        }
        100% {
          left: ${getCharacterPosition(type).x}%;
          top: ${getCharacterPosition(type).y}%;
        }`;
    case STR.FIRST:
      return keyframes`
        0% {
          left: ${getCharacterPosition(STR.BATTER).x}%;
          top: ${getCharacterPosition(STR.BATTER).y}%;
        }
        100% {
          left: ${getCharacterPosition(type).x}%;
          top: ${getCharacterPosition(type).y}%;
        }`;
    case STR.SECOND:
      return keyframes`
        0% {
          left: ${getCharacterPosition(STR.FIRST).x}%;
          top: ${getCharacterPosition(STR.FIRST).y}%;
        }
        100% {
          left: ${getCharacterPosition(type).x}%;
          top: ${getCharacterPosition(type).y}%;
        }`;
    case STR.THIRD:
      return keyframes`
        0% {
          left: ${getCharacterPosition(STR.SECOND).x}%;
          top: ${getCharacterPosition(STR.SECOND).y}%;
        }
        100% {
          left: ${getCharacterPosition(type).x}%;
          top: ${getCharacterPosition(type).y}%;
        }`;
    case STR.HOME:
      return keyframes`
        0% {
          left: ${getCharacterPosition(STR.THIRD).x}%;
          top: ${getCharacterPosition(STR.THIRD).y}%;
        }

        50% {
          left: ${getCharacterPosition(STR.BATTER).x}%;
          top: ${getCharacterPosition(STR.BATTER).y}%;
        }
        100% {
          left: ${getCharacterPosition(STR.BATTER).x}%;
          top: ${getCharacterPosition(STR.BATTER).y + HOME_OFFSET_Y}%;
        }`;
    default:
      break;
  }
};

const play = keyframes`
   100% { background-position: calc(var(--sprite-size) * -${SPRITE_NUM}); }
`;

const CharacterDiv = styled.div`
  height: 100%;
  background: ${(props) => (props.isRun ? `url(${props.runAni})` : `url(${props.idleAni})`)} left center;
  background-size: cover;
`;

const ShadowDiv = styled.div`
  position: relative;
  z-index: -10;
  bottom: 0;
  width: 50%;
  height: 0.8rem;
  transform: translate(50%, -40%);
  background-color: var(--black);
  opacity: 0.2;
  border-radius: 50%;
`;

const CharacterWrap = styled.div`
  position: absolute;
  left: ${(props) => getCharacterPosition(props.plate).x}%;
  top: ${(props) => getCharacterPosition(props.plate).y}%;
  transform: translate(-50%, -50%);
  width: var(--sprite-size);
  height: var(--sprite-size);
  animation: ${(props) =>
    props.isRun
      ? css`
          ${move(props.plate)} ${props.delay}s linear
        `
      : "none"};

  ${ShadowDiv} {
    animation: ${fadeIn({ end: 0.2, changePoint: 30 })} 1s;
  }
  ${CharacterDiv} {
    animation: ${play} ${ANIMATION_SPEED}s steps(${SPRITE_NUM}) infinite;
  }
`;

export default Character;
