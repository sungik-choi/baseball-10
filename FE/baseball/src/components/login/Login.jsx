import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Button from "style/Button";
import Background from "style/Background";
import logo from "assets/logo.svg";
import githubLogo from "assets/github.svg";
import codesquad from "assets/codesquad.png";

const Login = () => {
  return (
    <Background>
      <LoginWrap>
        <LogoSvg type="image/svg+xml" data={logo}></LogoSvg>
        <LoginButton as={Link} to="/gamelist">
          <GithubLogo type="image/svg+xml" data={githubLogo}></GithubLogo>
          <span>Github으로 시작하기</span>
        </LoginButton>
        <CodesqaudLogo src={codesquad} />
      </LoginWrap>
    </Background>
  );
};

const bounce = keyframes`
  0% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(5%);
  }
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
  padding-top: 7.5rem;
  padding-bottom: 2rem;
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

const LoginButton = styled(Button)`
  margin: 4rem 0;
  transform: translateY(1rem);
`;

export default Login;
