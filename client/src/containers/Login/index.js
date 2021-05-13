import React from 'react';
import './styles.scss';
import Button from '../../components/form/Button';
import { singInWithGoogle } from '../../firebase/utils';

function Login() {
  return (
    <div>
      <h1>Login component</h1>
      <Button onClick={singInWithGoogle}>Zaloguj przez google</Button>
    </div>
  );
}

export default Login;
