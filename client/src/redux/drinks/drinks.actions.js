import drinksTypes from './drinks.types';

export const drinksFetchStart = (name) => ({
  type: drinksTypes.DRINKS_FETCH_START,
  payload: name,
});

export const drinksFetchSuccess = (list) => ({
  type: drinksTypes.DRINKS_FETCH_SUCCESS,
  payload: list,
});

export const drinksError = (err) => ({
  type: drinksTypes.DRINKS_ERROR,
  payload: err,
});
