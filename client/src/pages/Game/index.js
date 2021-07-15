import React from 'react';
import { useGameLogic } from './hooks';
import { animated } from 'react-spring';
import './style.css';
import {
  Progress,
  Card,
  CardImg,
  CardTitle,
  CardText,
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
    visible,
    setVisible,
    guessedPokemon,
  } = useGameLogic();

  const onDismiss = () => setVisible(false);
  console.log(randomPokemon);
  console.log(gameWon);
  console.log(letterHint);
  console.log(guessedPokemon);

  return (
    <Container>
      <main>
        <section>
          {gameStarted && (
            <Col lg="3">
              <Card body className="text-center">
                <AnimatedCardImg
                  width="50%"
                  src={pokemonPic}
                  alt="Current Pokemon"
                  style={styles}
                />
                <CardTitle tag="h5">{displayString}</CardTitle>
                {!!hint && (
                  <Alert color="secondary" isOpen={visible} toggle={onDismiss}>
                    This is a <b>{pokemonInfo.types[0].type.name}</b> type
                    Pokemon.
                  </Alert>
                )}
                {!!hint && (
                  <Alert color="info" isOpen={visible} toggle={onDismiss}>
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
