import React from "react";
import styled from "styled-components";

const TotalCard = ({ totalAppearance, totalHit, totalOut }) => {
  return (
    <TotalInfoList>
      <TotalInfo>총합</TotalInfo>
      <TotalInfo>{totalAppearance}</TotalInfo>
      <TotalInfo>{totalHit}</TotalInfo>
      <TotalInfo>{totalOut}</TotalInfo>
      <TotalInfo></TotalInfo>
    </TotalInfoList>
  );
};

const TotalInfoList = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--text-base);
  color: var(--white);
  font-family: "Bold";
  width: 100%;
  height: 7vh;
`;

const TotalInfo = styled.div`
  width: 25%;
  text-align: center;
`;

export default TotalCard;
