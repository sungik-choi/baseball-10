import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "style/Animation";
import idleHome from "assets/idle_home.png";
import idleAway from "assets/idle_away.png";
import runHome from "assets/run_home.png";
import runAway from "assets/run_away.png";

const Character = ({ isRun, enterDelay, plates }) => {
  return (
    <CharacterWrap delay={enterDelay}>
      <CharacterDiv isRun={isRun}></CharacterDiv>
      <ShadowDiv></ShadowDiv>
    </CharacterWrap>
  );
};

const ANIMATION_SPEED = 0.5;
const SPRITE_NUM = 11;
const CHARACTER_X = 50;
const CHARACTER_Y = 180;

const play = keyframes`
   100% { background-position: calc(var(--sprite-size) * -${SPRITE_NUM}); }
`;

const enter = keyframes`
  0% {
    transform: translate(-50%, 500%);
  }

  100% {
    transform: translate(-50%, ${CHARACTER_Y}%);
  }
`;

const CharacterDiv = styled.div`
  height: 100%;
  background: ${(props) => (props.isRun ? `url(${runHome})` : `url(${idleHome})`)} left center;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, ${CHARACTER_Y}%);
  width: var(--sprite-size);
  height: var(--sprite-size);
  animation: ${enter} ${(props) => props.delay || 2}s linear !important;

  ${ShadowDiv} {
    animation: ${fadeIn({ end: 0.2, changePoint: 30 })} 1s;
  }
  ${CharacterDiv} {
    animation: ${play} ${ANIMATION_SPEED}s steps(${SPRITE_NUM}) infinite;
  }
`;

export default Character;
