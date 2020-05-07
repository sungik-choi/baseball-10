import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "style/Button";

const TeamCard = ({ name, image }) => {
  const teamName = name;
  return (
    <TeamButton color={"var(--white)"} shadow={"var(--gray-1)"}>
      <ImgWrap>
        <TeamImg src={image} />
      </ImgWrap>
      <span>{teamName}</span>
    </TeamButton>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const TeamButton = styled(Button)`
  animation: ${fadeIn} 1s;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 1.5rem 0;
  color: var(--black);
  font-size: var(--text-md);
  font-family: "Regular";
  &:hover {
    color: var(--orange);
  }
`;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--white);
`;

const TeamImg = styled.img`
  width: 95%;
`;

export default TeamCard;
