import React from 'react';
import spinner from '../../assets/loading.gif';
import { CardBody, CardImg, CardTitle, Col } from 'reactstrap';
import './style.css';

function Pokemon({ pokemon = [], loading }) {
  if (loading) {
    return (
      <div>
        <div>
          <img src={spinner} alt={'Loading Spinner'} />
        </div>
        <div>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column-reverse align-items-center justify-content-center align-content-center">
      {pokemon &&
        pokemon.length > 0 &&
        pokemon.map((pokemon) => {
          return (
            <Col sm="12" md="4" className="mb-1 mt-1" key={pokemon.id}>
              <div>
                <div className="m-2">
                  <div className={pokemon.type}>
                    <div>#{pokemon.pk_id}</div>
                    <CardTitle className="text-uppercase fs-4">
                      {pokemon.name}
                    </CardTitle>
                    <div className="pokemonBg">
                      <CardImg src={pokemon.Image_url} alt="Card image cap" />
                    </div>
                    <CardBody>
                      <div className="pokemonType d-flex flex-row justify-content-center align-items-center offset-5">
                        <div className="d-flex flex-row align-items-center">
                          <span className="text-uppercase">{pokemon.type}</span>
                        </div>
                      </div>
                      <p>Height: {pokemon.height}</p>
                      <p>Weight: {pokemon.weight}</p>
                    </CardBody>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
    </div>
  );
}

export default Pokemon;
