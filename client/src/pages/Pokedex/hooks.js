import { useEffect, useState } from 'react';
import API from '../../utils/API';

//TODO:
//show component if userPokemon is zero or null
// render components for individual pokemon

export function usePokedexLogic() {
  const [userPokemon, setUserPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(5);
  const [hasPokemon] = useState(false);
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = userPokemon.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    loadPokedex();
    loadPokemonInfo();
    setLoading(false);
  }, []);

  // API call to load list of all Pokemon attached to User
  function loadPokedex() {
    API.getPokemon()
      .then((res) => {
        const pokemonList = res.data;
        setUserPokemon(pokemonList);
      })
      .catch((err) => console.log(err));
  }

  // API call to load all pokemon data stored to DB
  function loadPokemonInfo() {
    API.getGeneration()
      .then((res) => {
        console.log(res);
        setPokemonData(res);
      })
      .catch((err) => console.log(err));
  }

  //API call to reset all pokemon attached to User ID
  function releasePokemon() {
    API.resetPokedex()
      .then((res) => {
        console.log(res.data);
        setUserPokemon(res.data);
      })
      .catch((err) => console.log(err));
  }

  // API to update # of pokemon a user has caught
  function putPokemonAmount(number) {
    API.increasePokemonAmount({ pokemon_amount: number })
      .then((res) => {
        console.log(res.data.pokemon_amount);
        setUserPokemon(res.data.pokemon_amount);
      })
      .catch((err) => console.log(err));
  }

  return {
    userPokemon,
    pokemonData,
    loading,
    currentPokemon,
    currentPage,
    pokemonPerPage,
    paginate,
    releasePokemon,
    putPokemonAmount,
    hasPokemon,
  };
}
