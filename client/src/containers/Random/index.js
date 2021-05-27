import React, { useEffect, useState } from 'react';
import DrinkCard from '../../components/DrinkCard';
import randomDrinks from '../../api/randomDrinks';
import Button from '../../components/form/Button';
import './styles.scss';

const Random = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState('');
  const [isUnmount, setIsUnmount] = useState(false);
  const fetchRandomDrinks = () => {
    setIsLoading(true);
    randomDrinks()
      .then((res) => {
        setDrinks(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
    setIsUnmount(false);
  };

  useEffect(() => {
    fetchRandomDrinks();
    return () => {
      setError('');
      setIsLoading(false);
      setIsUnmount(false);
      setDrinks([]);
    };
  }, []);
  return (
    <section className='random-drinks__container'>
      <h1 className='random-drinks__title'>Random drinks</h1>
      <h2 className='random-drinks__subtitle'>
        Choose one of the three drinks below.
      </h2>
      {error.length > 0 && <h3>{error}</h3>}
      <section className='random-drinks__cards-wrapper'>
        {Array.isArray(drinks) &&
          drinks.length > 0 &&
          !isLoading &&
          drinks.map((drink) => (
            <DrinkCard
              isUnmount={isUnmount}
              drink={drink}
              key={drink.idDrink}
            />
          ))}
      </section>

      <Button
        aria-label='Draw new random drinks'
        className='random-drinks__button'
        onClick={() => {
          setIsUnmount(true);
          setTimeout(() => fetchRandomDrinks(), 1050);
        }}
      >
        Let's draw again!
      </Button>
    </section>
  );
};

export default Random;
