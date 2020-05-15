import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useBaseballState, useBaseballDispatch } from "context/context.jsx";
import useFetch from "components/useFetch";
import { FETCH_TEAM_LIST } from "action/action";
import Header from "./Header";
import TeamCard from "./TeamCard";
import Modal from "../Modal";
import Background from "style/Background";
import Cover from "style/Cover";
import { fadeIn } from "style/Animation";
import { selectTeam } from "action/action";

const TeamList = () => {
  const { teamList, selectedTeam } = useBaseballState();
  const dispatch = useBaseballDispatch();
  const [isGameStart, setIsGameStart] = useState(false);
  const [isModalExist, setIsModalExist] = useState(false);
  let history = useHistory();

  const teamListGetURL = process.env.REACT_APP_API_URL + `api/mock/teams`; // delete mock
  useFetch(teamListGetURL, FETCH_TEAM_LIST, dispatch);

  const teamClickHandler = (name, image) => {
    setIsModalExist(true);
    dispatch(selectTeam(name, image));
  };

  const modalClickHandler = () => setIsModalExist(false);
  const confirmClickHandler = () => {
    setIsGameStart(true);
    setTimeout(() => history.push("/loading"), TRANSITION_DELAY * 1000);
  };

  const teamCard = teamList.map((teamInfo) => <TeamCard key={teamInfo.id} name={teamInfo.name} image={teamInfo.logoUrl} clickHandler={teamClickHandler} />);

  const modalOptions = {
    clickHandler: modalClickHandler,
    confirmClickHandler: confirmClickHandler,
    image: selectedTeam.image,
    text: MODAL_TEXT,
    btnText: BTN_TEXT,
    cancelBtnText: CANCEL_BTN_TEXT,
    highlightText: selectedTeam.name,
  };

  return (
    <>
      <TeamListWrap color={"var(--orange)"}>
        <Cover color={"var(--orange)"} isAppear={isGameStart} duration={TRANSITION_DELAY} />
        <Header />
        <TeamCardsWrap>
          <TeamCardUl>{teamCard}</TeamCardUl>
        </TeamCardsWrap>
      </TeamListWrap>
      {isModalExist && <Modal option={modalOptions} />}
    </>
  );
};

const TRANSITION_DELAY = 2;

const MODAL_TEXT = "팀을 선택하시겠습니까?";
const BTN_TEXT = "이 팀으로 게임시작";
const CANCEL_BTN_TEXT = "취소";

const TeamListWrap = styled(Background)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.25rem;
  * {
    animation: ${fadeIn({ target: 1, changePoint: 30 })} 1s;
  }
`;

const TeamCardsWrap = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: var(--team-list-width);
  min-width: var(--team-list-min-width);
`;

const TeamCardUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
`;

export default TeamList;
