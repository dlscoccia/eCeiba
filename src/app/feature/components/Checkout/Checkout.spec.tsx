import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Checkout from './Checkout';

test('Renders the cart', () => {
  const component = render(<Checkout />);
  const numberOfElelemntsByInput = 2;
  component.getByRole('form');
  component.getByText('Información personal');
  expect(component.getAllByText('Nombre')).toHaveLength(
    numberOfElelemntsByInput
  );
  expect(component.getAllByText('Apellido')).toHaveLength(
    numberOfElelemntsByInput
  );
  expect(component.getAllByText('Email')).toHaveLength(
    numberOfElelemntsByInput
  );
  expect(component.getAllByText('Teléfono')).toHaveLength(
    numberOfElelemntsByInput
  );
  component.getByText('Dirección');
  expect(component.getAllByText('Dirección 1')).toHaveLength(
    numberOfElelemntsByInput
  );
  expect(component.getAllByText('Dirección 2')).toHaveLength(
    numberOfElelemntsByInput
  );
  expect(component.getAllByText('Ciudad')).toHaveLength(
    numberOfElelemntsByInput
  );
  expect(component.getAllByText('Departamento')).toHaveLength(
    numberOfElelemntsByInput
  );
  component.getByText('Fecha del domicilio');
  expect(component.getAllByText('Fecha')).toHaveLength(
    numberOfElelemntsByInput
  );
  expect(component.getAllByText('Instrucciones')).toHaveLength(
    numberOfElelemntsByInput
  );
});
