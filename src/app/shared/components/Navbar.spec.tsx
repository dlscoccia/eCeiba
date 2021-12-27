import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('renders content', () => {
  const component = render(<Navbar />);
  console.log(component);
});
