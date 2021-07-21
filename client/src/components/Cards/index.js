import React from 'react';
import CardItem from '../CardsItem';
import './style.css';
import {Link} from 'react-router-dom';
import Cubone from "../../assets/cubone.png"
import Ninetails from "../../assets/ninetails.png"
import Jigglypuff from "../../assets/jijjlypuff.png"
import Meowth from "../../assets/meowth.png"
import Psyduck from "../../assets/psyduck.png"
import Slowpoke from "../../assets/slowpoke.png"

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Cubone}
              text='When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.'
              label='Cubone'
              path=''
            />
            <CardItem
              src={Ninetails}
              text='It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.'
              label='Ninetails'
            />
            <CardItem
              src={Jigglypuff}
              text='Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.'
              label='Jigglypuff'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            src={Meowth}
              text='It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.'
              label='Meowth'
              href='https://www.pokemon.com/us/pokedex/meowth'
            />
            <CardItem
              src={Psyduck}
              text='Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.'
              label='Psyduck'
            />
            <CardItem
              src={Slowpoke}
              text='Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either.'
              label='Slowpoke'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;