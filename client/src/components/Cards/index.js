import React from 'react';
import CardItem from '../CardsItem';
import './style.css';
import Cubone from "../../assets/cubone.png"
import Ninetails from "../../assets/ninetails.png"
import Jigglypuff from "../../assets/jijjlypuff.png"
import Meowth from "../../assets/meowth.png"
import Psyduck from "../../assets/psyduck.png"
import Slowpoke from "../../assets/slowpoke.png"
import Farfetchd from "../../assets/farfetchd.png"
import Magikarp from "../../assets/magikarp.png"
import Ditto from "../../assets/ditto.png"

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Magikarp}
              text='It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.'
              label='Magikarp'
            />
            <CardItem
              src={Slowpoke}
              text='Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either.'
              label='Slowpoke'
            />
            <CardItem
              src={Psyduck}
              text='Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.'
              label='Psyduck'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            src={Meowth}
              text='It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.'
              label='Meowth'
            />
            <CardItem
              src={Jigglypuff}
              text='Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.'
              label='Jigglypuff'
            />
            <CardItem
              src={Ninetails}
              text='It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.'
              label='Ninetails'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Farfetchd}
              text='The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.'
              label="Farfetch'd"
            />
            <CardItem
              src={Cubone}
              text='When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.'
              label='Cubone'
            />
            <CardItem
              src={Ditto}
              text='It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.'
              label='Ditto'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;