import { keyframes } from "styled-components";

export const bounce = keyframes`
  0% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(5%);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  66% { 
    opacity: 0; 
  }
  100% {
    opacity: 1;
  }
`;
