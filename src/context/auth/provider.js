import { createContext, useContext, useReducer, useEffect } from 'react';
import { auth } from '../../config/firebase';
import AuthReducer from './reducer';

const initialState = {
  user: {},
  isAuth: false,
  isError: false,
  isLoading: true
};

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      user
        ? dispatch({ type: 'SIGNIN_SUCCESS', user })
        : dispatch({ type: 'SIGNIN_FAILED' });
    });

    return () => unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {state.isLoading ? 'loading...' : children}
    </AuthContext.Provider>
  );
};
