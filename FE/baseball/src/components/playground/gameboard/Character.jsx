import React from 'react';
import styled, {keyframes} from "styled-components";
import { fadeIn } from "style/Animation";
import idle from "assets/idle_1.png";
import run from "assets/run.png";

const Character = () => {
  return (
    <CharacterWrap>
      <CharacterDiv></CharacterDiv>
      <ShadowDiv></ShadowDiv>
    </CharacterWrap>
  );
};

const ANIMATION_SPEED = 0.5;
const SPRITE_NUM = 11;

const play = keyframes`
   100% { background-position: calc(var(--sprite-size) * -${SPRITE_NUM}); }
`;

const CharacterDiv = styled.div`
  z-index: 10;
  height: 100%;
  background: url(${idle}) left center;
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
  bottom: 12.5rem;
  left: 50%;
  transform: translate(-50%, 220%);
  width: var(--sprite-size);
  height: var(--sprite-size);
  ${ShadowDiv} {
    animation: ${fadeIn({ end: 0.2, changePoint: 30 })} 1s;
  }
  ${CharacterDiv} {
    animation: ${play} ${ANIMATION_SPEED}s steps(${SPRITE_NUM}) infinite;
  }
`;

export default Character;