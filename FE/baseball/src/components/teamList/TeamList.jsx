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
    <Background>
      <Header />
      {teamCard}
    </Background>
  );
};

export default TeamList;
