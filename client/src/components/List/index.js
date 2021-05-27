import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import RadioFilter from '../RadioFilter';
import CheckBoxFilter from '../CheckBoxFilter';

const mapState = ({ filters }) => ({
  ingredients: filters['ingredientsList'],
  categories: filters['categoriesList'],
  glasses: filters['glassesList'],
  alcoholicFilters: filters['alcoholicFiltersList'],
});

function List({ listType }) {
  const { ingredients, categories, glasses, alcoholicFilters } =
    useSelector(mapState);
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
          />
        ))}
    </div>
  );
}

export default List;
