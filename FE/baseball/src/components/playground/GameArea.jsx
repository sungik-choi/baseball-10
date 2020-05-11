import React from "react";
import Background from "style/Background";
import styled from "styled-components";

const GameArea = ({ home, away }) => {
  return (
    <GameBackground>
      <ScoreBar>
        <TeamName>{home.teamName}</TeamName>
        <Mid>
          <TotalScore>{home.totalScore}</TotalScore>
          <CurrentInning>2회초 수비</CurrentInning>
          <TotalScore>{away.totalScore}</TotalScore>
        </Mid>
        <TeamName>{away.teamName}</TeamName>
      </ScoreBar>
      <BottomWarp>
        <StatusBoard />
      </BottomWarp>
    </GameBackground>
  );
};

const GameBackground = styled(Background)`
  grid-area: gameArea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  border: solid var(--border-size) #51566a;
`;

const ScoreBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 17%;
  margin-top: 26px;
  background-color: var(--black);
  border-radius: var(--border-radius);
  border: solid var(--border-size) #51566a;
`;

const TeamName = styled.div`
  color: var(--white);
  font-size: var(--text-lg);
`;

const Mid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const TotalScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 80%;
  border-radius: var(--border-radius);
  border: solid 1px #333746;
  background-color: var(--white);
`;

const CurrentInning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 80%;
  border-radius: var(--border-radius);
  background-color: #384faa;
  color: var(--white);
`;

const BottomWarp = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30%;
  margin-bottom: 23px;
  margin-right: 23px;
`;

const StatusBoard = styled.div`
  width: 20%;
  height: 100%;
  background-color: var(--black);
  border-radius: var(--border-radius);
  border: solid var(--border-size) #51566a;
`;

export default GameArea;
