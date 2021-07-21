import React from 'react';
import Cards from "../../components/Cards/index";
import "./style.css";

function menu() {
    return (
        <div className="cards">
            <h1>Pokemon Backstory</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <Cards />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default menu

// import React, { useState } from 'react';
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
// } from 'reactstrap';
// import "./style.css";

// const items = [
//     {
//         src: 'image/snorlax.jpg',
//         altText: 'What is the laziest pokemon?',
//         caption: 'Snorlax'
//     },
//     {
//         src: 'image/satoshi.jpg',
//         altText: 'Who made Pokemon?',
//         caption: 'Satoshi Tajiri'
//     },
//     {
//         src: 'image/legendary.jpg',
//         altText: 'What are pokemon that can not evlove?',
//         caption: 'Legendary'
//     },
//     {
//         src: 'image/types.webp',
//         altText: 'How many types of pokemon are there?',
//         caption: '18'
//     },
//     {
//         src: 'image/sunandmoon.jpg',
//         altText: 'What are the newest pokemon games?',
//         caption: 'Sun and Moon'
//     },
//     {
//         src: 'image/003.webp',
//         caption: 'Pokemon Leaf Green and Heart Gold'
//     },
//     {
//         src: 'image/001.webp',
//         altText: 'How many different pokemon are there?',
//         caption: "in the 800's"
//     },
//     {
//         src: 'image/ash.jpg',
//         altText: 'What is the main character in all the pokemon movies and shows?',
//         caption: 'Ash'
//     },
//     {
//         src: 'image/mew.png',
//         altText: 'Why is Mewtwos name Mewtwo?',
//         caption: 'There was a disaster with Mew'
//     },
//     {
//         src: "image/smeargle.jpg",
//         altText: 'What are the two pokemon that can learn all the moves?',
//         caption: 'Mew, and Smeargle'
//     }
// ];

// const Example = (props) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animating, setAnimating] = useState(false);

//     const next = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//         setActiveIndex(nextIndex);
//     }

//     const previous = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//         setActiveIndex(nextIndex);
//     }

//     const goToIndex = (newIndex) => {
//         if (animating) return;
//         setActiveIndex(newIndex);
//     }

//     const slides = items.map((item) => {
//         return (
//             <CarouselItem
//                 onExiting={() => setAnimating(true)}
//                 onExited={() => setAnimating(false)}
//                 key={item.src}
//                 id="mainback"
//             >
//                 <div id="pokemonpics">
//                     <img id="slides" src={item.src} alt={item.altText} />
//                 </div>
//                 <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
//             </CarouselItem>
//         );
//     });

//     return (
//         <Carousel
//             activeIndex={activeIndex}
//             next={next}
//             previous={previous}
//         >
//             <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//             {slides}
//             <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//             <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//         </Carousel>
//     );
// }

// export default Example;