import { useEffect, useState, useMemo, useCallback } from 'react';
import API from '../../utils/API';

//TODO:
// render components for individual pokemon

export function usePokedexLogic() {
  const [userPokemon, setUserPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(5);
  const hasPokemon = useMemo(
    () => userPokemon.length > 0,
    [userPokemon.length]
  );
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

  const loadPokemonInfo = useCallback(() => {
    API.getGeneration()
      .then((res) => {
        console.log(res.data);
        setPokemonData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //API call to reset all pokemon attached to User ID
  function releasePokemon() {
    API.resetPokedex()
      .then((res) => {
        console.log(res.data.pokemon);
        setUserPokemon(res.data.pokemon);
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
    hasPokemon,
  };
}
