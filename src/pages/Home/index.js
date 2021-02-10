import { auth } from '../../config/firebase';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth/provider';
import { signOutSuccess, signOutFailed } from '../../context/auth/action';

const Home = () => {
  const route = useHistory();

  const { user, dispatch } = useAuth();

  async function handleLogOut() {
    try {
      const res = await auth.signOut();
      if (res) {
        dispatch(signOutSuccess);
        route.push('/login');
      }
    } catch (err) {
      console.log(err);
      dispatch(signOutFailed);
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '50px 20px'
      }}
    >
      <h1>Login With : {user.email}</h1>

      <button onClick={handleLogOut} style={{ height: 40 }}>
        Logout
      </button>
    </div>
  );
};

export default Home;
