import userTypes from './user.types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const INIT_STATE = {
  currentUser: null,
  userErr: [],
  resetPasswordSuccess: false,
};
export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return { ...state, resetPasswordSuccess: action.payload };
    case userTypes.USER_ERROR:
      return { ...state, userErr: action.payload };
    case userTypes.RESET_USER_STATE:
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return { ...state, ...INIT_STATE };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['userErr'],
};

export default persistReducer(persistConfig, userReducer);
