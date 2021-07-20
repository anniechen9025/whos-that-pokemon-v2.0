import React, { useEffect, useState } from 'react';
import './style.css';
import { Button, Row } from 'reactstrap';
import { usePokedexLogic } from './hooks';
import Pokemon from '../../components/Pokemon';

function Pokedex() {
  const { pokemonData, loading, releasePokemon, hasPokemon } =
    usePokedexLogic();
  console.log(pokemonData);
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
        [pagination?]
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
