import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "style/Button";

const Header = () => {
  return (
    <Wrap>
      <HeaderButton as={Link} to="/playground">
        게임으로 돌아가기
      </HeaderButton>
      <Title>선수 명단</Title>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8vh;
`;

const HeaderButton = styled(Button)`
  position: absolute;
  left: 4.7%;
`;

const Title = styled.div`
  font-family: "Bold";
  color: var(--white);
  font-size: var(--text-xxl);
`;

export default Header;
