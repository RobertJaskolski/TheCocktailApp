import React, { useEffect } from 'react';
import './styles.scss';
import DrinkCard from '../../components/DrinkCard';
import { useSelector, useDispatch } from 'react-redux';
import { postFav, getFavs } from '../../redux/favs/favs.actions';

const mapState = ({ user, favs }) => ({
  currentUser: user['currentUser'],
  favs: favs['favs'],
});

function Favs() {
  const { currentUser, favs } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) dispatch(getFavs(currentUser['id']));
  }, []);

  return (
    <section className='favs'>
      <h1>your favorites drinks</h1>

      <div className='favsResult'>
        {Array.isArray(favs?.data) &&
          favs?.data.length > 0 &&
          favs?.data.map((drink) => {
            return <DrinkCard drink={drink} />;
          })}
      </div>
    </section>
  );
}

export default Favs;
