import {useEffect, useState, useMemo, useCallback } from "react";
import API from "../../utils/API";

function chooseRandomIndex (length) {
   return  Math.floor(Math.random() * length)
} 

export function useGameLogic () {
    const [ randomPokemon, setRandomPokemon] = useState("");
    const [ guessedLetters, setGuessedLetters ] = useState([]);
      const displayString = useMemo(() => {
        return randomPokemon.split("").map(letter => {
            if (guessedLetters.includes(letter)) {
                return letter;
            } else {
                return "_";
            }
        }).join(" ");
      }, [randomPokemon, guessedLetters])
      const keyHandler = useCallback ((e) => {
          console.log(e);
          setGuessedLetters(prev => {
              if (prev.includes(e.key)) {
                    return prev;
              } else {
                  return [...prev, e.key]
              }
          })
      }, [setGuessedLetters])
    useEffect(() => {
        loadPokemon()
      }, [])

      useEffect (() => {
        window.addEventListener("keydown", keyHandler)
        return () => { window.removeEventListener("keydown", keyHandler)}    
      })
    
      function loadPokemon() {
        API.getPokemonList()
          .then(res => 
            { 
                console.log(res.data);
               const pokemonNames = res.data.pokemon_species.map(({name}) => name);
               const index = chooseRandomIndex(pokemonNames.length);
               setRandomPokemon(pokemonNames[index])
            }
          )
          .catch(err => console.log(err));
      };
      return{randomPokemon, displayString}
}