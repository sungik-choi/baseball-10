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

  return <Background></Background>;
};

export default OAuth;
