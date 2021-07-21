import { useEffect, useState, useMemo, useCallback } from 'react';
import API from '../../utils/API';

// functions exports logic to index.js of Pokedex page.
export function usePokedexLogic() {
  const [userPokemon, setUserPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState();
  const [displayPokemon, setDisplayPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasPokemon = useMemo(
    () => userPokemon.length > 0,
    [userPokemon.length]
  );

  // API call to load list of all Pokemon attached to User

  const loadPokedex = useCallback(() => {
    API.getPokemon()
      .then((res) => {
        const pokemonList = res.data[0].pokemon.map(({ name }) => name);
        setUserPokemon(pokemonList);
      })
      .catch((err) => console.log(err));
  }, [setUserPokemon]);

  // API call to load all pokemon data stored to DB

  const loadPokemonInfo = useCallback(() => {
    API.getGeneration()
      .then((res) => {
        console.log(res.data[0].name);
        setPokemonData(res.data);
        console.log(pokemonData);
      })
      .catch((err) => console.log(err));
  }, [pokemonData, setPokemonData]);

  //API call to reset all pokemon attached to User ID
  const releasePokemon = useCallback(() => {
    API.resetPokedex()
      .then((res) => {
        console.log(res.data.pokemon);
        setUserPokemon(res.data.pokemon);
      })
      .catch((err) => console.log(err));
  }, [setUserPokemon]);

  //loads both API calls on pageload
  useEffect(() => {
    setLoading(true);
    loadPokedex();
    loadPokemonInfo();
    setLoading(false);
  }, []);

  //filtering Users Pokemon Again all PokemonData to
  //determine which to display
  // useEffect(() => {
  //   const pokemonToDisplay = () => {
  //     let data = [];
  //     userPokemon.forEach((pokemon) => {
  //       console.log(pokemon);
  //       for (let i = 0; i < pokemonData.length; i++) {
  //         let dataName = pokemonData[i].name;
  //         if (dataName === pokemon) {
  //           //console.log(pokemonData[i]);
  //           data.push(pokemonData[i]);
  //         }
  //       }
  //     });
  //     //console.log(uniqueData);
  //     setDisplayPokemon(data);
  //   };
  // }, [userPokemon, pokemonData, setDisplayPokemon]);

  return {
    userPokemon,
    pokemonData,
    loading,
    releasePokemon,
    hasPokemon,
    displayPokemon,
  };
}
