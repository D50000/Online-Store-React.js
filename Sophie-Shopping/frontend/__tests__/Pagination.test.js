import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import Pagination from '../components/Pagination';
import { makePaginationMocksFor } from '../lib/testUtils';

describe('<Pagination />', () => {
  it('display a loading message', () => {
    const { container } = render(
      <MockedProvider mocks={makePaginationMocksFor(1)}>
        <Pagination />
      </MockedProvider>
    );
    expect(container).toHaveTextContent('Loading');
  });

  // Single page is 4 items.
  it('render pagination for 18 items', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    expect(container).toHaveTextContent('Page 1 of 5');

    const pageCountSpan = screen.getByTestId('pageCount');
    expect(pageCountSpan).toHaveTextContent('5');
    expect(container).toMatchSnapshot();
  });

  it('disable the prev page on first page', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(10)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    const preButton = screen.getByText(/Previous/); // Regular Expression
    const nextButton = screen.getByText(/Next/);

    expect(preButton).toHaveAttribute('aria-disabled', 'true');
    expect(nextButton).toHaveAttribute('aria-disabled', 'false');
    expect(container).toMatchSnapshot();
  });

  it('disable the next page on last page', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(10)}>
        <Pagination page={3} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    const preButton = screen.getByText(/Previous/); // Regular Expression
    const nextButton = screen.getByText(/Next/);

    expect(preButton).toHaveAttribute('aria-disabled', 'false');
    expect(nextButton).toHaveAttribute('aria-disabled', 'true');
    expect(container).toMatchSnapshot();
  });

  it('enables both on middle page', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={makePaginationMocksFor(10)}>
        <Pagination page={2} />
      </MockedProvider>
    );
    await screen.findByTestId('pagination');
    const preButton = screen.getByText(/Previous/); // Regular Expression
    const nextButton = screen.getByText(/Next/);

    expect(preButton).toHaveAttribute('aria-disabled', 'false');
    expect(nextButton).toHaveAttribute('aria-disabled', 'false');
    expect(container).toMatchSnapshot();
  });
});
