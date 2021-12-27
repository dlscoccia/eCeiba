import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ImageSlider from './ImageSlider';
import slides from '../../../core/api/SliderData';

test('Renders the cart', () => {
  const component = render(<ImageSlider slides={slides} />);
  component.getByAltText('slide');
  component.getAllByRole('button');
});
