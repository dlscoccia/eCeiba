import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Suscribete from './Suscribete';

test('Renders the component', () => {
  const component = render(<Suscribete />);
  component.getByText('Suscribete!!');
  component.getByText('Enterate de todas nuestras novedades.');
  component.getByText('Email').closest('label');
  const input = component.getByLabelText('Email');
  fireEvent.change(input, { target: { value: 'hola' } });
  expect(input).toHaveValue('hola');
});
