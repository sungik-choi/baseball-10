import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useBaseballState, useBaseballDispatch } from "context/context";
import { playGroundFetch } from "../useFetch";

import ScoreBoard from "./ScoreBoard";
import CurrentPlayer from "./CurrentPlayer";
import GameArea from "./GameArea";
import StatsCenter from "./StatsCenter";

import Background from "style/Background";
import Button from "style/Button";
import { fadeIn } from "style/Animation";
import logo from "assets/logo.svg";

import _ from "../../util/util";

const PlayGround = () => {
  const { playGround } = useBaseballState();
  const dispatch = useBaseballDispatch();

  const defenseTeam = playGround.defenseTeam;
  const attackTeam = playGround.attackTeam;
  const userTeam = playGround.userWhere;
  const currentAttackTeamBatterList = defenseTeam.batter !== null ? defenseTeam.batter : attackTeam.batter;

  //useEffect(() => {
  //  _.judgeDefenseTeam(dispatch);
  //  }, []);

  const judgeDefenseTeam__test = () => {
    if (playGround.defense) {
      console.log("defense team");
    } else {
      judgeDefenseTeam__test();
    }
  };

  return (
    <PlayGroundWrap color="var(--gray-3 )">
      <Logo>
        <LogoSvg type="image/svg+xml" data={logo}></LogoSvg>
      </Logo>
      <ScoreBoard displays={playGround.display} />
      <CurrentPlayer defenseTeam={defenseTeam} attackTeam={attackTeam} />
      <GameArea defenseTeam={defenseTeam} attackTeam={attackTeam} userTeam={userTeam} plates={playGround.plates} ballCount={playGround.ballCount} />
      <StatsCenter batterList={currentAttackTeamBatterList} />
      <PlayerListButton as={Link} to="/playerlist">
        선수 목록
      </PlayerListButton>
    </PlayGroundWrap>
  );
};

const PlayGroundWrap = styled(Background)`
  min-width: var(--width);
  display: grid;
  grid-template-columns: var(--grid-template-columns);
  grid-template-rows: var(--grid-template-rows);
  grid-gap: 1rem;
  padding: 1.5rem;
  grid-template-areas: var(--grid-template-areas);
  * {
    box-sizing: border-box;
    animation: ${fadeIn({ end: 1, changePoint: 30 })} 1s;
  }
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoSvg = styled.object`
  grid-area: logo;
  width: 85%;
  height: 85%;
`;

const PlayerListButton = styled(Button)`
  grid-area: playerListButton;
  width: 100%;
  height: 80%;
`;

export default PlayGround;
