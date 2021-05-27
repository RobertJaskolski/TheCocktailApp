import filtersTypes from './filters.types';

const INIT_STATE = {
  ingredientsList: [],
  filtersError: '',
};

export const filtersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case filtersTypes.INGREDIENTS_FETCH_SUCCESS:
      return { ...state, ingredientsList: action.payload };
    case filtersTypes.INGREDIENTS_ERROR:
      return { ...state, filtersError: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
