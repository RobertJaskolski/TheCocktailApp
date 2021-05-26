import React from 'react';
import {
  render,
  INIT_STATE,
  fireEvent,
  waitFor,
  checkProps,
} from '../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import Reset from '../../containers/Reset';

describe('Reset password container tests', () => {
  describe('Render and propTypes tests', () => {
    const props = { userErr: '' };
    test('should render component correctly', () => {
      const component = render(<Reset {...props} />, {
        INIT_STATE: INIT_STATE,
      });
      const { getByText } = component;
      expect(getByText('Reset password').textContent).toBe('Reset password');
    });

    test('should throw error when we try render component with bad type prop userErr', () => {
      expect(checkProps(Reset, { userErr: 1 })).toBeDefined();
    });

    test('should not throw error when we passed userError Correctlly', () => {
      expect(checkProps(Reset, { userErr: 'error' })).toBeUndefined();
    });
  });

  describe('Form errors and interactions', () => {
    let component;
    const props = { userErr: 'Some error' };
    beforeEach(() => {
      component = render(<Reset {...props} />, {
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
      expect(errors.length).toBe(2);
    });

    test('should throw errors in email field', async () => {
      const { getAllByRole, getByPlaceholderText, container } = component;

      const buttons = getAllByRole('button');
      const emailInput = getByPlaceholderText('Email');

      fireEvent.change(emailInput, { target: { value: 'T' } });
      await waitFor(() => fireEvent.click(buttons[0]));

      const errors = container.querySelectorAll('span');

      expect(errors[0].textContent).toBe('Minimum 5 characters');
    });
  });

  describe('Submit form', () => {
    // TODO
  });
});
