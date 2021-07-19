import { useEffect, useState, useMemo, useCallback } from 'react';
import API from '../../utils/API';
import { useSpring } from 'react-spring';

// TODOS:
// Add loading pic for Pokemon Pic
// if game won, start game, choose another pokemon
//if time over end game
//store guessedPokemon array in localstorage? otherwise when browser refresh array is emptied and caught pokemon would be refreshed

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
  const [counter, setCounter] = useState(20);
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [letterHint, setLetterHint] = useState('');
  const [hint1Visible, setHint1Visible] = useState(true);
  const [hint2Visible, setHint2Visible] = useState(true);
  const [userPokemon, setUserPokemon] = useState(0);
  const onDismiss1 = () => setHint1Visible(false);
  const onDismiss2 = () => setHint2Visible(false);
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
    if (gameWon && !!randomPokemon) {
      postGuessedPokemon(randomPokemon);
      setGuessedPokemon((prev) => [...prev, randomPokemon]);
      putPokemonAmount(userPokemon + 1);
      postPokemonData(pokemonInfo);
      console.log(pokemonInfo);
      setRandomPokemon('');
      setGameStarted(false);
    }
  }, [
    setRandomPokemon,
    gameWon,
    postGuessedPokemon,
    setGuessedPokemon,
    randomPokemon,
    putPokemonAmount,
    userPokemon,
    setGameStarted,
    postPokemonData,
    pokemonInfo,
  ]);

  useEffect(() => {
    if (counter > 0 && gameStarted) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [counter, gameStarted]);

  useEffect(() => {
    if (counter === 0 && gameStarted) {
      setGameStarted(false);
    }
  }, [counter, gameStarted, setGameStarted]);

  useEffect(() => {
    if (hint > 2) {
      const newLetterHint = randomPokemon
        .split('')
        .filter((letter) => !guessedLetters.includes(letter));
      setLetterHint(newLetterHint[chooseRandomIndex(newLetterHint.length)]);
    }
  }, [randomPokemon, hint, setLetterHint, guessedLetters]);

  useEffect(() => {
    if (gameStarted && randomPokemon === '') {
      loadPokemon();
      getPokemonAmount();
    }
  }, [gameStarted, randomPokemon, loadPokemon, getPokemonAmount]);

  useEffect(() => {
    if (gameStarted && pokemonInfo.name !== randomPokemon) {
      getPokemonInfo(randomPokemon);
    }
  }, [gameStarted, randomPokemon, pokemonInfo, getPokemonInfo]);

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

  //calls fetch request to return all pokemon names
  function loadPokemon() {
    API.getPokemonList()
      .then((res) => {
        //console.log(res);
        const pokemonNames = res.data.pokemon_species.map(({ name }) => name);
        const filteredPokemonNames = pokemonNames.filter(
          (p) => !guessedPokemon.includes(p)
        );
        let chosenPokemon = chooseRandomIndex(filteredPokemonNames.length);
        setRandomPokemon(filteredPokemonNames[chosenPokemon]);
        //console.log(pokemonNames.length);
        setTotalPokemon(pokemonNames.length);
      })
      .catch((err) => console.log(err));
  }
  // const loadPokemon = useCallback(() => {
  //   API.getPokemonList()
  //     .then((res) => {
  //       console.log(res);
  //       const pokemonNames = res.data.pokemon_species.map(({ name }) => name);
  //       const filteredPokemonNames = pokemonNames.filter(
  //         (p) => !guessedPokemon.includes(p)
  //       );
  //       let chosenPokemon = chooseRandomIndex(filteredPokemonNames.length);
  //       setRandomPokemon(filteredPokemonNames[chosenPokemon]);
  //       //console.log(pokemonNames.length);
  //       setTotalPokemon(pokemonNames.length);
  //     })
  //     .catch((err) => console.log(err));
  // }, [
  //   pokemonNames,
  //   filteredPokemonNames,
  //   chosenPokemon,
  //   chooseRandomIndex,
  //   setRandomPokemon,
  //   setTotalPokemon,
  // ]);
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
    hint1Visible,
    hint2Visible,
    guessedPokemon,
    userPokemon,
    onDismiss1,
    onDismiss2,
  };

  // calls fetch request to return single pokemon information
  function getPokemonInfo(chosenPokemon) {
    API.getPokemonPics(chosenPokemon)
      .then((res) => {
        setPokemonInfo(res.data);
        console.log(pokemonInfo);
        setPokemonPic(res.data.sprites.other.dream_world.front_default);
      })
      .catch((err) => console.log(err));
  }

  // calls API to post guessed pokemon to DB
  function postGuessedPokemon(name) {
    console.log(name);
    API.postGameResult({ name: name })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  // calls API to update # of pokemon a user has caught
  function putPokemonAmount(number) {
    API.increasePokemonAmount({ pokemon_amount: number })
      .then((res) => {
        console.log(res.data.pokemon_amount);
        setUserPokemon(res.data.pokemon_amount);
      })
      .catch((err) => console.log(err));
  }

  // function to post pokemonData to DB to use in pokedex
  function postPokemonData(data) {
    console.log(data);
    const name = data.name;
    const type = data.types[0].type.name;
    const height = data.height;
    const weight = data.weight;
    const id = data.id;
    // console.log(name);
    // console.log(type);
    // console.log(height);
    // console.log(weight);
    // console.log(id);
    // console.log(data.name);
    API.createGeneration({
      name: name,
      type: type,
      height: height,
      weight: weight,
      pk_id: id,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  // calls APi to return # of pokemon a user has caught
  function getPokemonAmount() {
    API.getUserInfo()
      .then((res) => {
        console.log(res.data.pokemon_amount);
        setUserPokemon(res.data.pokemon_amount);
      })
      .catch((err) => console.log(err));
  }
}
