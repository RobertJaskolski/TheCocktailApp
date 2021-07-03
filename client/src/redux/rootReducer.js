import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import filtersReducer from './filters/filters.reducer';
import settingsReducer from './settings/settings.reducer';
import drinksReducer from './drinks/drinks.reducer';
import favsReducer from './favs/favs.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  filters: filtersReducer,
  settings: settingsReducer,
  drinks: drinksReducer,
  favs: favsReducer,
});

export default rootReducer;
