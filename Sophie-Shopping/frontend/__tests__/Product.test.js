import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import Product from '../components/Product';
import { fakeItem } from '../lib/testUtils';
import { CartStateProvider } from '../lib/cartState';

const product = fakeItem(); // Initial data
describe('<Product/>', () => {
  it('renders out the price tag and title', () => {
    // Arrange
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider>
          <Product product={product} />
        </MockedProvider>
      </CartStateProvider>
    );
    debug(); // Debug will convert the React Node to html structure.
    // Act
    const priceTag = screen.getByText('NT$5,000'); // 'screen' is the result of the render.
    // Assert
    expect(priceTag).toBeInTheDocument();

    // Act
    const link = container.querySelector('a');
    debug(link);
    // Assert
    expect(link).toHaveAttribute('href', '/product/abc123');
    expect(link).toHaveTextContent(product.name);
  });

  it('Renders and matches the snapshot', () => {
    // Arrange
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider>
          <Product product={product} />
        </MockedProvider>
      </CartStateProvider>
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  it('render the image property', () => {
    // Arrange
    const { container, debug } = render(
      <CartStateProvider>
        <MockedProvider>
          <Product product={product} />
        </MockedProvider>
      </CartStateProvider>
    );
    // Act
    const img = screen.getByAltText(product.name);
    // Assert
    expect(img).toBeInTheDocument();
  });
});
