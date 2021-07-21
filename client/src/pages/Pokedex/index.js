import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { usePokedexLogic } from './hooks';
import Pokemon from '../../components/Pokemon';

function Pokedex() {
  const {
    userPokemon,
    pokemonData,
    loading,
    releasePokemon,
    hasPokemon,
    displayPokemon,
  } = usePokedexLogic();
  console.log(pokemonData);
  console.log(userPokemon);
  //console.log(displayPokemon);
  return (
    <div>
      {!hasPokemon && (
        <div className="bg-light mt-5 text-center">
          <p>
            You don't have any Pokemon! Please play the game first to catch some
            pokemon to view them!
          </p>
        </div>
      )}

      <Pokemon pokemon={pokemonData} loading={loading} />

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
