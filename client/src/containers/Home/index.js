import React, { useEffect, useState } from 'react';
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

function Home() {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState('categories');
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
      </div>
    </section>
  );
}

export default Home;
