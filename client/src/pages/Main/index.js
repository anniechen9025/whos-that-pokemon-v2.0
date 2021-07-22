
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "../../components/Button";
import Cards from "../../components/Cards/index";
import "./style.css";

function Main(props) {
  const history = useHistory();
  const redirect1 = () => history.push('/game');
  const redirect3 = () => history.push('/sub');

  return (

    // Ash & Pikachu Gif style
    <div className="gifcontainer">
      <img clasName="maingif" />
      <h1>Who's That Pokémon?</h1>
      <p>Test your knowledge with our guess the Pokémon quiz!</p>
      <div className="gifbtn" onClick={redirect1}>
        <Button />
      </div>
      <br></br>
      <button onClick={redirect3}>GUIDELINES</button>
    </div>
  )
}

export default Main;

