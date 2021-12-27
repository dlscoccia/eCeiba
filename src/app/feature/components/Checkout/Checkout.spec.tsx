import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Checkout from './Checkout';

test('Renders the cart', () => {
  const component = render(<Checkout />);
  component.getByRole('form');
  component.getByText('Información personal');
  expect(component.getAllByText('Nombre')).toHaveLength(2);
  expect(component.getAllByText('Apellido')).toHaveLength(2);
  expect(component.getAllByText('Email')).toHaveLength(2);
  expect(component.getAllByText('Teléfono')).toHaveLength(2);
  component.getByText('Dirección');
  expect(component.getAllByText('Dirección 1')).toHaveLength(2);
  expect(component.getAllByText('Dirección 2')).toHaveLength(2);
  expect(component.getAllByText('Ciudad')).toHaveLength(2);
  expect(component.getAllByText('Departamento')).toHaveLength(2);
  component.getByText('Fecha del domicilio');
  expect(component.getAllByText('Fecha')).toHaveLength(2);
  expect(component.getAllByText('Instrucciones')).toHaveLength(2);
});
