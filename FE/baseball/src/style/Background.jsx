import styled from "styled-components";
import backgroundImage from "assets/background.png";

const Background = styled.div`
  box-sizing: border-box;
  font-family: "Regular";
  background-image: ${props => (props.color ? "none" : `url(${backgroundImage})`)};
  background-size: cover;
  background-color: ${props => props.color || "none"};
  width: 100%;
  height: 100vh;
`;

export default Background;
