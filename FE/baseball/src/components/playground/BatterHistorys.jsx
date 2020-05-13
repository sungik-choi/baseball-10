import React, { useCallback } from "react";
import styled from "styled-components";

const BatterHistorys = ({ batterHistorys }) => {
  const batterHistoryHandler = () => {
    let pitchCount = 0;
    let strikeCount = 0;
    let ballCount = 0;

    const batterPicthHistorys = batterHistorys.map((pitchType, idx) => {
      switch (pitchType) {
        case strike:
          strikeCount++;
          pitchCount++;
          return batterHistoryTemplate(pitchCount, "스트라이크", strikeCount, ballCount, idx);
        case ball:
          ballCount++;
          pitchCount++;
          return batterHistoryTemplate(pitchCount, "볼", strikeCount, ballCount);
        case hit:
          return finishHistoryTemplate("안타", idx);
        case out:
          return finishHistoryTemplate("아웃", idx);
      }
    });
    return batterPicthHistorys.reverse();
  };

  const batterHistoryTemplate = (pitchCount, pitchResult, strikeCount, ballCount, idx) => {
    return (
      <BatterHistory key={idx}>
        <PitchCount>{pitchCount}제구</PitchCount>
        <PitchResult>{pitchResult}</PitchResult>
        <Stats>
          s{strikeCount} b{ballCount}
        </Stats>
      </BatterHistory>
    );
  };

  const finishHistoryTemplate = (pitchResult, idx) => {
    return (
      <BatterHistory key={idx}>
        <FinishPitch>{pitchResult} !</FinishPitch>
      </BatterHistory>
    );
  };

  return <BatterHistoryWrap>{batterHistoryHandler()}</BatterHistoryWrap>;
};

const strike = "1";
const ball = "2";
const hit = "3";
const out = "4";

const BatterHistoryWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
`;

const BatterHistory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 5px;
`;

const FinishPitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--white);
  margin-bottom: 5px;
`;

const PitchCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--orange);
  height: 25px;
  text-align: center;
`;

const PitchResult = styled.div`
  color: var(--white);
`;

const Stats = styled.div`
  color: #98a2cb;
`;

export default BatterHistorys;
