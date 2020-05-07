import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderTitle>{TITLE_TEXT}</HeaderTitle>
    </HeaderWrap>
  );
};

const TITLE_TEXT = "팀을 선택하세요!";

const HeaderWrap = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const HeaderTitle = styled.h2`
  color: var(--white);
  font-size: var(--text-xxl);
`;

export default Header;
