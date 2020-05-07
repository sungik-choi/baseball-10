import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/login/Login.jsx";
import TeamList from "./components/teamList/TeamList.jsx";
import PlayGround from "./components/playground/PlayGround.jsx";

import BaseballProvider from "./components/BaseballProvider.jsx";

const App = () => {
  return (
    <BaseballProvider>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/gamelist" component={TeamList} />
        <Route path="/playground" component={PlayGround} />
      </Switch>
    </BaseballProvider>
  );
};

export default App;
