import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});

const configStorage = {
  key: 'root',
  storage,
};

export default persistReducer(configStorage, rootReducer);
