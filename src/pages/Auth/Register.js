import { useState } from 'react';
import { auth } from '../../config/firebase';
import { useAuth } from '../../context/auth/provider';
import { signUpSuccess, signUpFailed } from '../../context/auth/action';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const route = useHistory();

  const { dispatch } = useAuth();

  async function handleSubmit() {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      if (res) {
        dispatch(signUpSuccess(res.user));
        route.push('/');
      }
    } catch (e) {
      console.log(e);
      dispatch(signUpFailed());
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
      <h1>Simple Signup :D</h1>

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
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
