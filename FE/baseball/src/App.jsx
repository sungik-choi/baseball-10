import React from "react";
import GlobalStyle from "style/GlobalStyle";
import { Route, Switch } from "react-router-dom";

import Login from "components/login/Login.jsx";
import TeamList from "components/teamList/TeamList.jsx";
import PlayGround from "components/playground/PlayGround.jsx";
import PlayerList from "components/playground/playerList/PlayerList.jsx";
import Loading from "components/loading/Loading.jsx";
import NotFoundPage from "components/NotFoundPage.jsx";
import OAuth from "components/OAuth/OAuth";

import BaseballProvider from "components/BaseballProvider.jsx";

const App = () => {
  return (
    <BaseballProvider>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/teamlist" component={TeamList} />
        <Route path="/playground" component={PlayGround} />
        <Route path="/playerlist" component={PlayerList} />
        <Route path="/loading" component={Loading} />
        <Route path="/api/github/oauth" component={OAuth} />
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
