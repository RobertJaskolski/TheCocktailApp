import React, { useEffect, useState } from 'react';
import RandomDrinkCard from '../../components/Random/RandomDrinkCard';
import randomDrinks from '../../api/randomDrinks';
import './styles.scss';

const Random = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState('');

  const fetchDrinks = () => {
    setIsLoading(true);
    randomDrinks()
      .then((res) => {
        setDrinks([...res]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <section className='random-drinks__container'>
      <h1 className='random-drinks__title'>Random drinks</h1>
      <h2 className='random-drinks__subtitle'>
        Choose one of the three drinks below.
      </h2>
      <section className='random-drinks__cards-wrapper'>
        {Array.isArray(drinks) &&
          drinks.length > 0 &&
          !isLoading &&
          drinks.map((drink) => (
            <RandomDrinkCard drink={drink} key={drink.idDrink} />
          ))}
      </section>

      <button className='random-drinks__button' onClick={fetchDrinks}>
        Let's draw again!
      </button>
    </section>
  );
};

export default Random;
