import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../../context/auth/provider';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        user && restricted ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
