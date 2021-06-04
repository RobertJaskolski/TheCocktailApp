import { all, call } from 'redux-saga/effects';
import userSagas from './user/user.sagas';
import filtersSagas from './filters/filters.sagas';
import drinksSagas from './drinks/drinks.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(filtersSagas), call(drinksSagas)]);
}
