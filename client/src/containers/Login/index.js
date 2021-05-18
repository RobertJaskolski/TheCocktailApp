import React, { useEffect } from 'react';
import './styles.scss';
import Button from '../../components/form/Button';
import { googleSignInStart } from '../../redux/user/user.actions';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const mapState = ({ user }) => ({
  currentUser: user['currentUser'],
});

function Login() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser]);

  return (
    <div>
      <h1>Login component</h1>
      <Button onClick={handleGoogleSignIn}>Zaloguj przez google</Button>
    </div>
  );
}

export default Login;
