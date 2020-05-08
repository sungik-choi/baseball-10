import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "style/Background";
import Header from "./Header";
import TeamCard from "./TeamCard";
import Modal from "../Modal";
import { useBaseballState, useBaseballDispatch } from "context/context.jsx";
import { fadeIn } from "style/Animation";
import { selectTeam } from "action/action";

const TeamList = () => {
  const { teamList, selectedTeam } = useBaseballState();
  const [isModalExist, setIsModalExist] = useState(false);
  const dispatch = useBaseballDispatch();
  const teamClickHandler = (name, image) => {
    setIsModalExist(true);
    dispatch(selectTeam(name, image));
  };
  const teamCard = teamList.map((teamInfo) => <TeamCard key={teamInfo.id} name={teamInfo.name} image={teamInfo.image} clickHandler={teamClickHandler} />);

  const modalClickHandler = () => setIsModalExist(false);
  const confirmClickHandler = () => {};

  const modalOptions = {
    clickHandler: modalClickHandler,
    confirmClickHandler: confirmClickHandler,
    text: MODAL_TEXT,
    highlightText: selectedTeam.name,
    image: selectedTeam.image,
    btnText: BTN_TEXT,
    cancelBtnText: CANCEL_BTN_TEXT,
  };

  useEffect(() => {}, [selectedTeam]);

  return (
    <>
      <TeamListWrap color={"var(--orange)"}>
        <Header />
        <TeamCardsWrap>
          <TeamCardUl>{teamCard}</TeamCardUl>
        </TeamCardsWrap>
      </TeamListWrap>
      {isModalExist && <Modal option={modalOptions} />}
    </>
  );
};

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
