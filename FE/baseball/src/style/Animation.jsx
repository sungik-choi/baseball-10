import { keyframes } from "styled-components";

export const bounce = keyframes`
  0% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(5%);
  }
`;

export const slideIn = ({ from, to }) => keyframes`
  0% {
    transform: translate(${from});

  }
  100% {
    transform: translate(${to});
  }
`;

export const fadeIn = ({ end = 1, changePoint = 66 }) => keyframes`
  0% {
    opacity: 0;
  }

  ${changePoint}% { 
    opacity: 0; 
  }

  100% {
    opacity: ${end};
  }
`;

export const fadeOut = ({ start = 1, changePoint = 66 }) => keyframes`
  0% {
    opacity: ${start};
  }

  ${changePoint}% { 
    opacity: ${start}; 
  }

  100% {
    opacity: 0;
  }
`;

export const scaleUp = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`
