import React from 'react';
import PropTypes from 'prop-types';

import './SingleCard.css';

function SingleCard({ src }) {
  return (
    <div className='card'>
      <img className='card-front' src={src} alt="card front" />
      <img className='card-back' src='/img/cover.png' alt="card back" />
    </div>
  );
}

SingleCard.propTypes = {
  src: PropTypes.string
};

export default SingleCard;
