import { takeLatest, call, all, put } from 'redux-saga/effects';
import userTypes from './user.types';
import { handleResetPasswordAPI } from './user.helpers';
import {
  signInSuccess,
  signOutUserSuccess,
  userError,
  resetPasswordSuccess,
} from './user.actions';
import {
  auth,
  handleUserProfile,
  GoogleProvider,
  getCurrentUser,
} from '../../firebase/utils';

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handleUserProfile, {
      userAuth: user,
      additionalData,
    });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (err) {
    console.log(err);
  }
}

// Check session
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// Google signin
export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    console.log(err);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

// Signout user

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutUserSuccess());
  } catch (err) {
    console.log(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

// Singup

export function* signUpUser({ payload: { displayName, email, password } }) {
  yield put(userError(''));
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionalData = { displayName };
    yield getSnapshotFromUserAuth(user, additionalData);
  } catch (err) {
    yield put(userError(err.message));
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

// Email signin

export function* emailSignIn({ payload: { email, password } }) {
  yield put(userError(''));
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(userError(err.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

// Password reset

export function* resetPassword({ payload: { email } }) {
  yield put(userError(''));
  try {
    yield call(handleResetPasswordAPI, email);
    yield put(resetPasswordSuccess());
  } catch (err) {
    yield put(userError(err));
  }
}

export function* onResetPasswordStart() {
  yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}

// Sagas

export default function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpUserStart),
    call(onResetPasswordStart),
  ]);
}
