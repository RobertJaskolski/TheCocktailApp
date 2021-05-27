import filtersTypes from './filters.types';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import {
  filtersError,
  ingredientsFetchSuccess,
  categoriesFetchSuccess,
  glassesFetchSuccess,
  alcoholicFiltersFetchSuccess,
} from './filters.actions';
import {
  handleGetIngraedients,
  handleGetAlcoholicFilters,
  handleGetCategories,
  handleGetGlasses,
} from './filters.helpers';

// Ingredients
export function* ingredientsFetch() {
  try {
    const ingredientsList = yield call(handleGetIngraedients);
    yield put(ingredientsFetchSuccess(ingredientsList));
  } catch (err) {
    yield put(filtersError(err));
  }
}

export function* onIngredientsFetchStart() {
  yield takeLatest(filtersTypes.INGREDIENTS_FETCH_START, ingredientsFetch);
}

// Categories
export function* categoriesFetch() {
  try {
    const categoriesList = yield call(handleGetCategories);
    yield put(categoriesFetchSuccess(categoriesList));
  } catch (err) {
    yield put(filtersError(err));
  }
}

export function* onCategoriesFetchStart() {
  yield takeLatest(filtersTypes.CATEGORIES_FETCH_START, categoriesFetch);
}

// Glasses
export function* glassesFetch() {
  try {
    const glassesList = yield call(handleGetGlasses);
    yield put(glassesFetchSuccess(glassesList));
  } catch (err) {
    yield put(filtersError(err));
  }
}

export function* onGlassesFetchStart() {
  yield takeLatest(filtersTypes.GLASSES_FETCH_START, glassesFetch);
}

// Alcoholic filters
export function* alcoholicFiltersFetch() {
  try {
    const alcoholicFiltersList = yield call(handleGetAlcoholicFilters);
    yield put(alcoholicFiltersFetchSuccess(alcoholicFiltersList));
  } catch (err) {
    yield put(filtersError(err));
  }
}

export function* onAlcoholicFiltersFetchStart() {
  yield takeLatest(
    filtersTypes.ALCOHILIC_FILTERS_FETCH_START,
    alcoholicFiltersFetch
  );
}

// sagas

export default function* filtersSagas() {
  yield all([
    call(onIngredientsFetchStart),
    call(onAlcoholicFiltersFetchStart),
    call(onCategoriesFetchStart),
    call(onGlassesFetchStart),
  ]);
}
