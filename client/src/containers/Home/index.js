import React, { useEffect, useState, useCallback } from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List';
import {
  categoriesFetchStart,
  glassesFetchStart,
  alcoholicFiltersFetchStart,
  ingredientsFetchStart,
} from '../../redux/filters/filters.actions';
import {
  unsetAlcoholicFilter,
  unsetCategory,
  unsetGlass,
  unsetIngerients,
} from '../../redux/settings/settings.actions';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinearProgress from '@material-ui/core/LinearProgress';
import _ from 'lodash';
import DrinkCard from '../../components/DrinkCard';
import { drinksFetchStart } from '../../redux/drinks/drinks.actions';
import { getFiltredDrinks } from '../../redux/drinks/drinks.selectors';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../../components/form/Button';

const mapState = (state) => ({
  drinks: getFiltredDrinks(state),
  error: state.drinks['error'],
  loading: state.drinks['loading'],
  categoryChecked: state.settings['category'],
  glassChecked: state.settings['glass'],
  alcoholicFilterChecked: state.settings['alcoholicFilter'],
  ingredientsChecked: state.settings['ingredients'],
});

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('categories');
  const [listItemsCount, setListItemCounts] = useState(1);
  const {
    drinks,
    error,
    loading,
    categoryChecked,
    glassChecked,
    alcoholicFilterChecked,
    ingredientsChecked,
  } = useSelector(mapState);

  const handleLoadMore = () => {
    if (drinks.length > 0) setListItemCounts((current) => current + 1);
  };

  const handleFetchDrinksByName = (name) => {
    dispatch(drinksFetchStart(name));
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

  const handleUnsetIngredients = (str) => {
    dispatch(unsetIngerients(str));
  };

  const handleUnsetGlass = () => {
    dispatch(unsetGlass());
  };

  const handleUnsetCategory = () => {
    dispatch(unsetCategory());
  };

  const handleUnsetAlcoholicFilter = () => {
    dispatch(unsetAlcoholicFilter());
  };
  useEffect(() => {
    dispatch(categoriesFetchStart());
    handleFetchDrinksByName('');
  }, []);

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
        <div className='checkedFilters'>
          {categoryChecked && categoryChecked !== 'All' && (
            <span className='checkedFiltr' onClick={handleUnsetCategory}>
              {categoryChecked}
              <CloseIcon />
            </span>
          )}
          {glassChecked && glassChecked !== 'All' && (
            <span className='checkedFiltr' onClick={handleUnsetGlass}>
              {glassChecked}
              <CloseIcon />
            </span>
          )}
          {alcoholicFilterChecked && alcoholicFilterChecked !== 'All' && (
            <span className='checkedFiltr' onClick={handleUnsetAlcoholicFilter}>
              {alcoholicFilterChecked}
              <CloseIcon />
            </span>
          )}
          {Array.isArray(ingredientsChecked) &&
            ingredientsChecked.length > 0 &&
            ingredientsChecked.map((str) => (
              <span
                aria-roledescription='button'
                className='checkedFiltr'
                key={str}
                onClick={() => handleUnsetIngredients(str)}
              >
                {str}
                <CloseIcon />
              </span>
            ))}
        </div>
        {loading && <LinearProgress />}
        {error && <h1>Network problems</h1>}
      </div>
      <div className='results'>
        {Array.isArray(drinks) &&
          drinks.length > 0 &&
          drinks.slice(0, listItemsCount * 18).map((drink) => {
            return <DrinkCard key={drink.idDrink} drink={drink} />;
          })}
      </div>
      {listItemsCount * 18 < drinks?.length && (
        <div>
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
      {Array.isArray(drinks) && drinks.length === 0 && !loading && (
        <div className='noResults'>
          <h1>No Results</h1>
        </div>
      )}
    </section>
  );
}

export default Home;
