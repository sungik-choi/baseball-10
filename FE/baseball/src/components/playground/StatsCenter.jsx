import React from "react";
import styled from "styled-components";
import BatterHistorys from "./BatterHistorys";

const StatsCenter = ({ batterList }) => {
  const batterLists = batterList.map((batter) => {
    return (
      <BatterInfo>
        <BatterName>
          {batter.order}번 타자 {batter.name}
        </BatterName>
        <BatterHistorys history={batter.history} />
      </BatterInfo>
    );
  });

  return (
    <StatsCenterWarp>
      <Top>통계 센터</Top>
      {batterLists}
    </StatsCenterWarp>
  );
};

const StatsCenterWarp = styled.div`
  grid-area: statsCenter;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
  border: solid var(--border-size) var(--gray-4);
  background-color: var(--black);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #98a2cb;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15%;
  border-bottom: solid var(--border-size) var(--gray-4);
  background-color: var(--gray-3);
  color: var(--white);
  padding-left: 10px;
`;

const BatterInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const BatterName = styled.div`
  width: 80%;
  padding-top: 10px;
  padding-bottom: 5px;
  color: #98a2cb;
  border-bottom: solid 1px var(--gray-4);
`;

export default StatsCenter;
