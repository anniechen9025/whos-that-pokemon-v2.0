import React from 'react';
import spinner from '../../assets/loading.gif';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from 'reactstrap';
import './style.css';

function Pokemon({ userPokemon = [], loading, pokemonData }) {
  // console.log(pokemonData);
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
    <div>
      {userPokemon &&
        userPokemon.length > 0 &&
        userPokemon.map((pokemon) => {
          console.log(pokemon);
          return (
            <Row key={pokemon.id}>
              <Col sm="6" md="2">
                <div className="m-2 px-2">
                  <div className={pokemon.type}>
                    <CardTitle className="text-uppercase">
                      {pokemon.name}
                    </CardTitle>
                    <img
                      width="100%"
                      src={pokemon.Image_url}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <p>Height: {pokemon.height}</p>
                      <p>Weight: {pokemon.weight}</p>
                    </CardBody>
                  </div>
                </div>
              </Col>
            </Row>
          );
        })}
    </div>
  );
}

export default Pokemon;
