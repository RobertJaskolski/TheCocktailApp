import settingTypes from './settings.types';

export const setIngerients = (filter) => ({
  type: settingTypes.SET_INGREDIENTS,
  payload: filter,
});

export const setCategory = (filter) => ({
  type: settingTypes.SET_CATEGORY,
  payload: filter,
});

export const setGlass = (filter) => ({
  type: settingTypes.SET_GLASS,
  payload: filter,
});

export const setAlcoholicFilter = (filter) => ({
  type: settingTypes.SET_ALCOHOLIC_FILTER,
  payload: filter,
});

export const clearSettings = () => ({
  type: settingTypes.CLEAR_SETTINGS,
});
