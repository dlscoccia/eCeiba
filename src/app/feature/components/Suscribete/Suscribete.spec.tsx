import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Suscribete from './Suscribete';

test('Renders the component', () => {
  const component = render(<Suscribete />);
  component.getByText('Suscribete!!');
  component.getByText('Enterate de todas nuestras novedades.');
  component.getByText(/Ingresa tu Email/i).closest('label');
  const input = component.getByLabelText(/Ingresa tu Email/i);
  fireEvent.change(input, { target: { value: 'hola' } });
  expect(input).toHaveValue('hola');
});
