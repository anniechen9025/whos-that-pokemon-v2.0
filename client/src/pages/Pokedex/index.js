import React, { useEffect, useState } from 'react';
import './style.css';
import { usePokedexLogic } from './hooks';

function Pokedex() {
  const { userPokemon } = usePokedexLogic();
  console.log(userPokemon);

  return (
    <div className="pokedexContainer">
      <div className="pokedex">
        <div className="left-container">
          <div className="left-container__top-section">
            <div className="top-section__blue"></div>
            <div className="top-section__small-buttons">
              <div className="top-section__red"></div>
              <div className="top-section__yellow"></div>
              <div className="top-section__green"></div>
            </div>
          </div>
          <div className="left-container__main-section-container">
            <div className="left-container__main-section">
              <div className="main-section__white">
                <div className="main-section__black">
                  <div className="main-screen hide">
                    <div className="screen__header">
                      <span className="poke-name"></span>
                      <span className="poke-id"></span>
                    </div>
                    <div className="screen__image">
                      <img src="#" className="poke-front-image" alt="front" />
                      <img src="#" className="poke-back-image" alt="back" />
                    </div>
                    <div className="screen__description">
                      <div className="stats__types">
                        <span className="poke-type-one"></span>
                        <span className="poke-type-two"></span>
                      </div>
                      <div className="screen__stats">
                        <p className="stats__weight">
                          weight: <span className="poke-weight"></span>
                        </p>
                        <p className="stats__height">
                          height: <span className="poke-height"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-container__controllers">
                <div className="controllers__d-pad">
                  <div className="d-pad__cell top"></div>
                  <div className="d-pad__cell left"></div>
                  <div className="d-pad__cell middle"></div>
                  <div className="d-pad__cell right"></div>
                  <div className="d-pad__cell bottom"></div>
                </div>
                <div className="controllers__buttons">
                  <div className="buttons__button">B</div>
                  <div className="buttons__button">A</div>
                </div>
              </div>
            </div>
            <div className="left-container__right">
              <div className="left-container__hinge"></div>
              <div className="left-container__hinge"></div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-container__black">
            <div className="right-container__screen"></div>
          </div>
          <div className="right-container__buttons">
            <div className="innerContainer">
              <button className="left-button">Prev</button>
              <button className="right-button">Next</button>
            </div>
            <button className="reset-button">Release All Your Pokemon</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
