import { useEffect, useState, useMemo, useCallback } from 'react';
import API from '../../utils/API';

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

function chooseRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

export function useGameLogic() {
  const [randomPokemon, setRandomPokemon] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [pokemonPic, setPokemonPic] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [guessedPokemon, setGuessedPokemon] = useState([]);
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
    if (gameStarted) {
      loadPokemon();
    }
  }, [gameStarted]);

  useEffect(() => {
    if (randomPokemon) {
      getPokemonInfo(randomPokemon);
    }
  }, [randomPokemon]);

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
  };

  function getPokemonInfo(chosenPokemon) {
    API.getPokemonPics(chosenPokemon)
      .then((res) => {
        console.log(res.data);
        setPokemonPic(res.data.sprites.front_default);
      })
      .catch((err) => console.log(err));
  }
}
