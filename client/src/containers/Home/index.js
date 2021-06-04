import React, { useEffect, useState, useCallback } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import List from '../../components/List';
import {
  categoriesFetchStart,
  glassesFetchStart,
  alcoholicFiltersFetchStart,
  ingredientsFetchStart,
} from '../../redux/filters/filters.actions';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import getDrinksByName from '../../api/getDrinksByName';
import _ from 'lodash';
import DrinkCard from '../../components/DrinkCard';
import { drinksFetchStart } from '../../redux/drinks/drinks.actions';

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('categories');
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState('');
  const [isUnmount, setIsUnmount] = useState(false);

  const handleFetchDrinksByName = (name) => {
    setIsLoading(true);
    getDrinksByName(name)
      .then((res) => {
        setDrinks(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
    dispatch(drinksFetchStart(name));
    setIsUnmount(false);
  };

  const delayHandleSearch = useCallback(
    _.debounce((name) => handleFetchDrinksByName(name), 1000),
    []
  );

  const handleChangeSearch = (e) => {
    delayHandleSearch(e.target.value);
    setSearch(e.target.value);
  };

  const handleChangeFilter = (e) => {
    if (e.target.value === 'ingredients') dispatch(ingredientsFetchStart());
    if (e.target.value === 'glasses') dispatch(glassesFetchStart());
    if (e.target.value === 'categories') dispatch(categoriesFetchStart());
    if (e.target.value === 'alcoholicFilters')
      dispatch(alcoholicFiltersFetchStart());
    setSelectedFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(categoriesFetchStart());
    handleFetchDrinksByName('');
  }, [dispatch]);

  return (
    <section className='home'>
      <div className='wrapper'>
        <div className='headers'>
          <h1>Find your taste</h1>
          <h2>The best cocktails for you</h2>
        </div>
        <div className='search'>
          <input
            value={search}
            onChange={handleChangeSearch}
            type='text'
            placeholder='Enter the name of the cocktail'
          />
        </div>
        <div className='filters'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <h1>Filters</h1>
            </AccordionSummary>
            <AccordionDetails>
              <select value={selectedFilter} onChange={handleChangeFilter}>
                <option value='ingredients'>Ingredients</option>
                <option value='glasses'>Glasses</option>
                <option value='categories'>Categories</option>
                <option value='alcoholicFilters'>Alcoholic filters</option>
              </select>
              <List listType={selectedFilter} />
            </AccordionDetails>
          </Accordion>
        </div>
        {isLoading && <LinearProgress />}
        {error && 'Network problems'}
      </div>
      <div className='results'>
        {Array.isArray(drinks) &&
          drinks.length > 0 &&
          drinks.map((drink) => {
            return <DrinkCard key={drink.idDrink} drink={drink} />;
          })}
      </div>
    </section>
  );
}

export default Home;
