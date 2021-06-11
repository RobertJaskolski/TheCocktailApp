import settingTypes from './settings.types';

const INIT_STATE = {
  category: 'All',
  glass: 'All',
  alcoholicFilter: 'All',
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

    case settingTypes.UNSET_ALCOHOLIC_FILTER:
      return { ...state, alcoholicFilter: 'All' };
    case settingTypes.UNSET_CATEGORY:
      return { ...state, category: 'All' };
    case settingTypes.UNSET_GLASS:
      return { ...state, glass: 'All' };
    case settingTypes.UNSET_INGREDIENTS:
      if (!state.ingredients.includes(action.payload)) return state;
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => {
          if (item !== action.payload) return item;
        }),
      };

    case settingTypes.CLEAR_SETTINGS:
      return INIT_STATE;
    default:
      return state;
  }
};

export default settingsReducer;
