import React from 'react';
import PropTypes from 'prop-types';

import './SingleCard.css';

function SingleCard({ card, handleChoice, flipped, blockBoard }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className='card'>
      <div className={ flipped ? 'flipped' : '' }>
        <img className='card-front' src={card.src} alt="card front" />
        <img className='card-back'
          src='https://icongr.am/entypo/help.svg?size=120&color=ffffff'
          alt="card back"
          onClick={!blockBoard && handleClick}
        />
      </div>
    </div>
  );
}

SingleCard.propTypes = {
  card: PropTypes.object,
  handleChoice: PropTypes.func,
  flipped: PropTypes.bool,
  blockBoard: PropTypes.bool
};

export default SingleCard;
