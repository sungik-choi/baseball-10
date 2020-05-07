import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Button from "style/Button";
import Background from "style/Background";
import { bounce, fadeIn } from "style/Animation";
import logo from "assets/logo.svg";
import githubLogo from "assets/github.svg";
import codesquad from "assets/codesquad.png";

const Login = () => {
  const [isGameStart, setIsGameStart] = useState(false);
  let history = useHistory();

  const redirectTeamList = () => {
    setIsGameStart(true);
    setTimeout(() => history.push("/teamlist"), TRANSITION_DELAY * 1000);
  };

  return (
    <Background>
      <CoverDiv isAppear={isGameStart} />
      <LoginWrap>
        <LogoTitle>{TITLE_TEXT}</LogoTitle>
        <LogoSvg type="image/svg+xml" data={logo}></LogoSvg>
        {false ? (
          <PrimaryButton as={Link} to="/teamlist">
            <GithubLogo type="image/svg+xml" data={githubLogo}></GithubLogo>
            <span>{GITHUB_BUTTON_TEXT}</span>
          </PrimaryButton>
        ) : (
          <div>
            <PrimaryButton onClick={redirectTeamList}>{START_BUTTON_TEXT}</PrimaryButton>
            <PrimaryButton>{LOGOUT_BUTTON_TEXT}</PrimaryButton>
          </div>
        )}
        <CodesqaudLogo src={codesquad} />
      </LoginWrap>
    </Background>
  );
};

const TRANSITION_DELAY = 1;

const TITLE_TEXT = "온라인 야구게임";
const GITHUB_BUTTON_TEXT = "Github으로 시작하기";
const START_BUTTON_TEXT = "게임시작";
const LOGOUT_BUTTON_TEXT = "로그아웃";

const CoverDiv = styled.div`
  display: ${props => (props.isAppear ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: var(--orange);
  animation: ${fadeIn} ${TRANSITION_DELAY}s;
`;

const LogoTitle = styled.h1`
  font-size: 0;
`;

const LogoSvg = styled.object`
  width: 26rem;
  height: 14.125rem; /* 226 / 16 */
  animation: ${bounce} 2s infinite alternate;
`;

const LoginWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
`;

const CodesqaudLogo = styled.img`
  width: 8.6875rem; /* 139 / 16 */
  height: 3.875rem; /* 62 / 16 */
`;

const GithubLogo = styled.object`
  width: 1.5rem; /* 24 / 16 */
  margin-right: 0.5rem; /* 8 / 16 */
  fill: var(--white);
`;

const PrimaryButton = styled(Button)`
  margin: 1.5rem 0;
  /* transform: translateY(1rem); */
`;

export default Login;
