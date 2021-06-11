import { createSelector } from 'reselect';
import { handleFilterByIngredients } from './drinks.helpers';
const getDrinks = (state) => state.drinks['drinks'];
const getFilters = (state) => state.settings;

export const getFiltredDrinks = createSelector(
  [getDrinks, getFilters],
  (drinks, settings) => {
    if (settings['category'] !== 'All')
      drinks = drinks.filter((item) => {
        return settings['category'] === item.strCategory;
      });
    if (settings['glass'] !== 'All')
      drinks = drinks.filter((item) => {
        return item.strGlass === settings['glass'];
      });
    if (settings['alcoholicFilter'] !== 'All')
      drinks = drinks.filter((item) => {
        return settings['alcoholicFilter'] === item.strAlcoholic;
      });
    if (settings['ingredients'].length > 0) {
      drinks = handleFilterByIngredients(drinks, settings['ingredients']);
    }
    return drinks;
  }
);
