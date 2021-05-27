import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userError } from '../redux/user/user.actions';
const mapState = ({ user }) => ({
  userErr: user['userErr'],
});

const WithUserErr = (WrappedComponent) => {
  const WithUserError = ({ ...props }) => {
    const dispatch = useDispatch();
    const { userErr } = useSelector(mapState);
    useEffect(() => {
      return () => {
        dispatch(userError(''));
      };
    }, [dispatch]);
    return <WrappedComponent userErr={userErr} {...props} />;
  };

  return WithUserError;
};

export default WithUserErr;
