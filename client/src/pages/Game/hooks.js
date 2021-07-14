import { useEffect, useState, useMemo, useCallback } from 'react';
import API from '../../utils/API';
import { useSpring } from 'react-spring';

// TODOS:
// Add loading pic for Pokemon Pic
// pull # of pokemon from initial fetch to use in
// pushed guessedPokemon to DB--- waiting on Routes to be completed.
// third hint fills in two blanks?

// function to return random item
function chooseRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

// hook to handle keydowns in game.
function useKeyHandlers(action) {
  const keyHandler = useCallback(
    (e) => {
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
  const [hint, setHint] = useState(0);
  const [counter, setCounter] = useState(60);
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [letterHint, setLetterHint] = useState('');
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
    if (counter > 0 && gameStarted) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [counter, gameStarted]);

  useEffect(() => {
    if (hint > 2) {
      const newLetterHint = randomPokemon
        .split('')
        .filter((letter) => !guessedLetters.includes(letter));
      setLetterHint(newLetterHint[chooseRandomIndex(newLetterHint.length)]);
    }
  }, [randomPokemon, hint, setLetterHint, guessedLetters]);

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

  function picBlur(hint) {
    switch (hint) {
      case 1:
        return 12;

      case 2:
        return 4;

      case 0:
        return 12;

      default:
        return 0;
    }
  }
  const styles = useSpring({ filter: `blur(${picBlur(hint)}px)` });

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
        setTotalPokemon(pokemonNames.length);
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
  };

  // calls fetch request to return single pokemon information
  function getPokemonInfo(chosenPokemon) {
    API.getPokemonPics(chosenPokemon)
      .then((res) => {
        console.log(res.data);
        setPokemonInfo(res.data);
        setPokemonPic(res.data.sprites.front_default);
      })
      .catch((err) => console.log(err));
  }
}
