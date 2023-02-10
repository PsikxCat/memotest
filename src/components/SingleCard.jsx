import React from 'react';
import PropTypes from 'prop-types';

import './SingleCard.css';

function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className='card'>
      <img className='card-front' src={card.src} alt="card front" />
      <img className='card-back'
        src='https://icongr.am/entypo/help.svg?size=120&color=ffffff'
        alt="card back"
        onClick={handleClick}
      />

    </div>
  );
}

SingleCard.propTypes = {
  card: PropTypes.object,
  handleChoice: PropTypes.func
};

export default SingleCard;
