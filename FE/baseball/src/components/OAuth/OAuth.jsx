import React from "react";
import queryString from "query-string";
import styled from "styled-components";
import _ from "../../util/util";

const OAuth = ({ location }) => {
  console.log(location.search);
  const queryCode = queryString.parse(location.search).code;

  const githubLoginURL = process.env.REACT_APP_GITHUB_LOGIN_URL;
  console.log(githubLoginURL);
  _.OAuthFetch(githubLoginURL, queryCode);
  return <div></div>;
};

export default OAuth;
