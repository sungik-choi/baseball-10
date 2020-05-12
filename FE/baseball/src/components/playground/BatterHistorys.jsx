import React from "react";
import styled from "styled-components";

const BatterHistorys = ({ history }) => {
  const batterHistoryHandler = () => {
    const historys = [];
    let pitchCount = 0;
    let strikeCount = 0;
    let ballCount = 0;

    history.forEach((el) => {
      switch (el) {
        case strike:
          strikeCount++;
          pitchCount++;
          historys.push(batterHistoryTemplate(pitchCount, "스트라이크", strikeCount, ballCount));
          break;
        case ball:
          ballCount++;
          pitchCount++;
          historys.push(batterHistoryTemplate(pitchCount, "볼", strikeCount, ballCount));
          break;
        case hit:
          historys.push(finishHistoryTemplate("안타"));
          break;
        case out:
          historys.push(finishHistoryTemplate("아웃"));
          break;
      }
    });
    return historys.reverse();
  };

  const batterHistoryTemplate = (pitchCount, pitchResult, strikeCount, ballCount) => {
    return (
      <BatterHistory>
        <PitchCount>{pitchCount}제구</PitchCount>
        <PitchResult>{pitchResult}</PitchResult>
        <Stats>
          s{strikeCount} b{ballCount}
        </Stats>
      </BatterHistory>
    );
  };

  const finishHistoryTemplate = (pitchResult) => {
    return (
      <BatterHistory>
        <FinishPitch>{pitchResult} !</FinishPitch>
      </BatterHistory>
    );
  };

  const test = batterHistoryHandler();

  return <BatterHistoryWrap>{test}</BatterHistoryWrap>;
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
