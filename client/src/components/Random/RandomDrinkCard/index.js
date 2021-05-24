import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
const RandomDrinkCard = ({ drink }) => {
  const { strDrinkThumb, strDrink } = drink;
  return (
    <div className='random-drink-card__container'>
      <img src={strDrinkThumb} alt={strDrink} />
      <h1 className='random-drink-card__title'>{strDrink}</h1>
    </div>
  );
};

RandomDrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
  }),
};

export default RandomDrinkCard;
