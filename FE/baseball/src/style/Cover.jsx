import styled from "styled-components";
import { fadeIn } from "style/Animation";

const Cover = styled.div`
  display: ${(props) => (props.isAppear ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color || "var(--orange)"};
  animation: ${fadeIn({ changePoint: 0 })} ${(props) => 1 || props.duration}s cubic-bezier(0, 0.15, 0, 1);
`;

export default Cover;
