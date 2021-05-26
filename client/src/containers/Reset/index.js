import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetPasswordStart,
  resetUserState,
} from '../../redux/user/user.actions';
import { useHistory } from 'react-router-dom';

const mapState = ({ user }) => ({
  resetPasswordSuccess: user['resetPasswordSuccess'],
});

function Reset({ userErr }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { resetPasswordSuccess } = useSelector(mapState);

  const handleOnSubmitForm = (data) => {
    const { email, confirmEmail } = data;
    if (email !== confirmEmail) {
      setError('confirmEmail', { type: 'notMatch' });
      return;
    }
    dispatch(resetPasswordStart({ email }));
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      history.push('/login');
    }
  }, [resetPasswordSuccess, history, dispatch]);

  return (
    <section className='reset'>
      <div className='wrapper'>
        <h1>Reset password</h1>
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
            <Button aria-label='Reset password'>Reset</Button>
          </div>
          {userErr.length > 0 && <p>{userErr}</p>}
        </form>
      </div>
    </section>
  );
}

Reset.propTypes = {
  userErr: PropTypes.string,
};

export default Reset;
