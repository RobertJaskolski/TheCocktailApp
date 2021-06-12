import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDrink from '../../api/getDrink';
import './styles.scss';

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
    <div className='drinkDetails'>
      {error && (
        <div className='drinkError'>
          <h1>Drink not found</h1>
        </div>
      )}
      <div></div>
    </div>
  );
}

export default DrinkDetails;
