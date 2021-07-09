import { useEffect, useState, useMemo, useCallback } from 'react';
import API from '../../utils/API';

// TODOS:
// Add loading pic for Pokemon Pic
// reset GussedLetters so that blanks dont render on restart
// pushed guessedPokemon to DB
// add functionality to Hint button, so that each click set state of new hint.
// first hint shows type of pokemon
// second hint reduces blur of image
// third hint fills in two blanks?

// function to return random item
function chooseRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

// hook to handle keydowns in game.
function useKeyHandlers(action) {
  const keyHandler = useCallback(
    (e) => {
      console.log(e);
      action((prev) => {
        if (prev.includes(e.key)) {
          return prev;
        } else {
          return [...prev, e.key];
        }
      });
    },
    [action]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, [keyHandler]);
}

export function useGameLogic() {
  const [randomPokemon, setRandomPokemon] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [pokemonPic, setPokemonPic] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [guessedPokemon, setGuessedPokemon] = useState([]);
  const [firstHint, setFirstHint] = useState('');
  const [counter, setCounter] = useState(10);
  useKeyHandlers(setGuessedLetters);

  const displayString = useMemo(() => {
    return randomPokemon
      .split('')
      .map((letter) => {
        if (guessedLetters.includes(letter)) {
          return letter;
        } else {
          return '_';
        }
      })
      .join(' ');
  }, [randomPokemon, guessedLetters]);

  const gameWon = useMemo(
    () => randomPokemon === displayString.split(' ').join(''),
    [displayString, randomPokemon]
  );

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  useEffect(() => {
    if (gameStarted) {
      loadPokemon();
      setPokemonPic();
    }
  }, [gameStarted]);

  useEffect(() => {
    if (randomPokemon) {
      getPokemonInfo(randomPokemon);
    }
  }, [randomPokemon]);

  // calls fetch request to return all pokemon names
  function loadPokemon() {
    API.getPokemonList()
      .then((res) => {
        const pokemonNames = res.data.pokemon_species.map(({ name }) => name);
        const filteredPokemonNames = pokemonNames.filter(
          (p) => !guessedPokemon.includes(p)
        );
        let chosenPokemon = chooseRandomIndex(filteredPokemonNames.length);
        setRandomPokemon(filteredPokemonNames[chosenPokemon]);
      })
      .catch((err) => console.log(err));
  }
  return {
    randomPokemon,
    displayString,
    pokemonPic,
    gameStarted,
    setGameStarted,
    gameWon,
    firstHint,
    setFirstHint,
    counter,
  };

  // calls fetch request to return single pokemon information
  function getPokemonInfo(chosenPokemon) {
    API.getPokemonPics(chosenPokemon)
      .then((res) => {
        console.log(res.data);
        setPokemonPic(res.data.sprites.front_default);
        setFirstHint(res.data.types[0].type.name);
      })
      .catch((err) => console.log(err));
  }
}
