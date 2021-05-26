import React from 'react';
import { render, INIT_STATE, fireEvent, waitFor } from '../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';
import randomMock from '../../__mocks__/random.mock';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Random from '../../containers/Random';
import { MemoryRouter } from 'react-router';

const server = setupServer(
  rest.get(
    'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php',
    (req, res, ctx) => {
      return res(ctx.json({ ...randomMock }));
    }
  )
);

describe('Random container tests', () => {
  let component;
  beforeAll(() => server.listen());
  beforeEach(() => {
    server.resetHandlers();
    component = render(
      <MemoryRouter>
        <Random />
      </MemoryRouter>,
      {
        INIT_STATE: INIT_STATE,
      }
    );
    const {} = component;
  });
  afterAll(() => server.close());

  test('should render component correctly', () => {
    const { getByText } = component;
    expect(getByText('Random drinks').textContent).toBe('Random drinks');
  });

  test('should render 3 cards correctly on render (first fetch)', async () => {
    const { getAllByRole } = component;
    await waitFor(() => getAllByRole('link'));

    expect(getAllByRole('link').length).toBe(3);
  });
});
