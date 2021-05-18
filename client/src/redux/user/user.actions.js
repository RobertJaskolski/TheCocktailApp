import userTypes from './user.types';

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START,
});
export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});
export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const resetUserState = () => ({
  type: userTypes.RESET_USER_STATE,
});
export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});
export const userError = (err) => ({
  type: userTypes.USER_ERROR,
  payload: err,
});
