import React, { useEffect, useState } from 'react';
import './styles.scss';
import Button from '../../components/form/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientsFetchStart } from '../../redux/filters/filters.actions';
import Ingredients from '../../components/Ingredients';
const mapState = ({ filters }) => ({
  ingredients: filters['ingredientsList'],
});

function Home() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(mapState);
  const [showFilters, setShowFilters] = useState(false);
  const [moreIngredients, setMoreIngredients] = useState(false);
  useEffect(() => {
    dispatch(ingredientsFetchStart());
  }, [dispatch]);
  return (
    <section className='home'>
      <div className='wrapper'>
        <div className='headers'>
          <h1>Find your taste</h1>
          <h2>The best cocktails for you</h2>
        </div>
        <div className='search'>
          <input type='text' placeholder='Enter the name of the cocktail' />
        </div>
        <div className='filters'>
          <Button
            aria-label='filters'
            onClick={() => setShowFilters(!showFilters)}
            className={showFilters ? 'active filterButton' : 'filterButton'}
          >
            <span>Filters</span>
          </Button>
          <div className={showFilters ? 'active filterPanel' : 'filterPanel'}>
            <div className='filtersSelect'>
              <select>
                <option>Ingredients</option>
                <option>Glasses</option>
                <option>Categories</option>
                <option>Alcoholic filters</option>
              </select>
              <div className='container'>
                {Array.isArray(ingredients) && ingredients.length > 0 ? (
                  ingredients
                    .slice(0, 50)
                    .map((item) => (
                      <Ingredients
                        name={item.strIngredient1}
                        key={item.strIngredient1}
                      />
                    ))
                ) : (
                  <div>Loading...</div>
                )}
                {moreIngredients &&
                  ingredients
                    .slice(50)
                    .map((item) => (
                      <Ingredients
                        name={item.strIngredient1}
                        key={item.strIngredient1}
                      />
                    ))}
              </div>

              <Button onClick={() => setMoreIngredients(!moreIngredients)}>
                {moreIngredients ? 'Hidde' : 'Load more'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
