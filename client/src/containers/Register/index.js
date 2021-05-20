import React from 'react';
import './styles.scss';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import { signUpUserStart } from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Register({ userErr }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const dispatch = useDispatch();

  const handleFormSubmi = (data) => {
    const {
      birthday,
      confirmEmail,
      confirmPassword,
      displayName,
      email,
      password,
    } = data;
    const dateBirthday = new Date(Date.parse(birthday));
    const isAdult = new Date(
      dateBirthday.getFullYear() + 18,
      dateBirthday.getMonth(),
      dateBirthday.getDay()
    );
    if (isAdult > new Date()) {
      setError('birthday', { type: 'notAdult' });
      return;
    }
    if (email !== confirmEmail) {
      setError('confirmEmail', { type: 'notMatch' });
      return;
    }
    if (password !== confirmPassword) {
      setError('confirmPassword', { type: 'notMatch' });
      return;
    }
    dispatch(
      signUpUserStart({
        displayName,
        email,
        confirmEmail,
        password,
        confirmPassword,
      })
    );
  };

  return (
    <section className='register'>
      <div className='wrapper'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(handleFormSubmi)}>
          <div>
            {errors.displayName?.type === 'required' && (
              <span>Name is required</span>
            )}
            {errors.displayName?.type === 'minLength' && (
              <span>Minimum 3 characters</span>
            )}
            <Input
              {...register('displayName', { required: true, minLength: 3 })}
              placeholder='Name'
              type='text'
            />
          </div>
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
            {errors.confirmEmail?.type === 'required' && (
              <span>Confirm is required</span>
            )}
            {errors.confirmEmail?.type === 'notMatch' && (
              <span>The emails do not match</span>
            )}
            <Input
              {...register('confirmEmail', {
                required: true,
                minLength: 5,
              })}
              placeholder='Confirm Email'
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
          <div>
            {errors.confirmPassword?.type === 'required' && (
              <span>Confirm is required</span>
            )}
            {errors.confirmPassword?.type === 'notMatch' && (
              <span>The passwords do not match</span>
            )}
            <Input
              {...register('confirmPassword', { required: true, minLength: 8 })}
              placeholder='Confirm Password'
              type='password'
            />
          </div>
          <label>Birthday</label>
          <div>
            {errors.birthday?.type === 'required' && (
              <span>Birthday is required</span>
            )}
            {errors.birthday?.type === 'notAdult' && (
              <span>18 years old is required</span>
            )}
            <Input
              {...register('birthday', { required: true })}
              className='birthday'
              type='date'
            />
          </div>
          <div>
            <Button type='submit'>Signup</Button>
          </div>
          {userErr.length > 0 && <p>{userErr}</p>}
        </form>
      </div>
    </section>
  );
}

export default Register;
