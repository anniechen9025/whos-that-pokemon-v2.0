import React from "react";
import { BroserRouter as Router, Route } from "react-router-dom;"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatroom from "./pages/Chatroom";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Pokedex from "./pages/Pokedex";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/chatbox" component={Chatroom} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/update" component={Profile} />
        </Wrapper>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
