import React from "react";
import styled from "styled-components";

const TeamScores = ({ border, scoreInfomation }) => {
  const { team1, where, totalScore, inningScore } = scoreInfomation;
  const teamScores = inningScore.map((score) => <TeamScore>{score}</TeamScore>);
  return (
    <TeamScoreWarp border={border}>
      <TeamName>{team1}</TeamName>
      {teamScores}
      <ToTalScore>{totalScore}</ToTalScore>
    </TeamScoreWarp>
  );
};

const inningScores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const TeamScoreWarp = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 32.4%;
  background-color: var(--black);
  border-radius: ${(props) => (props.border ? "0px 0px 9px 9px" : "none")};
  color: var(--white);
`;

const TeamName = styled.div`
  text-align: center;
  width: 12.7%;
  height: 32.4%;
`;

const TeamScore = styled.div`
  width: 6%;
  height: 32.4%;
`;

const ToTalScore = styled.div`
  width: 6%;
  height: 32.4%;
`;

export default TeamScores;
