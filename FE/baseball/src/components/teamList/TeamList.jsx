import React from "react";
import styled from "styled-components";
import Background from "style/Background";
import Header from "./Header";
import TeamCard from "./TeamCard";
import { useBaseballState } from "context/context.jsx";

const TeamList = () => {
  const { teamList } = useBaseballState();
  const teamCard = teamList.map(teamInfo => <TeamCard key={teamInfo.id} name={teamInfo.name} image={teamInfo.image} />);
  return (
    <Background color={"var(--orange)"}>
      <TeamListWrap>
        <Header />
        <CardWrap>{teamCard}</CardWrap>
      </TeamListWrap>
    </Background>
  );
};

const TeamListWrap = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
`;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export default TeamList;
