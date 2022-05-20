import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import SingleProductPage, {
  SINGLE_ITEM_QUERY,
} from '../components/SingleProduct';
import { fakeItem } from '../lib/testUtils';

const product = fakeItem();

// Arrange, mock the query data
const mocks = [
  {
    request: {
      query: SINGLE_ITEM_QUERY,
      variables: {
        id: '123',
      },
    },
    result: {
      data: {
        Product: product,
      },
    },
  },
];

describe('<Single Product>', () => {
  it('render with proper data', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleProductPage id="123" />
      </MockedProvider>
    );
    // Act
    // Use async/await function to handle the query response.
    await screen.findByTestId('singleProduct');
    debug();
    // Assert
    expect(container).toMatchSnapshot();
  });

  it('Errors message when no item', async () => {
    // Arrange, mock the query data
    const errorMocks = [
      {
        request: {
          query: SINGLE_ITEM_QUERY,
          variables: {
            id: '123',
          },
        },
        result: {
          errors: [{ message: 'No item found ....' }],
        },
      },
    ];
    const { container, debug } = render(
      <MockedProvider mocks={errorMocks}>
        <SingleProductPage id="123" />
      </MockedProvider>
    );
    // Act
    // Use async/await function to handle the query response.
    await screen.findByTestId('graphql-error');
    debug();
    // Assert
    expect(container).toHaveTextContent('No item found ....');
  });
});
