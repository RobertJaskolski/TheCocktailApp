import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/user.actions';
import Logo from '../../assets/logo.png';
import './styles.scss';
import { setFavs } from '../../redux/favs/favs.actions';

const mapState = (state) => ({
  currentUser: state.user['currentUser'],
});

function Header() {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
  const signOut = () => {
    dispatch(setFavs({ data: [] }));
    dispatch(signOutUserStart());
  };

  const handleOnClickHamburger = () => {
    setHamburgerIsActive(!hamburgerIsActive);
  };

  return (
    <header>
      <div className='logo'>
        <Link to='/'>
          <img loading='lazy' alt='Logo' src={Logo} />
        </Link>
      </div>
      <button
        aria-label='hamburger menu'
        className={
          hamburgerIsActive ? 'hamburger--active hamburger' : 'hamburger'
        }
        onClick={handleOnClickHamburger}
      >
        <span className='hamburger__box'>
          <span className='hamburger__inner'></span>
        </span>
      </button>
      {/* HAMBURGER MENU */}
      <nav
        className={
          hamburgerIsActive
            ? 'menu__hamburger--active menu__hamburger'
            : 'menu__hamburger'
        }
      >
        <ul>
          {!currentUser && (
            <>
              <li onClick={handleOnClickHamburger}>
                <Link to='/'>Home</Link>
              </li>
              <li onClick={handleOnClickHamburger}>
                <Link to='/login'>Login</Link>
              </li>
              <li onClick={handleOnClickHamburger}>
                <Link to='/register'>Register</Link>
              </li>
              <li onClick={handleOnClickHamburger}>
                <Link className='random' to='/random'>
                  Random
                </Link>
              </li>
            </>
          )}
          {currentUser && (
            <>
              <li onClick={handleOnClickHamburger}>
                <Link to='/favs'>Favs</Link>
              </li>
              <li onClick={handleOnClickHamburger}>
                <span onClick={signOut}>Logout</span>
              </li>
              <li onClick={handleOnClickHamburger}>
                <Link className='random' to='/random'>
                  Random
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      {/* NORMAL MENU */}
      <nav className='menu'>
        <ul>
          {!currentUser && (
            <>
              <li onClick={handleOnClickHamburger}>
                <Link className='random' to='/random'>
                  Random
                </Link>
              </li>
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
              <li onClick={handleOnClickHamburger}>
                <Link className='random' to='/random'>
                  Random
                </Link>
              </li>
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
