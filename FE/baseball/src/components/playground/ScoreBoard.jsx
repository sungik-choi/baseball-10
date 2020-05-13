import React from "react";
import styled from "styled-components";
import TeamScores from "./TeamScores.jsx";

const ScoreBoard = ({ displays }) => {
  const scoreBar = scoreList.map((score, idx) => {
    return <Score key={idx}>{score}</Score>;
  });
  return (
    <ScoreBoardWrap>
      <Top>{scoreBar}</Top>
      <TeamScores scoreInfomation={displays[0]} />
      <hr />
      <TeamScores scoreInfomation={displays[1]} border="true" />
    </ScoreBoardWrap>
  );
};

const scoreList = ["", "", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "R"];

const ScoreBoardWrap = styled.div`
  grid-area: scoreBoard;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  border: solid var(--border-size) #51566a;
  hr {
    margin: 0;
    border-color: #51566a;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--white);
  width: 100%;
  height: 34%;
  border-radius: 9px 9px 0px 0px;
  border-bottom: solid var(--border-size) #51566a;
`;

const Score = styled.div`
  width: 6%;
  height: 34%;
`;

export default ScoreBoard;
