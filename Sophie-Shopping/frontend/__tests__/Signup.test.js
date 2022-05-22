import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
// import userEvent from '@testing-library/user-event'; // TODO: import error

import SignUp, { SIGNUP_MUTATION } from '../components/SignUp';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

// Arrange
const me = fakeUser();
const password = 'test';
const mocks = [
  // mutation mocks
  {
    request: {
      SIGNUP_MUTATION,
      variable: {
        name: me.name,
        email: me.email,
        password,
      },
    },
    result: {
      data: {
        createUser: {
          __typename: 'User',
          id: 'testId',
          name: me.name,
          email: me.email,
        },
      },
    },
  },
  // current user mocks
  //   {
  //     request: { query: CURRENT_USER_QUERY },
  //     result: { data: { authenticatedItem: me } },
  //   },
];

describe('<SignUp />', () => {
  it('render and matches snapshot', () => {
    const { container } = render(
      <MockedProvider>
        <SignUp />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('calls the mutation properly', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SignUp />
      </MockedProvider>
    );
    // Simulate the user action.
    await userEvent.type(screen.getByPlaceholderText(/name/i), me.name);
    await userEvent.type(screen.getByPlaceholderText(/email/i), me.email);
    await userEvent.type(screen.getByPlaceholderText(/password/i), password);

    await userEvent.click(screen.getByText('Sign Up'));
    await screen.findByText(`Signed up with ${me.email}`);
    debug();
  });
});
