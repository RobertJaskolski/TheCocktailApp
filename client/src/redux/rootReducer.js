import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import filtersReducer from './filters/filters.reducer';
import settingsReducer from './settings/settings.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  filters: filtersReducer,
  settings: settingsReducer,
});

export default rootReducer;
