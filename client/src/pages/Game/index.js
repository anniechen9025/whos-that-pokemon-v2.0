import React from 'react';
import { useGameLogic } from './hooks';
import {
  Progress,
  Card,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

function Game(props) {
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
    setCounter,
    totalPokemon,
    setGuessedLetters,
  } = useGameLogic();

  return (
    <Container>
      <main>
        <section>
          {gameStarted && (
            <Col lg="3">
              <Card body className="text-center">
                <CardImg width="50%" src={pokemonPic} alt="Current Pokemon" />
                <CardTitle tag="h5">{displayString}</CardTitle>
              </Card>
            </Col>
          )}
          <button
            className="start-button"
            onClick={() => {
              setGameStarted(!gameStarted);
              setGuessedLetters([]);
              setCounter(60);
            }}
          >
            Start
          </button>
          {gameStarted && (
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
                  <div className="text-center">
                    Pokemon Caught: 50 of {totalPokemon}
                  </div>
                  <Progress value={50} max={totalPokemon} />{' '}
                </h2>
              </div>
            </div>
            <div className="card timer">
              <div className="timer-text">
                <div className="large-font timer-count">Countdown:</div>
                <h3>
                  {' '}
                  {counter === 0 ? 'Time over' : counter + ' Seconds Remaining'}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default Game;
