import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import { Route, Link, Switch } from 'react-router-dom';

import Login from './components/login/Login.jsx';
import GameList from './components/gamelist/GameList.jsx';
import PlayGround from './components/playground/PlayGround.jsx';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/gamelist" component={GameList} />
        <Route path="/playground" component={PlayGround} />
      </Switch>
    </>
  );
};

export default App;
