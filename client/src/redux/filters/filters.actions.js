import filtersTypes from './filters.types';

export const ingredientsFetchStart = () => ({
  type: filtersTypes.INGREDIENTS_FETCH_START,
});

export const ingredientsFetchSuccess = (list) => ({
  type: filtersTypes.INGREDIENTS_FETCH_SUCCESS,
  payload: list,
});

export const ingredientsError = (err) => ({
  type: filtersTypes.INGREDIENTS_ERROR,
  payload: err,
});
