import React from "react";
import styled from "styled-components";
import Background from "style/Background";
import Header from "./Header";
import TeamCard from "./TeamCard";
import { useBaseballState } from "context/context.jsx";
import { fadeIn } from "style/Animation";

const TeamList = () => {
  const { teamList } = useBaseballState();
  const teamCard = teamList.map(teamInfo => <TeamCard key={teamInfo.id} name={teamInfo.name} image={teamInfo.image} />);
  return (
    <TeamListWrap color={"var(--orange)"}>
      <Header />
      <TeamCardsWrap>
        <TeamCards>{teamCard}</TeamCards>
      </TeamCardsWrap>
    </TeamListWrap>
  );
};

const TeamListWrap = styled(Background)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 3rem 1.5rem;
  * {
    animation: ${fadeIn} 1s;
  }
`;

const TeamCardsWrap = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 80%;
`;

const TeamCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export default TeamList;
