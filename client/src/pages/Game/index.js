import React from 'react';
import { useGameLogic } from './hooks';
import { animated } from 'react-spring';
import './style.css';
import {
  Progress,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
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
    lastCaughtPokemon,
  } = useGameLogic();

  console.log(randomPokemon);
  console.log(gameWon);
  console.log(guessedPokemon);
  console.log(pokemonInfo);

  return (
    <Container>
      <main className="content">
        <section>
          {gameStarted && (
            <Col sm="12" md={{ size: 3, offset: 4 }} className="mt-3">
              <Card body className="text-center bg-light">
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {counter === 0 ? 'Time over' : counter + ' Seconds Remaining'}
                </CardSubtitle>
                <AnimatedCardImg
                  className="pokemon"
                  src={pokemonPic}
                  alt="Current Pokemon"
                  style={styles}
                />
                <CardTitle tag="h5">{displayString}</CardTitle>
                {!!hint && (
                  <Alert isOpen={hint1Visible} toggle={onDismiss1}>
                    This is a <b>{pokemonInfo.types[0].type.name}</b> type
                    Pokemon.
                  </Alert>
                )}
                {!!hint && hint > 2 && (
                  <Alert color="info" isOpen={hint2Visible} toggle={onDismiss2}>
                    A possible letter is:{' '}
                    <span className="text-uppercase fw-bold fs-5">
                      {letterHint}
                    </span>
                    .
                  </Alert>
                )}
              </Card>
            </Col>
          )}
          {counter === 0 && (
            <Col
              sm="12"
              md={{ size: 3, offset: 4 }}
              className="mt-5 d-flex align-items-center p-0"
            >
              <Card body className="text-center bg-light">
                <p>
                  <span className="text-uppercase fw-bold">TIME'S UP!!</span>{' '}
                  The pokemon got away. Please try again.
                </p>
              </Card>
            </Col>
          )}

          {!gameStarted && (
            <Col sm="12" md={{ size: 3, offset: 4 }} className="mt-5">
              <Card body className="text-center bg-light">
                <p>
                  {!!lastCaughtPokemon && (
                    <>
                      You caught{' '}
                      <span className="text-uppercase fw-bold">
                        {lastCaughtPokemon}
                      </span>
                      !!{' '}
                    </>
                  )}
                  Check your Pokedex to see your pokemon, or continue playing to
                  catch more!
                </p>
              </Card>
            </Col>
          )}

          <Col sm="12" md={{ size: 3, offset: 4 }} className="btncont">
            <Button
              className="start-button"
              onClick={() => {
                loadPokemon();
                setGameStarted(true);
                setGuessedLetters([]);
                setCounter(20);
                setHint(0);
              }}
            >
              Start
            </Button>
            {gameStarted && (
              <>
                <Button
                  className="hint-button mb-3"
                  onClick={() => {
                    setHint(hint + 1);
                  }}
                >
                  Hint
                </Button>
              </>
            )}
          </Col>
          {gameStarted && (
            <Col sm="12" md={{ size: 3, offset: 4 }}>
              <h5>
                <div className="text-center">
                  Pokemon Caught: {userPokemon} of {totalPokemon}
                </div>
                <Progress value={userPokemon} max={totalPokemon} />{' '}
              </h5>
            </Col>
          )}
        </section>
      </main>
    </Container>
  );
}

export default Game;
