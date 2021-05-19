import React from 'react';
import './styles.scss';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import { googleSignInStart } from '../../redux/user/user.actions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GoogleLogo from '../../assets/googleLogo.png';
import FacebookLogo from '../../assets/facebookLogo.png';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const handleForgotPassword = () => {
    history.push('/reset');
  };

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
        <p onClick={handleForgotPassword}>Forgot password?</p>
      </div>
    </section>
  );
}

export default Login;
