import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/user.actions';
import Logo from '../../assets/logo.png';
import './styles.scss';

const mapState = (state) => ({
  currentUser: state.user['currentUser'],
});

function Header() {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header>
      <div className='logo'>
        <Link to='/'>
          <img alt='Logo' src={Logo} />
        </Link>
      </div>
      <nav>
        <ul>
          {!currentUser && (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
          {currentUser && (
            <>
              <li>
                <Link to='/favs'>Favs</Link>
              </li>
              <li>
                <span onClick={signOut}>Logout</span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
