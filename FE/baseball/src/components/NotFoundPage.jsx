import React from "react";
import styled from "styled-components";

const NotFoundPage = ({ pathname }) => {
  return (
    <Warp>
      <div>이 페이지는 존재하지 않습니다</div>
      <div>{pathname}</div>
    </Warp>
  );
};

const Warp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Regular";
  background-color: black;
  color: white;
  height: 100vh;
`;

export default NotFoundPage;
