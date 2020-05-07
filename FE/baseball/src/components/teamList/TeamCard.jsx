import React from "react";
import styled from "styled-components";
import Button from "style/Button";

const TeamCard = ({ name, image, clickHandler }) => {
  const teamName = name;

  return (
    <li onClick={() => clickHandler(name, image)}>
      <TeamButton white>
        <ImgWrap>
          <TeamImg src={image} />
        </ImgWrap>
        <span>{teamName}</span>
      </TeamButton>
    </li>
  );
};

const TeamButton = styled(Button)`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 1.5rem 0;
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
