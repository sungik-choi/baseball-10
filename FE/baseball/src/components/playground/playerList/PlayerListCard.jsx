import React from "react";
import styled from "styled-components";

const PlayerListCard = () => {
  return (
    <Card>
      <TeamName>Mavel</TeamName>
      <CardWarp>
        <InfoList>
          <div>타자</div>
          <div>타석</div>
          <div>안타</div>
          <div>아웃</div>
          <div>평균</div>
        </InfoList>
      </CardWarp>
    </Card>
  );
};

const Card = styled.div`
  width: 48%;
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const CardWarp = styled.div`
  border-radius: 12px;
  border: solid 4px #51566a;
  background-color: var(--black);
  height: 70vh;
  width: 100%;
`;

const TeamName = styled.div`
  display: flex;
  align-items: center;
  font-family: "Bold";
  font-size: var(--text-xl);
  color: var(--white);
  height: 8vh;
`;

const InfoList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid 4px #51566a;
  font-size: var(--text-base);
  color: var(--white);
  font-family: "Bold";
  width: 100%;
  background-color: #333746;
  height: 5vh;
`;

export default PlayerListCard;
