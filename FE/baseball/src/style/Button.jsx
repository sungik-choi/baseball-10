import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bold";
  font-size: var(--text-lg);
  background-color: ${(props) => props.white ? "var(--white)" : "var(--orange)"};
  color: ${(props) => props.white ? "var(--black)" : "var(--white)"};
  border: none;
  border-radius: var(--border-radius);
  width: 18.75rem; /* 300 / 16 */
  height: 3.5rem; /* 56 / 16 */
  margin: var(--border-size);
  margin-bottom: calc(var(--button-shadow) + var(--border-size));
  box-shadow: 0px var(--button-shadow) 0px ${(props) => props.white ? "var(--gray-1)" : "var(--orange-shadow)"};
  &::after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--border-size));
    left: calc(-1 * var(--border-size));
    width: 100%;
    height: calc(100% + var(--button-shadow));
    border: var(--border-size) solid var(--black);
    border-radius: calc(var(--border-radius) + var(--border-size));
  }
`;

export default Button;
