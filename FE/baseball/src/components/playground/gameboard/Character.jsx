import React from 'react';
import styled, {keyframes} from "styled-components";
import idle from "assets/idle.png";
import run from "assets/run.png";

const Character = () => {
  return (
    <CharacterDiv>
    </CharacterDiv>
  );
};

const ANIMATION_SPEED = 0.5;
const SPRITE_NUM = 11;

const play = keyframes`
   100% { background-position: calc(var(--sprite-size) * -${SPRITE_NUM}); }
`;

const CharacterDiv = styled.div`
  width: var(--sprite-size);
  height: var(--sprite-size);
  background: url(${run}) left center;
  background-size: cover;
  animation: ${play} ${ANIMATION_SPEED}s steps(${SPRITE_NUM}) infinite;
`;

export default Character;