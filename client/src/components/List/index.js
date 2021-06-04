import React from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  setAlcoholicFilter,
  setGlass,
  setCategory,
  setIngerients,
  unsetIngerients,
  unsetAlcoholicFilter,
  unsetGlass,
  unsetCategory,
} from '../../redux/settings/settings.actions';
import RadioFilter from '../RadioFilter';
import CheckBoxFilter from '../CheckBoxFilter';

const mapState = ({ filters }) => ({
  ingredients: filters['ingredientsList'],
  categories: filters['categoriesList'],
  glasses: filters['glassesList'],
  alcoholicFilters: filters['alcoholicFiltersList'],
});

function List({ listType }) {
  const dispatch = useDispatch();
  const { ingredients, categories, glasses, alcoholicFilters } =
    useSelector(mapState);
  const handleOnCheck = (e) => {
    if (e.target.checked) {
      switch (e.target.name) {
        case 'categories':
          dispatch(setCategory(e.target.value));
          break;
        case 'ingredients':
          dispatch(setIngerients(e.target.value));
          break;
        case 'glasses':
          dispatch(setGlass(e.target.value));
          break;
        case 'alcoholicFilters':
          dispatch(setAlcoholicFilter(e.target.value));
          break;

        default:
          break;
      }
    }

    if (!e.target.checked) {
      switch (e.target.name) {
        case 'categories':
          dispatch(unsetCategory());
          break;
        case 'ingredients':
          dispatch(unsetIngerients(e.target.value));
          break;
        case 'glasses':
          dispatch(unsetGlass());
          break;
        case 'alcoholicFilters':
          dispatch(unsetAlcoholicFilter());
          break;

        default:
          break;
      }
    }
  };

  return (
    <div className='containerList'>
      {listType === 'categories' &&
        Array.isArray(categories) &&
        categories.length > 0 &&
        categories.map((item) => (
          <RadioFilter
            key={item.strCategory}
            name={item.strCategory}
            type='categories'
            handleOnCheck={handleOnCheck}
          />
        ))}
      {listType === 'glasses' &&
        Array.isArray(glasses) &&
        glasses.length > 0 &&
        glasses.map((item) => (
          <RadioFilter
            key={item.strGlass}
            name={item.strGlass}
            type='glasses'
            handleOnCheck={handleOnCheck}
          />
        ))}
      {listType === 'ingredients' &&
        Array.isArray(ingredients) &&
        ingredients.length > 0 &&
        ingredients.map((item) => (
          <CheckBoxFilter
            key={item.strIngredient1}
            name={item.strIngredient1}
            type='ingredients'
            handleOnCheck={handleOnCheck}
          />
        ))}
      {listType === 'alcoholicFilters' &&
        Array.isArray(alcoholicFilters) &&
        alcoholicFilters.length > 0 &&
        alcoholicFilters.map((item) => (
          <RadioFilter
            key={item.strAlcoholic}
            name={item.strAlcoholic}
            type='alcoholicFilters'
            handleOnCheck={handleOnCheck}
          />
        ))}
    </div>
  );
}

export default List;
