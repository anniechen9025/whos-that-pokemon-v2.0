import React from 'react';
import { useGameLogic } from './hooks';

function Game() {
  const {
    randomPokemon,
    displayString,
    pokemonPic,
    gameStarted,
    setGameStarted,
    gameWon,
  } = useGameLogic();
  console.log(randomPokemon);
  console.log(displayString);
  console.log(pokemonPic);
  console.log(gameWon);

  return (
    <div>
      <main>
        <section>
          {gameStarted && (
            <div className="card word-guess">
              <div className="pokemonPic"></div>
              <div className="large-font word-blanks">{displayString}</div>
            </div>
          )}
          <button
            className="start-button"
            onClick={() => {
              setGameStarted(!gameStarted);
            }}
          >
            Start
          </button>
        </section>

        <section>
          <div className="card results">
            <div className="win-loss-container">
              <div>
                <h2>
                  Pokemon Caught: <span className="win">0 </span>{' '}
                </h2>
              </div>
            </div>
            <div className="card timer">
              <div className="timer-text">
                <div className="large-font timer-count">30</div>
                <h3>seconds remaining</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Game;
