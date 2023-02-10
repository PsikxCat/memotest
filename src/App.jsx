import React, { useState, useEffect } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  // { src: '/img/helmet-1.png' },
  {
    src: 'https://icongr.am/devicon/git-original.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/javascript-original.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/mongodb-original.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/nodejs-original.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/react-original.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/sass-original.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/typescript-original.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/vuejs-original.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/npm-original-wordmark.svg?size=120&color=000000',
    matched: false
  },
  {
    src: 'https://icongr.am/devicon/debian-plain.svg?size=120&color=000000',
    matched: false
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  let blockBoard = false;
  if (choiceOne && choiceTwo) blockBoard = true;

  // when the choices are set, evaluate if they're match or not
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      // console.log('here');
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 800);
      }
    }
  }, [choiceOne, choiceTwo]);

  // shuffle cards
  const shuffleCards = () => {
    const suffleItems = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random() * Date.now()).toString(16) }));

    setCards(suffleItems);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    !choiceOne ? setChoiceOne(card) : setChoiceTwo(card);
  };

  // reset choices & add turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  return (
    <main className='App'>
      <h1>Magic Match</h1>

      <button type='button' onClick={shuffleCards}>
        New Game
      </button>

      <div className="cards-grid">
        { cards.map((card) => (

          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={ card.matched || card === choiceOne || card === choiceTwo }
            blockBoard={blockBoard}
          />

        )) }
      </div>
    </main>
  );
}

export default App;
