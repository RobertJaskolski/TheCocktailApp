import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDrink from '../../api/getDrink';
import './styles.scss';
import { INGREDIENTS_STR, MEASURE_STR } from '../../consts';

function DrinkDetails() {
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    getDrink({ id: id })
      .then((res) => {
        setDrink(res);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  return (
    <div className='drinkDetailsWrapper'>
      {error && (
        <div className='drinkError'>
          <h1>Drink not found</h1>
        </div>
      )}
      <div className='drinkDetails'>
        <div className='wrappImg'>
          <img alt={drink?.strDrink} src={drink?.strDrinkThumb} />
        </div>
        <div className='drinkText'>
          <h1>{drink?.strDrink}</h1>
          <h2>Instruction:</h2>
          <p>{drink?.strInstructions}</p>
          <h2>Ingredients and measures:</h2>
          <ul>
            {Array.from(Array(15).keys())
              .filter((i) => {
                return drink[INGREDIENTS_STR[i]];
              })
              .map((i) => {
                return (
                  <li key={i}>
                    {drink[INGREDIENTS_STR[i]]}
                    {drink[MEASURE_STR[i]] && ` - ${drink[MEASURE_STR[i]]}`}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetails;
