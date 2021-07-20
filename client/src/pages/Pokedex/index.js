import React, { useEffect, useState } from 'react';
import './style.css';
import { Button } from 'reactstrap';
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
    releasePokemon,
    hasPokemon,
  } = usePokedexLogic();
  console.log(userPokemon);

  return (
    <div>
      {!hasPokemon && (
        <div className="bg-light mt-3 container-md d-flex justify-content-center">
          <p>
            You don't have any Pokemon! Please play the game first to catch some
            pokemon to view them!
          </p>
        </div>
      )}
      <div>
        <Pokemon userPokemon={currentPokemon} loading={loading} />
      </div>
      <div className="container-md d-flex justify-content-center mt-5">
        <Pagination
          pokemonPerPage={pokemonPerPage}
          totalPokemon={userPokemon.length}
          paginate={paginate}
        />
      </div>
      <div className="container-md d-flex justify-content-center mt-5">
        <Button
          onClick={() => {
            releasePokemon();
          }}
        >
          DELETE ALL POKEMON AND RESET POKEDEX
        </Button>
      </div>
    </div>
  );
}

export default Pokedex;
