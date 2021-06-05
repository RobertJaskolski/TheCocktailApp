import { createSelector } from 'reselect';
import { handleFilterByIngredients } from './drinks.helpers';
const getDrinks = (state) => state.drinks['drinks'];
const getFilters = (state) => state.settings;

export const getFiltredDrinks = createSelector(
  [getDrinks, getFilters],
  (drinks, settings) => {
    if (settings['category'] !== 'All')
      drinks = drinks.filter((item) => {
        if (settings['category'] === item.strCategory) return item;
      });
    if (settings['glass'] !== 'All')
      drinks = drinks.filter((item) => {
        if (settings['glass'] === item.strGlass) return item;
      });
    if (settings['alcoholicFilter'] !== 'All')
      drinks = drinks.filter((item) => {
        if (settings['alcoholicFilter'] === item.strAlcoholic) return item;
      });
    if (settings['ingredients'].length > 0) {
      drinks = handleFilterByIngredients(drinks, settings['ingredients']);
      console.log(drinks);
    }
    return drinks;
  }
);
