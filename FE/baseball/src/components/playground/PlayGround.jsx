import React, { useState, useEffect } from "react";
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
import logo from "assets/logo.svg";

import _ from "../../util/util";

const PlayGround = () => {
  const { playGround } = useBaseballState();
  const dispatch = useBaseballDispatch();

  const defenseTeam = playGround.defenseTeam;
  const attackTeam = playGround.attackTeam;
  const userTeam = playGround.userWhere;
  const currentAttackTeamBatterList = defenseTeam.batter !== null ? defenseTeam.batter : attackTeam.batter;

  // useEffect(() => {
  //   _.judgeDefenseTeam(dispatch);
  // }, []);

  return (
    <>
      <PlayGroundWrap color="var(--gray-3)">
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
    </>
  );
};

const PlayGroundWrap = styled(Background)`
  min-width: var(--width);
  overflow-y: hidden;
  display: grid;
  grid-template-columns: var(--grid-template-columns);
  grid-template-rows: var(--grid-template-rows);
  grid-gap: 1rem;
  padding: 1.5rem;
  grid-template-areas: var(--grid-template-areas);
  * {
    box-sizing: border-box;
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
