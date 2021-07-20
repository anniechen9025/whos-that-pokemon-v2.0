import React from 'react';
import { Button } from "../../components/Button";
import "./style.css";

function main() {
  return (

    // Ash & Pikachu Gif style
    <div className="gifcontainer">
      <img clasName="maingif"/>
      <h1>Who's That Pokémon?</h1>
      <p>Test your knowledge with our guess the Pokémon quiz!</p>
      <div className="gifbtn">
        <Button className="btns" 
        buttonStyle="btn--primary"
        buttonSize="btn--large">
          CHALLENGE
        </Button>
      </div>
    </div>
  )
}

export default main

