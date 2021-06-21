import favsTypes from './favs.types';

export const postFav = (drink) => ({
  type: favsTypes.POST_FAV_START,
  payload: drink,
});

export const deleteFav = (drink) => ({
  type: favsTypes.DELETE_FAV_START,
  payload: drink,
});

export const getFavs = (uid) => ({
  type: favsTypes.GET_FAVS_START,
  payload: uid,
});

export const setFavsError = (e) => ({
  type: favsTypes.SET_FAVS_ERROR,
  payload: e,
});

export const setFavs = (favs) => ({
  type: favsTypes.SET_FAVS,
  payload: favs,
});
