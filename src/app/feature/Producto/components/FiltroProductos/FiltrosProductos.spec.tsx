import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FiltrosProductos from './FiltrosProductos';

test('Renders the component', () => {
  const component = render(<FiltrosProductos />);
  expect(component).toBeDefined();
});
