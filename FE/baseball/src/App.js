import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/login/Login.jsx";
import GameList from "./components/gamelist/GameList.jsx";
import PlayGround from "./components/playground/PlayGround.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/gamelist" component={GameList} />
        <Route path="/playground" component={PlayGround} />
      </Switch>
    </div>
  );
}

export default App;
