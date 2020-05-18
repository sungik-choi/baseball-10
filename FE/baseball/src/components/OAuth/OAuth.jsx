import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import _ from "../../util/util";
import Background from "style/Background";

const OAuth = () => {
  const history = useHistory();

  const judgeCookie = () => {
    if (_.getCookie("userEmail")) {
      history.push("/");
    } else {
      setTimeout(() => {
        judgeCookie();
      }, 2000);
    }
  };

  useEffect(() => {
    judgeCookie();
  }, []);

  // const demo_ = () => {
  //   setTimeout(() => {
  //     _.setCookie("userEmail", "jhchoi1115@gmail.com", 1);
  //     history.push("/");
  //   }, 2000);
  // };

  // useEffect(() => {
  //   demo_();
  // }, []);

  return <Background></Background>;
};

export default OAuth;
