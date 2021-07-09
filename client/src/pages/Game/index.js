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
    firstHint,
    setFirstHint,
    counter,
  } = useGameLogic();
  console.log(randomPokemon);
  console.log(gameWon);
  console.log(firstHint);

  return (
    <div>
      <main>
        <section>
          {gameStarted && (
            <div className="card word-guess">
              <div className="pokemonPic">
                <img src={pokemonPic} alt="Current Pokemon"></img>
              </div>
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
          {gameStarted && firstHint && (
            <>
              <button
                className="hint-button"
                onClick={() => {
                  setFirstHint(firstHint);
                }}
              >
                Hint
              </button>
              <div>
                This is a <b>{firstHint}</b> type Pokemon.
              </div>
            </>
          )}
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
                <div className="large-font timer-count">
                  Countdown: {counter === 0 ? 'Time over' : counter}
                </div>
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
