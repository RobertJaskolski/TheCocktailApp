import React from 'react';
import {
  render,
  INIT_STATE,
  fireEvent,
  waitFor,
  checkProps,
} from '../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import Register from '../../containers/Register';

describe('Register container tests', () => {
  describe('Render and propTypes tests', () => {
    const props = { userErr: '' };

    test('should render component correctly', () => {
      const component = render(<Register {...props} />, {
        INIT_STATE: INIT_STATE,
      });
      const { getByText } = component;
      expect(getByText('Register').textContent).toBe('Register');
    });

    test('should throw error when we try render component with bad type prop userErr', () => {
      expect(checkProps(Register, { userErr: 1 })).toBeDefined();
    });

    test('should not throw error when we passed userError Correctlly', () => {
      expect(checkProps(Register, { userErr: 'error' })).toBeUndefined();
    });
  });

  describe('Form errors and interactions', () => {
    let component;
    const props = { userErr: 'Some error' };
    beforeEach(() => {
      component = render(<Register {...props} />, {
        INIT_STATE: INIT_STATE,
      });
      const {} = component;
    });

    test('should have a error text (props userError)', () => {
      const { getByText } = component;
      expect(getByText(props.userErr)).toBeDefined();
    });

    test('should throw error requied in all fields', async () => {
      const { getAllByRole, container } = component;

      const buttons = getAllByRole('button');
      await waitFor(() => fireEvent.click(buttons[0]));

      const errors = container.querySelectorAll('span');
      expect(errors.length).toBe(6);
    });

    test('should throw errors in name field', async () => {
      const { getAllByRole, getByPlaceholderText, container } = component;

      const buttons = getAllByRole('button');
      const nameInput = getByPlaceholderText('Name');

      fireEvent.change(nameInput, { target: { value: 'T' } });
      await waitFor(() => fireEvent.click(buttons[0]));

      const errors = container.querySelectorAll('span');

      expect(errors[0].textContent).toBe('Minimum 3 characters');
    });

    test('should throw errors in email field', async () => {
      const { getAllByRole, getByPlaceholderText, container } = component;

      const buttons = getAllByRole('button');
      const emailInput = getByPlaceholderText('Email');

      fireEvent.change(emailInput, { target: { value: 'T' } });
      await waitFor(() => fireEvent.click(buttons[0]));

      const errors = container.querySelectorAll('span');

      expect(errors[1].textContent).toBe('Minimum 5 characters');
    });

    test('should throw errors in password field', async () => {
      const { getAllByRole, getByPlaceholderText, container } = component;

      const buttons = getAllByRole('button');
      const passwordInput = getByPlaceholderText('Password');

      fireEvent.change(passwordInput, { target: { value: 'T' } });
      await waitFor(() => fireEvent.click(buttons[0]));
      let errors = container.querySelectorAll('span');
      expect(errors[3].textContent).toBe('Minimum 8 characters');

      fireEvent.change(passwordInput, { target: { value: 'TestTestt' } });
      await waitFor(() => fireEvent.click(buttons[0]));
      errors = container.querySelectorAll('span');
      expect(errors[3].textContent).toBe(
        'Uppercase letter, number and special character'
      );
    });
  });

  describe('Submit form', () => {
    // TODO
  });
});
