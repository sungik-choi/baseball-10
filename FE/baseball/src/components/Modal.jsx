import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import Button from "style/Button";
import { fadeIn, slideIn } from "style/Animation";

const Modal = ({ option: { clickHandler = null, confirmClickHandler = null, text = "", highlightText = "", image = "", cancelBtn = true, btnText = "", cancelBtnText = "" } }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const a = () => setIsConfirm(true);

  return ReactDOM.createPortal(
    <>
      <DimmedLayer></DimmedLayer>
      <ModalWrap isConfirm={isConfirm}>
        {image && (
          <ModalImgWrap>
            <ModalImg src={image} />
          </ModalImgWrap>
        )}
        {highlightText && <HighlightSpan>{highlightText}</HighlightSpan>}
        {text}
        <ButtonWrap>
          {cancelBtn && (
            <Button white onClick={clickHandler}>
              {cancelBtnText}
            </Button>
          )}
          <Button
            onClick={() => {
              confirmClickHandler();
              a();
            }}
          >
            {btnText}
          </Button>
        </ButtonWrap>
      </ModalWrap>
    </>,
    document.getElementById("root"),
  );
};

const DimmedLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--black);
  opacity: var(--opacity-5);
  animation: ${fadeIn({ target: "var(--opacity-5)", changePoint: 0 })} 1s;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 4rem;
  button {
    margin: 0.5rem;
  }
`;

const HighlightSpan = styled.span`
  color: var(--orange);
  display: block;
  margin-bottom: 1rem;
`;

const ModalImgWrap = styled.div`
  width: 25%;
  margin-bottom: 2rem;
`;

const ModalImg = styled.img`
  width: 100%;
`;

const ModalWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: var(--team-list-width);
  min-width: var(--team-list-min-width);
  height: var(--team-list-width);
  min-height: var(--team-list-min-height);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border: var(--border-size) solid var(--black);
  border-radius: var(--border-radius);
  font-family: "Regular";
  font-size: var(--text-xl);
  animation: ${(props) =>
    props.isConfirm
      ? css`
          ${slideIn({ from: "-50%, -50%", to: "-50%, 100vh" })} 0.7s cubic-bezier(.78,.03,.65,1.02) both
        `
      : css`
          ${slideIn({ from: "-50%, 100vh", to: "-50%, -50%" })} 0.7s cubic-bezier(0.22, 0.62, 0, 1) both
        `};
`;

export default Modal;
