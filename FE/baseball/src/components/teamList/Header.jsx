import React from "react";
import styled from "styled-components";
import logo from "assets/logo.svg";

const Header = () => {
  const TITLE_TEXT = "플레이할 팀을 선택하세요!";
  return (
    <HeaderWrap>
      {/* <LogoSvg type="image/svg+xml" data={logo}></LogoSvg> */}
      <HeaderTitle>{TITLE_TEXT}</HeaderTitle>
      <UserInfoDiv>
        {/* <UserAvatarImg /> */}
        {/* <UserIdSpan>nigayo123</UserIdSpan> */}
      </UserInfoDiv>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const HeaderTitle = styled.h2`
  width: 100%;
  color: var(--white);
  font-size: var(--text-xxl);
`;

const LogoSvg = styled.object`
  position: absolute;
  top: 0;
  left: 0;
  width: 6.25rem; /* 100 / 16 */
  height: 3.375rem; /* 54 / 16 */
`;

const UserInfoDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

const UserAvatarImg = styled.img`
  width: 2rem;
  height: 2rem;
  background-color: var(--gray-1);
  border-radius: 2rem;
  margin-right: 0.5rem;
`;

const UserIdSpan = styled.span`
  color: var(--white);
`;

export default Header;
