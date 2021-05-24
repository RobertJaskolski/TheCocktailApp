import { useCallback, useEffect, useState } from "react";
import RandomDrinkCard from "../../components/Random/RandomDrinkCard";
import { readRandomDrinks } from "../../api/drinksClient";
import "./styles.scss";

const Random = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  const loadRandomDrinks = useCallback(() => {
    if (drinks.length === 0) {
      readRandomDrinks().then((data) => {
        console.log(data);
        setDrinks(data.drinks);
        setIsLoading(false);
      });
    }
  }, [drinks]);

  useEffect(() => {
    loadRandomDrinks();
  }, [loadRandomDrinks]);

  if (isLoading || drinks.length === 0) {
    // TODO: Loader component?
    return <div></div>;
  } else {
    return (
      <div className="random-drinks__container">
        <h1 className="random-drinks__title">Random drinks</h1>
        <h2 className="random-drinks__subtitle">
          Choose one of the three drinks below.
        </h2>

        <div className="random-drinks__cards-wrapper">
          <RandomDrinkCard drink={drinks[0]} />
          <RandomDrinkCard drink={drinks[1]} />
          <RandomDrinkCard drink={drinks[2]} />
        </div>

        <button className="random-drinks__button" onClick={() => setDrinks([])}>
          Let's draw again!
        </button>
      </div>
    );
  }
};

export default Random;
