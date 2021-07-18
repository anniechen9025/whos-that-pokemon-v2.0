import { useEffect, useState } from 'react';
import API from '../../utils/API';

//TODO:
// event handler for each button where targets name = chosen word for fetch
// render components for individual pokemon
//event handler to release alll pokemon

export function usePokedexLogic() {
  const [userPokemon, setUserPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(5);
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
    setLoading(false);
  }, []);

  // API call to load list of all Pokemon attached to User
  function loadPokedex() {
    API.getPokemon()
      .then((res) => {
        const pokemonList = res.data;
        console.log(res);
        setUserPokemon(pokemonList);
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

  return {
    userPokemon,
    pokemonData,
    loading,
    currentPokemon,
    currentPage,
    pokemonPerPage,
    paginate,
  };
}
