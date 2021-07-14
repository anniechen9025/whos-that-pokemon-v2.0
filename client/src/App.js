import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatroom from './pages/Chatroom';
import Game from './pages/Game';
import Login from './pages/Login';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Signup from './pages/Signup';
import Pokedex from './pages/Pokedex';
import Profile from './pages/Profile';
import useToken from './utils/useToken';
import TestChat from './pages/TestChat';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  //! https://reactstrap.github.io/components/form/

  return (
    <Router>
      <Header />
      <Switch>
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/chatbox" component={TestChat} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={Signup} />
        </Wrapper>
        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
