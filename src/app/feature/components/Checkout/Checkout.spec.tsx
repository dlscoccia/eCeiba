import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Checkout from './Checkout';

test('Renders the cart', () => {
  const component = render(<Checkout />);
  expect(component).toBeDefined();
});
