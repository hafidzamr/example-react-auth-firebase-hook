import { useState } from 'react';
import { auth } from '../../config/firebase';
import { signInSuccess, signInFailed } from '../../context/auth/action';
import { useAuth } from '../../context/auth/provider';
import { useHistory } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const route = useHistory();

  const { dispatch } = useAuth();

  async function handleSubmit() {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      if (res) {
        dispatch(signInSuccess(res.user));
        route.push('/');
      }
    } catch (e) {
      console.log(e);
      dispatch(signInFailed());
    }
  }

  return (
    <div
      style={{
        width: '50%',
        height: '100vh',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignIitems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1>Simple Login :D</h1>

      <label>email</label>
      <input
        type='email'
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
        required
        style={{ height: 30 }}
      />
      <br />
      <label>password</label>
      <input
        type='password'
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
        required
        style={{ height: 30 }}
      />
      <br />
      <button onClick={handleSubmit} style={{ height: 40 }}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
