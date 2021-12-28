import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, prettyDOM, render } from '@testing-library/react';
import ImageSlider from './ImageSlider';
import slides from '../../../core/api/SliderData';

test('Renders the cart', () => {
  const component = render(<ImageSlider slides={slides} />);
  component.getByAltText('slide');
  component.getAllByRole('button');
  const left = component.getAllByRole('button')[0];
  fireEvent.click(left);
});
