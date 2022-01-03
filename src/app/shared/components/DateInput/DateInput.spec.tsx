import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import DateInput from './DateInput';

test('renders the component', () => {
  const component = render(<DateInput />);
  expect(component).toBeDefined();

  const input = component.getByLabelText('Fecha');

  const today = new Date().toISOString().split('T')[0];
  expect(input).toHaveValue(today);

  fireEvent.change(input, { target: { value: '2021-12-31' } });
  expect(input).toHaveValue('2021-12-31');

  component.getByText(/^Precio despacho: \$[0-9]+/);
  component.getByText(/Fecha estimada de entrega: [0-9]{4}-[0-9]{2}-[0-9]{2}/);

  fireEvent.change(input, { target: { value: '2022-12-08' } });
  component.getByText(/Recargo por día festivo/);

  fireEvent.change(input, { target: { value: '2022-12-09' } });
  expect(component.getByText(/Recargo por día festivo/)).not.toBeVisible();

  fireEvent.change(input, { target: { value: '2022-11-05' } });
  component.getByText(/Recargo por día festivo/);

  fireEvent.change(input, { target: { value: '2022-11-06' } });
  component.getByText(/2022-11-07/);
});
