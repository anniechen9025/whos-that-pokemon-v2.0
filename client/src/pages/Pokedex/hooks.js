import { useEffect, useState } from 'react';
import API from '../../utils/API';

//TODO:
//Pagination Links
//Render Buttons for each Link
// event handler for each button where targets name = chosen word for fetch
// render components for individual pokemon
//event handler to release alll pokemon

export function usePokedexLogic() {
  const [userPokemon, setUserPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    loadPokedex();
  }, []);

  useEffect(() => {
    if (userPokemon) {
      getPokemonData(userPokemon);
    }
  }, [userPokemon]);

  // API call to load list of all Pokemon attached to User
  function loadPokedex() {
    API.getPokemon()
      .then((res) => {
        const pokemonList = res.data[0].pokemon.map(({ name }) => name);
        console.log(pokemonList);
        //setUserPokemon(pokemonList);
      })
      .catch((err) => console.log(err));
  }
  return { userPokemon, pokemonData };

  // API call to fetch 3rd party API info on one pokemon
  function getPokemonData(pokemonName) {
    API.getPokedex(pokemonName)
      .then((res) => {
        console.log(res.data);
        setPokemonData(res.data);
      })
      .catch((err) => console.log(err));
  }

  function releasePokemon() {
    API.resetPokedex()
      .then((res) => {
        console.log(res.data);
        setUserPokemon(res.data);
      })
      .catch((err) => console.log(err));
  }
}
