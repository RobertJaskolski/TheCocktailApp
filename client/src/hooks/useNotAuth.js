import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const mapState = ({ user }) => ({
  currentUser: user['currentUser'],
});

const useNotAuth = (props) => {
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser]);
  return currentUser;
};

export default useNotAuth;
