const defaultState = {
  user: {},
  isAuth: false,
  isError: false,
  isLoading: true
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isError: false,
        isLoading: false
      };
    case 'SIGNUP_FAILED':
      return {
        ...state,
        user: null,
        isAuth: false,
        isError: true,
        isLoading: false
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isError: false,
        isLoading: false
      };
    case 'SIGNIN_FAILED':
      return {
        ...state,
        user: null,
        isAuth: false,
        isError: true,
        isLoading: false
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...defaultState
      };

    case 'LOGOUT_FAILED':
      return {
        ...state,
        user: null,
        isAuth: false,
        isError: true,
        isLoading: false
      };

    default:
      return state;
  }
};

export default AuthReducer;
