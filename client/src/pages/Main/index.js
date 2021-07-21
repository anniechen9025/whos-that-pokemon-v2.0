import React, { useEffect, useState } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Buttons from '../../components/Button';
import './style.css';

function Main() {
  return (
    <div class="btn-group">
      {/* <div class="btn ball">
        <Buttons className="poke" text="Challenge">
          <div class="pokemon-ball"></div>
          <a>
            Challenge<span data-letters="GO!"></span>
            <span data-letters="GO!"></span>
          </a>
        </Buttons>
      </div> */}
      <div>
      <Jumbotron id = "main">
        <h1 className="display-3">Hello, Trainer!</h1>
        <p className="lead">This is a simple guideline to Who's That Pokemon.</p>
        <hr className="my-2" />
        <p>Navigate to different pages using the Navigation bar above.</p>
        <p>On the Game Page use your keyboard to guess all the pokemon from Generation One!</p>
        <p>Navigate to the Pokedex to view all your Pokemon or restart your game by releasing your pokemon.</p>
        <p>Connect with other users with our Chatbox feature!</p>
        <p>Or View your Trainer Rank or update your password at your Profile Page!</p>
        <br></br>
        <p className="lead">
          <Button href="/fun">Learn about Fun Fact!!</Button>
        </p>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Main;
