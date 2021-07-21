import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import Game from './pages/Game';
import Login from './pages/Login';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Signup from './pages/Signup';
import Pokedex from './pages/Pokedex';
import Profile from './pages/Profile';
import useToken from './utils/useToken';
import TestChat from './pages/TestChat';


const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div>
        <Navbar2 />
        <Switch>
          <Wrapper>
            <Route exact path="/login" render={() => <Login setToken={setToken} token = {token} />} />
            <Route exact path="/signup" component={Signup} />
          </Wrapper>
          <Footer />
        </Switch>
      </div>);
  }



  //! https://reactstrap.github.io/components/form/
  return (
    <>
      <Navbar />
      <Switch>
        {/* <Route exact path="/menu" component={Menu} /> */}
        <Route exact path="/game" component={Game} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Wrapper>
          <Route exact path="/" component={Menu} />
          <Route exact path="/chatbox" component={TestChat} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={Signup} />
        </Wrapper>
        <Footer />
      </Switch>
    </>
  );
}

export default App;
