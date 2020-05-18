import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { useBaseballState, useBaseballDispatch } from "context/context.jsx";
import PlayerCard from "./PlayerCard";
import Background from "style/Background";
import Cover from "style/Cover";
import { fadeIn, fadeOut } from "style/Animation";
import magnify from "assets/magnify.svg";
import _ from "../../util/util";

const Loading = () => {
  const { loading } = useBaseballState();
  const dispatch = useBaseballDispatch();

  const [count, setCount] = useState(GAME_START_DELAY);
  const [isMatch, setIsMatch] = useState(false);
  let history = useHistory();

  useEffect(() => {
    const matchId = _.getLocalstorage("matchId");
    const requsetURL = process.env.REACT_APP_API_URL + `/${matchId}/loading`;
    fetch(requsetURL)
      .then((res) => res.json())
      .then((data) => {
        if (_.transformBooleanType(data.start)) {
          setIsMatch(true);
        } else {
          _.judgeToMatchTarget(setIsMatch, dispatch);
        }
      });
  }, []);

  useEffect(() => {
    if (!isMatch) return;
    const interval = setInterval(() => {
      if (count > 0) setCount(count - 1);
      else
        setTimeout(() => {
          history.push("/playground");
        }, TRANSITION_DELAY * 1000);
    }, TRANSITION_DELAY * 1000);
    return () => clearInterval(interval);
  }, [isMatch, count]);

  // useEffect(() => {
  //   demo_handler();
  // }, []);

  // const demo_handler = () => {
  //   setTimeout(() => {
  //     setIsMatch(true);
  //     dispatch({ type: "DEMO_MATCHING" });
  //   }, 5000);
  // };

  return (
    <>
      <Cover isAppear={count === 0} color={"var(--gray-3)"} />
      <LoadingWrap color={"var(--orange)"} count={count}>
        <LoadingTitle>{isMatch ? LOADING_COMPLETE_TEXT(count) : LOADING_TEXT}</LoadingTitle>
        <PlayerCardWrap>
          <PlayerCard count={count} teamInfo={loading.firstTeam} />
          <VersusSpan>{VS_TEXT}</VersusSpan>
          {isMatch ? (
            <PlayerCard count={count} teamInfo={loading.secondTeam} />
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
const GAME_START_DELAY = 10;
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
