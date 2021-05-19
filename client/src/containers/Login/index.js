import React, { useEffect } from 'react';
import './styles.scss';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import { googleSignInStart } from '../../redux/user/user.actions';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogo from '../../assets/googleLogo.png';
import FacebookLogo from '../../assets/facebookLogo.png';

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
    <section className='login'>
      <div>
        <h1>Login</h1>
        <Input placeholder='Email' type='text' />
        <Input placeholder='Password' type='password' />
        <Button>Signin</Button>
        <Button onClick={handleGoogleSignIn}>
          <img src={GoogleLogo} alt='google logo' />
          Signin with Google
        </Button>
        <Button>
          <img src={FacebookLogo} alt='google logo' />
          Signin with Facebook
        </Button>
        <p>Forgot password?</p>
      </div>
    </section>
  );
}

export default Login;
