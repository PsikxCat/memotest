import React, { useState } from 'react';
import './App.css';

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const suffleItems = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random() * Date.now()).toString(16) }));

    setCards(suffleItems);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <main className='App'>
      <h1>Magic Match</h1>

      <button type='button' onClick={shuffleCards}>
        New Game
      </button>

      <div className="cards-grid">
        { cards.map((card) => (
          <div className='card' key={card.id}>
            <img className='card-front' src={card.src} alt="card front" />
            <img className='card-back' src='/img/cover.png' alt="card back" />
          </div>
        )) }
      </div>
    </main>
  );
}

export default App;
