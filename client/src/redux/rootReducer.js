import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import filtersReducer from './filters/filters.reducer';
import settingsReducer from './settings/settings.reducer';
import drinksReducer from './drinks/drinks.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  filters: filtersReducer,
  settings: settingsReducer,
  drinks: drinksReducer,
});

export default rootReducer;
