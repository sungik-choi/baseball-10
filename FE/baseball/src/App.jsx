import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/login/Login.jsx";
import TeamList from "./components/teamList/TeamList.jsx";
import PlayGround from "./components/playground/PlayGround.jsx";
import PlayerList from "./components/playground/playerList/PlayerList.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

import BaseballProvider from "./components/BaseballProvider.jsx";

const App = () => {
  return (
    <BaseballProvider>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/teamlist" component={TeamList} />
        <Route path="/playground" component={PlayGround} />
        <Route path="/playerlist" component={PlayerList} />
        <Route
          render={({ location }) => {
            return <NotFoundPage pathname={location.pathname} />;
          }}
        />
      </Switch>
    </BaseballProvider>
  );
};

export default App;
