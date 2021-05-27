import filtersTypes from './filters.types';

const INIT_STATE = {
  ingredientsList: [],
  categoriesList: [],
  glassesList: [],
  alcoholicFiltersList: [],
  filtersError: '',
};

export const filtersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case filtersTypes.INGREDIENTS_FETCH_SUCCESS:
      return { ...state, ingredientsList: action.payload };
    case filtersTypes.CATEGORIES_FETCH_SUCCESS:
      return { ...state, categoriesList: action.payload };
    case filtersTypes.GLASSES_FETCH_SUCCESS:
      return { ...state, glassesList: action.payload };
    case filtersTypes.ALCOHILIC_FILTERS_FETCH_SUCCESS:
      return { ...state, alcoholicFiltersList: action.payload };
    case filtersTypes.INGREDIENTS_ERROR:
      return { ...state, filtersError: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
