import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import './style.css';

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
<<<<<<< HEAD
        </Button>
      </div>
    </div>

    // <Container>
=======
        </Button>{/* // <Container>
>>>>>>> fdbafb9d16522ef10b9503bf7dd7a844920552da
    // <LeftContainer>
    // <img scr={pokemonLogo} alt="pokemon logo" />
    // </LeftContainer>
    // </Container> */}
      </div>
    </div>

  );
}

export default Main;
