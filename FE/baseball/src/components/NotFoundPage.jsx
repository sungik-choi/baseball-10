import React from "react";
import styled from "styled-components";
import Background from "style/Background";

const NotFoundPage = ({ pathname }) => {
  return (
    <Background>
      <ErrorWrap>
        <ErrorContent>⚾️😈 404 NOT FOUND 😈⚾️</ErrorContent>
        <ErrorPathname>http://localhost:3000{pathname}</ErrorPathname>
      </ErrorWrap>
    </Background>
  );
};

const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const ErrorContent = styled.div`
  font-family: "Bold";
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ErrorPathname = styled.div``;

export default NotFoundPage;
