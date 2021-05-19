import React from 'react';
import './styles.scss';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';

function Register() {
  return (
    <section className='register'>
      <div>
        <h1>Register</h1>
        <Input placeholder='Email' type='text' />
        <Input placeholder='Confirm Email' type='text' />
        <Input placeholder='Password' type='password' />
        <Input placeholder='Confirm Password' type='password' />
        <Input className='birthday' label='Birthday' type='date' />
        <Button>Signup</Button>
      </div>
    </section>
  );
}

export default Register;
