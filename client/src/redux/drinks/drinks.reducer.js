import drinksTypes from './drinks.types';

const INIT_STATE = {
  drinks: [],
  error: '',
};
const drinksReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case drinksTypes.DRINKS_FETCH_SUCCESS:
      return { ...state, drinks: action.payload };
    case drinksTypes.DRINKS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default drinksReducer;
