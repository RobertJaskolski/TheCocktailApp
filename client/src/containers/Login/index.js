import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import GoogleLogo from '../../assets/googleLogo.png';
import FacebookLogo from '../../assets/facebookLogo.png';

function Login({ userErr }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const handleOnSubmitForm = (data) => {
    const { email, password } = data;
    dispatch(emailSignInStart({ email, password }));
  };

  const handleForgotPassword = () => {
    history.push('/reset');
  };

  return (
    <section className='login'>
      <div className='wrapper'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleOnSubmitForm)}>
          <div>
            {errors.email?.type === 'required' && (
              <span>Email is required</span>
            )}
            {errors.email?.type === 'minLength' && (
              <span>Minimum 5 characters</span>
            )}
            <Input
              {...register('email', { required: true, minLength: 5 })}
              placeholder='Email'
              type='email'
            />
          </div>
          <div>
            {errors.password?.type === 'required' && (
              <span>Password is required</span>
            )}
            {errors.password?.type === 'pattern' && (
              <span>Uppercase letter, number and special character</span>
            )}
            {errors.password?.type === 'minLength' && (
              <span>Minimum 8 characters</span>
            )}
            <Input
              {...register('password', {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
              })}
              placeholder='Password'
              type='password'
            />
          </div>
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
          {userErr.length > 0 && <p className='error'>{userErr}</p>}
        </form>
      </div>
    </section>
  );
}

Login.propTypes = {
  userErr: PropTypes.string,
};

export default Login;
