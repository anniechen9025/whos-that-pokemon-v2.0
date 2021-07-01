import React, { useEffect, useState } from "react";
import API from "../../utils/API";


function Game() {

  useEffect(() => {
    loadPokemon()
  }, [])

  function loadPokemon() {
    API.getPokemonList()
      .then(res => 
        console.log(res.data)
      )
      .catch(err => console.log(err));

  };

    return (
        <div>
    <header>
      <div class="large-font">Who's That Pokemon!</div>
    </header>

    <main>
      <section>
        <div class="card word-guess">
          <div class="pokemonPic"></div>
          <div class="large-font word-blanks">_ _ _ _ _ _ _</div>
        </div>
        <button class="start-button">Start</button>
      </section>

      <section>
        <div class="card results">
          <div class="win-loss-container">
            <div>
              <h2>Pokemon Caught: <span class="win">0 </span> </h2>
            </div>
          </div>
          <div class="card timer">
            <div class="timer-text">
              <div class="large-font timer-count">30</div>
              <h3>seconds remaining</h3>
            </div>

          </div>
        </div>
      </section>
    </main>
        </div>
    )
}


export default Game;
