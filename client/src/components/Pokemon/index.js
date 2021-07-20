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

function Pokemon({ userPokemon = [], loading }) {
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
      {userPokemon.map((pokemon) => (
        <Row key={pokemon}>
          <Col sm="6" md="2">
            <Card className="mb3">
              <CardTitle>{pokemon}</CardTitle>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Pokemon;
