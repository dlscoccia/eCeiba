import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Carrousel from './Carrousel';
import slides from '../../../core/api/SliderData';

test('Renders the cart', () => {
  const component = render(<Carrousel slides={slides} />);
  component.getByAltText('slide');
  component.getAllByRole('button');
});
