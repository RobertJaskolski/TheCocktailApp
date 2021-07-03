import favsTypes from './favs.types';

const INIT_STATE = {
  favs: {
    data: [],
  },
  loading: false,
  error: '',
};

const favsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case favsTypes.SET_FAVS:
      return { ...state, favs: action.payload, loading: false };
    case favsTypes.GET_FAVS_START:
      return { ...state, loading: true };
    case favsTypes.SET_FAVS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default favsReducer;
