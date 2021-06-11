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

export const unsetIngerients = (filter) => ({
  type: settingTypes.UNSET_INGREDIENTS,
  payload: filter,
});

export const unsetCategory = () => ({
  type: settingTypes.UNSET_CATEGORY,
});

export const unsetGlass = () => ({
  type: settingTypes.UNSET_GLASS,
});

export const unsetAlcoholicFilter = () => ({
  type: settingTypes.UNSET_ALCOHOLIC_FILTER,
});
