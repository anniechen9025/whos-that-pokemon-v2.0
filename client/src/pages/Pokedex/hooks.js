import { useEffect, useState, useMemo, useCallback } from 'react';
import API from '../../utils/API';

export function usePokedexLogic() {
  const [userPokemon, setUserPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});

  function loadPokedex() {
    API.getPokemon()
      .then((res) => {
        console.log(res.data);
        const pokemonList = res.data.pokemon.name;
        setUserPokemon(pokemonList);
      })
      .catch((err) => console.log(err));
  }
  return { userPokemon };

  function getPokemonData(pokemonName) {
    API.getPokedex(pokemonName)
      .then((res) => {
        console.log(res.data);
        setPokemonData(res.data);
      })
      .catch((err) => console.log(err));
  }
}
