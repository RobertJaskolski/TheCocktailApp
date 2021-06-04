import drinksTypes from './drinks.types';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { drinksError, drinksFetchSuccess } from './drinks.actions';
import { handleFetchDrinks } from './drinks.helpers';

export function* drinksFetch(action) {
  try {
    const drinks = yield call(handleFetchDrinks, action.payload);
    yield put(drinksFetchSuccess(drinks));
  } catch (err) {
    yield put(drinksError(err));
  }
}

export function* onDrinksFetchStart() {
  yield takeLatest(drinksTypes.DRINKS_FETCH_START, drinksFetch);
}

export default function* drinksSagas() {
  yield all([call(onDrinksFetchStart)]);
}
