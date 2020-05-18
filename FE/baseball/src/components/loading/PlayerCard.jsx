import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { slideIn } from "style/Animation";

const PlayerCard = ({ count, teamInfo: { name, logoUrl } }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (count === 0) setIsLoaded(true);
  }, [count]);

  return (
    <PlayerCardWrap isLoaded={isLoaded}>
      <ImgWrap>
        <TeamImg src={logoUrl} />
      </ImgWrap>
      <TeamNameSpan>{name}</TeamNameSpan>
    </PlayerCardWrap>
  );
};

const PlayerCardWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: var(--team-card-width);
  height: var(--team-card-width);
  padding: 1.5rem;
  background-color: var(--white);
  border: var(--border-size) solid var(--black);
  border-radius: var(--border-radius);
  animation: ${(props) =>
    props.isLoaded
      ? css`
          ${slideIn({ from: "0, 0", to: "0, 100vh" })} 0.7s cubic-bezier(.78,.03,.65,1.02) both
        `
      : css`
          ${slideIn({ from: "0, 100vh", to: "0, 0" })} 0.7s cubic-bezier(0.22, 0.62, 0, 1) both
        `};
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

const TeamNameSpan = styled.span`
  font-size: var(--text-xl);
  margin-bottom: 1rem;
`;

const TeamImg = styled.img`
  width: 95%;
`;

const SvgWrap = styled.div`
  width: 70%;
  height: 70%;
`;

const LoadingSvg = styled.object`
  width: 100%;
`;

export default PlayerCard;
