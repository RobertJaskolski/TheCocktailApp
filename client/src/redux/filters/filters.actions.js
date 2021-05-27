import filtersTypes from './filters.types';

export const ingredientsFetchStart = () => ({
  type: filtersTypes.INGREDIENTS_FETCH_START,
});

export const ingredientsFetchSuccess = (list) => ({
  type: filtersTypes.INGREDIENTS_FETCH_SUCCESS,
  payload: list,
});

export const categoriesFetchStart = () => ({
  type: filtersTypes.CATEGORIES_FETCH_START,
});

export const categoriesFetchSuccess = (list) => ({
  type: filtersTypes.CATEGORIES_FETCH_SUCCESS,
  payload: list,
});

export const glassesFetchStart = () => ({
  type: filtersTypes.GLASSES_FETCH_START,
});

export const glassesFetchSuccess = (list) => ({
  type: filtersTypes.GLASSES_FETCH_SUCCESS,
  payload: list,
});

export const alcoholicFiltersFetchStart = () => ({
  type: filtersTypes.ALCOHILIC_FILTERS_FETCH_START,
});

export const alcoholicFiltersFetchSuccess = (list) => ({
  type: filtersTypes.ALCOHILIC_FILTERS_FETCH_SUCCESS,
  payload: list,
});

export const filtersError = (err) => ({
  type: filtersTypes.INGREDIENTS_ERROR,
  payload: err,
});
