import filtersTypes from './filters.types';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { ingredientsError, ingredientsFetchSuccess } from './filters.actions';
import { handleGetIngraedients } from './filters.helpers';

// ingredients
export function* ingredientsFetch() {
  try {
    const ingredientsList = yield call(handleGetIngraedients);
    yield put(ingredientsFetchSuccess(ingredientsList));
  } catch (err) {
    yield put(ingredientsError(err));
  }
}

export function* onIngredientsFetchStart() {
  yield takeLatest(filtersTypes.INGREDIENTS_FETCH_START, ingredientsFetch);
}

// sagas

export default function* filtersSagas() {
  yield all([call(onIngredientsFetchStart)]);
}
