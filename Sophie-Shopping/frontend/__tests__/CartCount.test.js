import { render } from '@testing-library/react';
import wait from 'waait';

import CartCount from '../components/CartCount';

describe('<CartCount/>', () => {
  it('Renders', () => {
    // Arrange
    render(<CartCount count={10} />);
  });

  it('Matches snapshot', () => {
    // Arrange
    const { container } = render(<CartCount count={11} />);
    expect(container).toMatchSnapshot();
  });

  it('updates via props', async () => {
    // Act
    const { container, rerender, debug } = render(<CartCount count={11} />);
    // Assert
    expect(container.textContent).toBe('11');
    expect(container).toHaveTextContent('11');

    // Act, update the props
    rerender(<CartCount count={12} />);
    // Wait for the animation finish when add count.
    await wait(400);
    // Assert
    expect(container).toHaveTextContent('12');
    debug();
    // Save update props screenshot
    expect(container).toMatchSnapshot();
  });
});
