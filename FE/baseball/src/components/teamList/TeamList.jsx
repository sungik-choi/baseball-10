import React, { useEffect } from "react";
import styled from "styled-components";
import Background from "style/Background";
import Header from "./Header";
import TeamCard from "./TeamCard";
import { useBaseballState, useBaseballDispatch } from "context/context.jsx";
import { fadeIn } from "style/Animation";
import { selectTeam } from "action/action";

const TeamList = () => {
  const { teamList, selectedTeam } = useBaseballState();
  const dispatch = useBaseballDispatch();

  const teamClickHandler = (name, image) => dispatch(selectTeam(name, image));

  const teamCard = teamList.map((teamInfo) => <TeamCard key={teamInfo.id} name={teamInfo.name} image={teamInfo.image} clickHandler={teamClickHandler} />);

  useEffect(() => {
    console.log(selectedTeam);
  }, [selectedTeam]);
  return (
    <TeamListWrap color={"var(--orange)"}>
      <Header />
      <TeamCardsWrap>
        <TeamCardUl>{teamCard}</TeamCardUl>
      </TeamCardsWrap>
    </TeamListWrap>
  );
};

const TeamListWrap = styled(Background)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.25rem;
  * {
    animation: ${fadeIn} 1s;
  }
`;

const TeamCardsWrap = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 80%;
`;

const TeamCardUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export default TeamList;
