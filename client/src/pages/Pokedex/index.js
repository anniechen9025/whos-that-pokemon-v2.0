import React, { useEffect, useState } from 'react';
import './style.css';
import { usePokedexLogic } from './hooks';
import Pokemon from '../../components/Pokemon';
import Pagination from '../../components/Pagination';

function Pokedex() {
  const {
    userPokemon,
    pokemonData,
    loading,
    currentPokemon,
    currentPage,
    pokemonPerPage,
    paginate,
  } = usePokedexLogic();
  console.log(userPokemon);

  return (
    <div>
      <Pokemon userPokemon={currentPokemon} loading={loading} />
      <Pagination
        pokemonPerPage={pokemonPerPage}
        totalPokemon={userPokemon.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Pokedex;
