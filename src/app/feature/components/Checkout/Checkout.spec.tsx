import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Checkout from './Checkout';

test('Renders the cart', () => {
  const component = render(<Checkout />);
  expect(component).toBeDefined();
  const button = component.getByText('Confirmar');

  expect(button).toBeDisabled();

  const nombre = component.getByPlaceholderText('nombre');
  fireEvent.change(nombre, { target: { value: 'Paco' } });
  fireEvent.blur(nombre);

  const apellido = component.getByPlaceholderText('apellido');
  fireEvent.change(apellido, { target: { value: 'Tija' } });
  fireEvent.blur(apellido);

  expect(button).toBeDisabled();

  const email = component.getByPlaceholderText('email');
  fireEvent.change(email, { target: { value: 'paco@gmail.com' } });
  fireEvent.blur(email);

  const direccion = component.getByPlaceholderText('direccion');
  fireEvent.change(direccion, { target: { value: 'la casa de la esquina' } });
  fireEvent.blur(direccion);

  fireEvent.click(button);
});
