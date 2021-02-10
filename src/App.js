import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './context/auth/provider';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import PrivateRouter from './components/Auth/PrivateRouter';
import Home from './pages/Home';
import PublicRoute from './components/Auth/PublicRouter';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRouter exact path='/' component={Home} />
          <PublicRoute restricted={true} path='/login' component={LoginPage} />
          <PublicRoute
            restricted={true}
            path='/register'
            component={RegisterPage}
          />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
