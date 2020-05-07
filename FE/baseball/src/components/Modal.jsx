import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "style/Button";
import { fadeIn, slideIn } from "style/Animation";

const Modal = ({option: { text = "", highlightText = "", image = "", cancelBtn = true, btnText = "", cancelBtnText = ""}}) => {
  return ReactDOM.createPortal(
    <>
      <DimmedLayer></DimmedLayer>
      <ModalWrap>
        {image && (
          <ModalImgWrap>
            <ModalImg src={image} />
          </ModalImgWrap>
        )}
        <span>
          {highlightText && <HighlightSpan>{highlightText}</HighlightSpan>}
          {text}
        </span>
        <ButtonWrap>
        {cancelBtn && <Button white>{cancelBtnText}</Button>}
        <Button>{btnText}</Button>
        </ButtonWrap>
      </ModalWrap>
    </>,
    document.getElementById("modal-root"),
  );
};

const MODAL_OPACITY = 0.5;

const DimmedLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--black);
  opacity: ${MODAL_OPACITY};
  animation: ${fadeIn({target: MODAL_OPACITY, changePoint: 0})} 1s;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-top: 8rem;
  Button {
    margin: 0.5rem;
  }
`;

const HighlightSpan = styled.span`
  color: var(--orange);
  margin-right: 0.5rem;
`;

const ModalImgWrap = styled.div`
  width: 25%;
  margin-bottom: 2rem;
`

const ModalImg = styled.img`
  width: 100%;
`

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
  animation: ${slideIn({ from: "-50%, 100vh", to: "-50%, -50%" })} 0.7s cubic-bezier(0.22, 0.62, 0, 1);
`;

export default Modal;
