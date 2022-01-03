import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import ImageSlider from './ImageSlider';
import { SliderData } from '../../../../core/api/slider';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders the cart', () => {
  const component = render(
    <Router>
      <ImageSlider slides={SliderData} />
    </Router>
  );
  component.getByAltText('slide');
  const left = component.getAllByRole('button')[0];
  const right = component.getAllByRole('button')[1];
  fireEvent.click(right);
  fireEvent.click(right);
  let active = document.getElementsByClassName('slide active')[0];
  expect(active).toHaveAttribute('data-testid', '2');
  fireEvent.click(right);
  fireEvent.click(right);
  active = document.getElementsByClassName('slide active')[0];
  expect(active).toHaveAttribute('data-testid', '0');
  fireEvent.click(left);
  active = document.getElementsByClassName('slide active')[0];
  expect(active).toHaveAttribute('data-testid', '3');
  fireEvent.click(left);
  active = document.getElementsByClassName('slide active')[0];
  expect(active).toHaveAttribute('data-testid', '2');
});
