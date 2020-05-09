import React from "react";
import Background from "style/Background";
import styled from "styled-components";

import Header from "./Header";
import PlayerListCard from "./PlayerListCard";

const PlayerList = () => {
  return (
    <Wrap>
      <Header />
      <PlayerListWrap>
        <PlayerListCard />
        <PlayerListCard />
      </PlayerListWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #333746;
`;

const PlayerListWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 80vh;
  border-radius: 12px;
  border: solid 4px #51566a;
  background-color: var(--black);
`;

export default PlayerList;
