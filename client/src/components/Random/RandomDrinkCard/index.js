import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const RandomDrinkCard = ({ drink, isUnmount }) => {
  const { strDrinkThumb, strDrink, idDrink } = drink;
  if (!drink) return null;
  return (
    <Link className={isUnmount ? 'leave' : 'enter'} to={`/${idDrink}`}>
      <div className='random-drink-card__container'>
        <img src={strDrinkThumb} loading='lazy' alt={strDrink} />
        <h1 className='random-drink-card__title'>{strDrink}</h1>
      </div>
    </Link>
  );
};

RandomDrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    idDrink: PropTypes.string,
  }),
};

export default RandomDrinkCard;
