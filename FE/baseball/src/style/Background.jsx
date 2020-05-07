import styled from "styled-components";
import backgroundImage from "assets/background.png";

const Background = styled.div`
  box-sizing: border-box;
  font-family: "Regular";
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default Background;
