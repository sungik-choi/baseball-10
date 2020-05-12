import React from "react";
import Background from "style/Background";
import styled from "styled-components";

const GameArea = ({ defenseTeam, attackTeam, ballCount }) => {
  const { strike, out, ball } = ballCount;

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
    <GameBackground>
      <ScoreBar>
        <TeamName>{defenseTeam.teamName}</TeamName>
        <Mid>
          <TotalScore>{defenseTeam.totalScore}</TotalScore>
          <CurrentInning>2회초 수비</CurrentInning>
          <TotalScore>{attackTeam.totalScore}</TotalScore>
        </Mid>
        <TeamName>{attackTeam.teamName}</TeamName>
      </ScoreBar>
      <BottomWarp>
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
      </BottomWarp>
    </GameBackground>
  );
};
const strikeLength = 3;
const ballLength = 4;
const outLength = 3;

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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--white);
  width: 20%;
  height: 100%;
  background-color: var(--gray-3);
  border-radius: var(--border-radius);
  border: solid var(--border-size) #51566a;
  font-size: var(--text-lg);
  padding: 10px;
  .title {
    width: 15%;
  }
`;

const CountPoint = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => (props.color ? props.color : `var(--black)`)};
  border-radius: 50%;
  margin-left: 7px;
`;

const BallCountStatus = styled.div`
  display: flex;
`;

export default GameArea;
