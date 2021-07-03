import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import getDrink from '../../api/getDrink';
import './styles.scss';
import { INGREDIENTS_STR, MEASURE_STR } from '../../consts';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/form/Button';
import { postFav, getFavs, deleteFav } from '../../redux/favs/favs.actions';

const mapState = ({ user, favs }) => ({
  currentUser: user['currentUser'],
  favs: favs['favs'],
});

function DrinkDetails() {
  const history = useHistory();
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const [error, setError] = useState(false);
  const { currentUser, favs } = useSelector(mapState);
  const dispatch = useDispatch();

  const handlePostFav = () => {
    dispatch(postFav(drink));
    if (currentUser) dispatch(getFavs(currentUser['id']));
  };

  const handleDeleteFav = () => {
    dispatch(deleteFav(drink));
    if (currentUser) dispatch(getFavs(currentUser['id']));
    history.push('/login');
  };

  useEffect(() => {
    if (currentUser) dispatch(getFavs(currentUser['id']));
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
          {currentUser &&
          Array.isArray(favs?.data) &&
          !favs?.data.some((d) => d.strDrink === drink.strDrink) ? (
            <Button onClick={handlePostFav}>Add to favs</Button>
          ) : (
            <Button onClick={handleDeleteFav}>Delete fav</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DrinkDetails;
