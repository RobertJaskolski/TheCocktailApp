import React from 'react';
import './styles.scss';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';

function Reset() {
  return (
    <section className='reset'>
      <div>
        <h1>Reset password</h1>
        <Input placeholder='Email' type='text' />
        <Input placeholder='Confirm Email' type='text' />
        <Button>Reset</Button>
      </div>
    </section>
  );
}

export default Reset;
