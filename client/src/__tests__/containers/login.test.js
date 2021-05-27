import React from 'react';
import {
  render,
  INIT_STATE,
  fireEvent,
  waitFor,
  checkProps,
} from '../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import Login from '../../containers/Login';

describe('Login container tests', () => {
  describe('Render and propTypes tests', () => {
    const props = { userErr: '' };
    test('should render correctly', () => {
      const component = render(<Login {...props} />, {
        INIT_STATE: INIT_STATE,
      });
      const { getByText } = component;
      expect(getByText('Login').textContent).toBe('Login');
    });

    test('should throw error when we try render component with bad type prop userErr', () => {
      expect(checkProps(Login, { userErr: 1 })).toBeDefined();
    });

    test('should not throw error when we passed userError Correctlly', () => {
      expect(checkProps(Login, { userErr: 'error' })).toBeUndefined();
    });
  });

  describe('Form errors and interactions', () => {
    let component;
    const props = { userErr: 'Some error' };
    beforeEach(() => {
      component = render(<Login {...props} />, {
        INIT_STATE: INIT_STATE,
      });
      const {} = component;
    });

    test('should have a error text (props userError)', () => {
      const { getByText } = component;
      expect(getByText(props.userErr)).toBeDefined();
    });

    test('should have required error for all fields when we try submit empty form', async () => {
      const { getAllByRole, getByText } = component;
      const buttons = getAllByRole('button');

      await waitFor(() => fireEvent.click(buttons[0]));

      const errors = ['Email is required', 'Password is required'];
      const emailError = getByText(errors[0]);
      const passwordError = getByText(errors[1]);
      expect([emailError.textContent, passwordError.textContent]).toStrictEqual(
        errors
      );
    });

    test('should throw error for minimal length email', async () => {
      const { getAllByRole, getByText, getByPlaceholderText } = component;
      const buttons = getAllByRole('button');
      const emmailInput = getByPlaceholderText('Email');

      fireEvent.change(emmailInput, { target: { value: 'try' } });
      await waitFor(() => fireEvent.click(buttons[0]));

      const error = 'Minimum 5 characters';
      const emailError = getByText(error);
      expect(emailError.textContent).toStrictEqual(error);
    });

    test('should throw error for minmal length of password and pattern', async () => {
      const { getAllByRole, container, getByPlaceholderText } = component;
      const buttons = getAllByRole('button');
      const passwordInput = getByPlaceholderText('Password');

      fireEvent.change(passwordInput, { target: { value: 'try' } });
      await waitFor(() => fireEvent.click(buttons[0]));

      let error = 'Minimum 8 characters';
      let passwordError = container.querySelectorAll('span');
      expect(passwordError[1].textContent).toStrictEqual(error);

      fireEvent.change(passwordInput, { target: { value: 'TestsTests' } });
      await waitFor(() => fireEvent.click(buttons[0]));

      error = 'Uppercase letter, number and special character';
      passwordError = container.querySelectorAll('span');
      expect(passwordError[1].textContent).toStrictEqual(error);
    });
  });
  describe('Submit form', () => {
    // TODO
  });
});
