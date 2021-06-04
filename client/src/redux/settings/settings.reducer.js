import settingTypes from './settings.types';

const INIT_STATE = {
  category: '',
  glass: '',
  alcoholicFilter: '',
  ingredients: [],
};

const settingsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case settingTypes.SET_ALCOHOLIC_FILTER:
      return { ...state, alcoholicFilter: action.payload };
    case settingTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    case settingTypes.SET_GLASS:
      return { ...state, glass: action.payload };
    case settingTypes.SET_INGREDIENTS:
      if (state.ingredients.includes(action.payload)) return state;
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case settingTypes.CLEAR_SETTINGS:
      return INIT_STATE;
    default:
      return state;
  }
};

export default settingsReducer;
