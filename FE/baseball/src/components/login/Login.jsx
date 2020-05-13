import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "style/Button";
import Background from "style/Background";
import Cover from "style/Cover";
import { bounce } from "style/Animation";
import logo from "assets/logo.svg";
import githubLogo from "assets/github.svg";

const Login = () => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  let history = useHistory();

  const github_login_url = process.env.REACT_APP_GITHUB_URL;

  const gameStartBtnClickHandler = () => {
    setIsGameStart(true);
    setTimeout(() => history.push("/teamlist"), TRANSITION_DELAY * 1000);
  };

  return (
    <Background>
      <Cover isAppear={isGameStart} duration={TRANSITION_DELAY} />
      <LoginWrap>
        <LogoTitle>{TITLE_TEXT}</LogoTitle>
        <LogoSvg type="image/svg+xml" data={logo}></LogoSvg>
        {isLogin ? (
          <div>
            <PrimaryButton onClick={gameStartBtnClickHandler}>{START_BUTTON_TEXT}</PrimaryButton>
            <PrimaryButton>{LOGOUT_BUTTON_TEXT}</PrimaryButton>
          </div>
        ) : (
          <a href={github_login_url}>
            <PrimaryButton>
              <GithubLogo type="image/svg+xml" data={githubLogo}></GithubLogo>
              <span>{GITHUB_BUTTON_TEXT}</span>
            </PrimaryButton>
          </a>
        )}
        <a href={GITHUB_URL}>{COPYRIGHT_TEXT}</a>
      </LoginWrap>
    </Background>
  );
};

const TRANSITION_DELAY = 1;

const TITLE_TEXT = "온라인 야구게임";
const GITHUB_BUTTON_TEXT = "Github으로 시작하기";
const START_BUTTON_TEXT = "게임시작";
const LOGOUT_BUTTON_TEXT = "로그아웃";
const GITHUB_URL = "https://github.com/codesquad-member-2020/baseball-10";
const COPYRIGHT_TEXT = "Copyright 2020. Baseball-10. Allright reserved.";

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
