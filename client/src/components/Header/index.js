import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/user.actions';
import './styles.scss';

const mapState = (state) => ({
  currentUser: state.user['currentUser'],
});

function Header(props) {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header>
      <div className='logo'>LOGO</div>
      <nav>
        <ul>
          {!currentUser && (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/registration'>Register</Link>
              </li>
            </>
          )}
          {currentUser && (
            <>
              <li>
                <span onClick={signOut}>Logout</span>
              </li>
              <li>
                <Link to='/favs'>Favs</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;