import favsTypes from './favs.types';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import { setFavs, setFavsError } from './favs.actions';
import { handlePostFav, handleGetFavs, handleDeleteFav } from './favs.helpers';

export function* postFav({ payload }) {
  try {
    yield handlePostFav({
      ...payload,
      userID: auth.currentUser['uid'],
    });
  } catch (err) {
    yield setFavsError(err);
  }
}

export function* onPostFavStart() {
  yield takeLatest(favsTypes.POST_FAV_START, postFav);
}

export function* deleteFav({ payload }) {
  try {
    yield handleDeleteFav({
      fav: payload,
      uid: auth.currentUser['uid'],
    });
    console.log('object');
  } catch (err) {
    yield setFavsError(err);
  }
}

export function* onDeleteFavStart() {
  yield takeLatest(favsTypes.DELETE_FAV_START, deleteFav);
}

export function* getFavs({ payload }) {
  try {
    const favs = yield handleGetFavs(payload);
    yield put(setFavs(favs));
  } catch (err) {
    yield setFavsError(err);
  }
}

export function* onGetFavsStart() {
  yield takeLatest(favsTypes.GET_FAVS_START, getFavs);
}

export default function* favsSagas() {
  yield all([
    call(onPostFavStart),
    call(onGetFavsStart),
    call(onDeleteFavStart),
  ]);
}
