import React from "react";
import Background from "style/Background";
import styled from "styled-components";
import GameBoard from "./gameboard/GameBoard";
import { fadeIn } from "style/Animation";

const GameArea = ({ home, away, plates, ballCount }) => {
  const { strike, out, ball } = ballCount;

  console.log(ball);

  const ballCountHandler = (statusCount, currentCount, color) => {
    const countPointList = [];
    for (let i = 1; i < statusCount; i++) {
      if (i <= currentCount) {
        countPointList.push(<CountPoint color={color} />);
      } else {
        countPointList.push(<CountPoint />);
      }
    }
    return countPointList;
  };

  const ballCountPoints = ballCountHandler(ballLength, ball, " #92db05");
  const strikeCountPoints = ballCountHandler(strikeLength, strike, "#ffe400");
  const outCountPoints = ballCountHandler(outLength, out, "#e5292c");

  return (
    <GameBackground color={"none"}>
      <GameBoard plates={plates}/>
      <ScoreBar>
        <TeamName>{home.teamName}</TeamName>
        <Mid>
          <TotalScore>{home.totalScore}</TotalScore>
          <CurrentInning>2회초 수비</CurrentInning>
          <TotalScore>{away.totalScore}</TotalScore>
        </Mid>
        <TeamName>{away.teamName}</TeamName>
      </ScoreBar>
      <StatusBoard>
        <BallCountStatus>
          <div className="title">S</div>
          {strikeCountPoints}
        </BallCountStatus>
        <BallCountStatus>
          <div className="title">B</div>
          {ballCountPoints}
        </BallCountStatus>
        <BallCountStatus>
          <div className="title">O</div>
          {outCountPoints}
        </BallCountStatus>
      </StatusBoard>
    </GameBackground>
  );
};

const strikeLength = 3;
const ballLength = 4;
const outLength = 3;

const GameBackground = styled(Background)`
  grid-area: gameArea;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  border: solid var(--border-size) var(--gray-4);
`;

const ScoreBar = styled.div`
  z-index: 10;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45rem;
  height: 4.5rem;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
  font-size: 1.5rem;
  background-color: var(--black);
  border-radius: var(--border-radius);
  border: solid var(--border-size) var(--gray-3);
`;

const TeamName = styled.div`
  color: var(--white);
  font-size: var(--text-lg);
`;

const Mid = styled.div`
  display: flex;
  justify-content: center;
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
  border: solid 1px var(--gray-3);
  background-color: var(--white);
`;

const CurrentInning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  width: 40%;
  height: 80%;
  border-radius: var(--border-radius);
  background-color: var(--blue);
  color: var(--white);
`;

const StatusBoard = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--white);
  width: 9rem;
  height: 9rem;
  margin: 1.5rem;
  background-color: var(--gray-3);
  border-radius: var(--border-radius);
  border: solid var(--border-size) var(--gray-4);
  font-size: var(--text-lg);
  padding: 0.625rem;
  .title {
    width: 15%;
  }
`;

const CountPoint = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => (props.color ? props.color : `var(--black)`)};
  border-radius: 50%;
  margin-left: 0.5rem;
`;

const BallCountStatus = styled.div`
  display: flex;
`;

export default GameArea;
