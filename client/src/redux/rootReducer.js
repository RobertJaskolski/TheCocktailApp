import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import filtersReducer from './filters/filters.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  filters: filtersReducer,
});

export default rootReducer;
