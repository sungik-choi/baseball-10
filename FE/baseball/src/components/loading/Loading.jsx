import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { useBaseballState, useBaseballDispatch } from "context/context.jsx";
import PlayerCard from "./PlayerCard";
import Background from "style/Background";
import Cover from "style/Cover";
import { fadeIn, fadeOut } from "style/Animation";
import magnify from "assets/magnify.svg";

const Loading = () => {
  const {
    TESTselectedTeam = {
      name: "우리팀",
      image: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FsfG5j%2Fbtqyjd8BHCx%2FcKTzWIU3jPjZ0h84IKJjm0%2Fimg.jpg",
    },
  } = useBaseballState();

  const [opposingTeam, setOpposingTeam] = useState({ name: null, image: null });
  const [count, setCount] = useState(GAME_START_DELAY);
  let history = useHistory();

  const clickHandler = () => {
    // 상대팀 접속시 화면 테스트용
    setOpposingTeam({
      name: "적팀",
      image: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FsfG5j%2Fbtqyjd8BHCx%2FcKTzWIU3jPjZ0h84IKJjm0%2Fimg.jpg",
    });
    console.log(opposingTeam);
  };

  useEffect(() => {
    if (!opposingTeam.name) return;
    const interval = setInterval(() => {
      if (count > 0) setCount(count - 1);
      else setTimeout(() => history.push("/playground"), TRANSITION_DELAY * 1000);
    }, TRANSITION_DELAY * 1000);
    return () => clearInterval(interval);
  }, [opposingTeam, count]);

  return (
    <>
      <Cover isAppear={count === 0} color={"var(--gray-3)"} />
      <LoadingWrap color={"var(--orange)"} onClick={clickHandler} count={count}>
        <LoadingTitle>{opposingTeam.name ? LOADING_COMPLETE_TEXT(count) : LOADING_TEXT}</LoadingTitle>
        <PlayerCardWrap>
          <PlayerCard count={count} teamInfo={TESTselectedTeam} />
          <VersusSpan>{VS_TEXT}</VersusSpan>
          {opposingTeam.name ? (
            <PlayerCard count={count} teamInfo={opposingTeam} />
          ) : (
            <SvgWrap>
              <LoadingIndicatorSvg type="image/svg+xml" data={magnify} />
            </SvgWrap>
          )}
        </PlayerCardWrap>
      </LoadingWrap>
    </>
  );
};

const TRANSITION_DELAY = 1;
const GAME_START_DELAY = 3;
const VS_TEXT = "VS";
const LOADING_TEXT = "상대를 찾는 중입니다...";
const LOADING_COMPLETE_TEXT = (num) => `게임시작 ${num}초 전`;

const LoadingTitle = styled.h2`
  color: var(--white);
  font-size: var(--text-xxl);
  margin-bottom: 4rem;
`;

const VersusSpan = styled.span`
  margin: 0 4rem;
  font-family: "Bold";
  color: var(--white);
  font-size: var(--text-xxl);
`;

const LoadingWrap = styled(Background)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  ${LoadingTitle}, ${VersusSpan}, object {
    animation: ${(props) =>
      props.count === 0
        ? css`
            ${fadeOut({ start: 1, changePoint: 0 })} 1s both;
          `
        : css`
            ${fadeIn({ end: 1, changePoint: 0 })} 1s both;
          `};
  }
`;

const SvgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--team-card-width);
  height: var(--team-card-width);
`;

const LoadingIndicatorSvg = styled.object`
  width: 70%;
`;

const PlayerCardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loading;
