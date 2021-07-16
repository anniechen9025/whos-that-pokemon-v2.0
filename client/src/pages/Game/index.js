import React from 'react';
import { useGameLogic } from './hooks';
import { animated } from 'react-spring';
import './style.css';
import {
  Progress,
  Card,
  CardImg,
  CardTitle,
  Container,
  Col,
  Button,
  Alert,
} from 'reactstrap';

const AnimatedCardImg = animated(CardImg);

function Game(props) {
  const {
    randomPokemon,
    displayString,
    pokemonPic,
    gameStarted,
    setGameStarted,
    gameWon,
    hint,
    setHint,
    counter,
    setCounter,
    totalPokemon,
    setGuessedLetters,
    pokemonInfo,
    loadPokemon,
    styles,
    letterHint,
    hint1Visible,
    hint2Visible,
    guessedPokemon,
    userPokemon,
    onDismiss1,
    onDismiss2,
  } = useGameLogic();

  console.log(randomPokemon);
  console.log(gameWon);
  console.log(letterHint);
  console.log(guessedPokemon);

  return (
    <Container>
      <main className="content">
        <section>
          {gameStarted && (
            <Col sm="12" md={{ size: 4, offset: 4 }}>
              <Card body className="text-center">
                <AnimatedCardImg
                  className="pokemon"
                  src={pokemonPic}
                  alt="Current Pokemon"
                  style={styles}
                />
                <CardTitle tag="h5">{displayString}</CardTitle>
                {!!hint && hint > 1 && (
                  <Alert
                    color="secondary"
                    isOpen={hint1Visible}
                    toggle={onDismiss1}
                  >
                    This is a <b>{pokemonInfo.types[0].type.name}</b> type
                    Pokemon.
                  </Alert>
                )}
                {!!hint && hint > 2 && (
                  <Alert color="info" isOpen={hint2Visible} toggle={onDismiss2}>
                    A possible letter is: <b>{letterHint}</b>.
                  </Alert>
                )}
              </Card>
            </Col>
          )}
          <Button
            className="start-button"
            onClick={() => {
              loadPokemon();
              setGameStarted(true);
              setGuessedLetters([]);
              setCounter(60);
              setHint(0);
            }}
          >
            Start
          </Button>
          {gameStarted && (
            <>
              <Button
                className="hint-button"
                onClick={() => {
                  setHint(hint + 1);
                }}
              >
                Hint
              </Button>
            </>
          )}
        </section>

        <section>
          <div className="card results">
            <div className="win-loss-container">
              <div>
                <h2>
                  <div className="text-center">
                    Pokemon Caught: {userPokemon} of {totalPokemon}
                  </div>
                  <Progress value={userPokemon} max={totalPokemon} />{' '}
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
