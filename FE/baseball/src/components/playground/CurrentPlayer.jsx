import React from "react";
import styled from "styled-components";

const CurrentPlayer = ({ pitcher, batter }) => {
  return (
    <CurrentPlayerWarp>
      <Top>
        <Title>현재 선수</Title>
      </Top>

      <Player>
        <PlayerPosition>투수 </PlayerPosition>
        <PlayerName>{pitcher.name}</PlayerName>
        <PlyerInfo>#{pitcher.count}</PlyerInfo>
      </Player>

      <hr />

      <Player border="true">
        <PlayerPosition>타자 </PlayerPosition>
        <PlayerName>{batter.name}</PlayerName>
        <PlyerInfo>
          {batter.plateAppearance}타석 {batter.hit}안타 {batter.order}타순
        </PlyerInfo>
      </Player>
    </CurrentPlayerWarp>
  );
};

const CurrentPlayerWarp = styled.div`
  grid-area: currentPlayer;
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
  align-items: center;
  color: var(--white);
  width: 100%;
  height: 34%;
  border-radius: 9px 9px 0px 0px;
  border-bottom: solid var(--border-size) #51566a;
`;

const Title = styled.div`
  width: 100%;
  height: 34%;
  padding-left: 10px;
`;

const Player = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32.4%;
  padding-left: 10px;
  background-color: var(--black);
  color: var(--white);
  border-radius: ${(props) => (props.border ? "0px 0px 9px 9px" : "none")};
`;

const PlayerPosition = styled.div`
  height: 32.4%;
`;

const PlayerName = styled.div`
  height: 32.4%;
  padding-left: 10px;
  color: var(--orange);
`;

const PlyerInfo = styled.div`
  padding-left: 10px;
  color: #98a2cb;
`;

export default CurrentPlayer;
