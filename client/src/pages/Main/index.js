import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import './style.css'

function Main() {
  return (
      <div class="btn-group">
        <div class="btn ball">
          <Button className="poke" text="Challenge">
            <div class="pokemon-ball"></div>
            <a>
              Challenge<span data-letters="GO!"></span>
              <span data-letters="GO!"></span>
            </a>
          </Button>
        </div>
      </div>

    // <Container>
    // <LeftContainer>
    // <img scr={pokemonLogo} alt="pokemon logo" />
    // </LeftContainer>
    // </Container>
  );
}

export default Main;
