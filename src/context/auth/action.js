export const signUpSuccess = value => {
  return {
    type: 'SIGNUP_SUCCESS',
    user: value
  };
};
export const signUpFailed = () => {
  return {
    type: 'SIGNUP_FAILED'
  };
};
export const signInSuccess = value => {
  return {
    type: 'SIGNIN_SUCCESS',
    user: value
  };
};
export const signInFailed = () => {
  return {
    type: 'SIGNIN_FAILED'
  };
};

export const signOutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  };
};

export const signOutFailed = () => {
  return {
    type: 'LOGOUT_FAILED'
  };
};
