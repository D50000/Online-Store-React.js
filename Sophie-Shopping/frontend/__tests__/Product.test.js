import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import Product from '../components/Product';
import { fakeItem } from '../lib/testUtils';
import { CartStateProvider } from '../lib/cartState';

const product = fakeItem(); // Initial dta
describe('<Product/>', () => {
  it('renders out the price tag and title', () => {
    // Act
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider>
          <Product product={product} />
        </MockedProvider>
      </CartStateProvider>
    );
    // Assert
    debug(); // Debug will convert the React Node to html structure.
    // const priceTag = screen.getByText('$50');
    // expect(priceTag).toBeInTheDocument();
  });
});
