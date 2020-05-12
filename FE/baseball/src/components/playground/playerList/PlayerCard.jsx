import React from "react";
import styled from "styled-components";

const PlayerCard = ({ playerInfo }) => {
  const { name, plateAppearance, hit, out, average } = playerInfo;
  return (
    <PlayerInfoCard>
      <PlayerInfoItem>{name}</PlayerInfoItem>
      <PlayerInfoItem>{plateAppearance}</PlayerInfoItem>
      <PlayerInfoItem>{hit}</PlayerInfoItem>
      <PlayerInfoItem>{out}</PlayerInfoItem>
      <PlayerInfoItem>{average}</PlayerInfoItem>
    </PlayerInfoCard>
  );
};

const PlayerInfoCard = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--text-base);
  color: var(--white);
  font-family: "Regular";
  width: 100%;
  &:hover {
    color: var(--orange);
  }
`;

const PlayerInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  text-align: center;
  border-bottom: solid 2px var(--gray-4);
  height: 6vh;
`;

export default PlayerCard;
