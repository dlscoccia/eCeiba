import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import DateInput from './DateInput';


describe('Componente de fecha', () => {
  test('renders the component', () => {
    const totalPrice = 1000;
    const component = render(<DateInput totalPrice={totalPrice} />);
    expect(component).toBeDefined();
  });
  test('Tiene el input', () => {
    const totalPrice = 1000;
    const component = render(<DateInput totalPrice={totalPrice} />);
    const input = component.getByLabelText('Fecha');
    expect(input).toBeDefined();
  });
  test('Tiene la fecha actual', () => {
    const totalPrice = 1000;
    const component = render(<DateInput totalPrice={totalPrice} />);
    const input = component.getByLabelText('Fecha');
    const today = new Date().toISOString().split('T')[0];
    expect(input).toHaveValue(today);
  });
  test('Cambia el valor de la fecha', () => {
    const totalPrice = 1000;
    const component = render(<DateInput totalPrice={totalPrice} />);
    const input = component.getByLabelText('Fecha');
    fireEvent.change(input, { target: { value: '2021-12-31' } });
    expect(input).toHaveValue('2021-12-31');
  });
  test('Muestra recargo por festivo', () => {
    const totalPrice = 1000;
    const component = render(<DateInput totalPrice={totalPrice} />);
    const input = component.getByLabelText('Fecha');
    fireEvent.change(input, { target: { value: '2022-12-08' } });
    component.getByText(/Recargo por día festivo/);
  });

  test('No muestra recargo en no festivo', () => {
    const totalPrice = 1000;
    const component = render(<DateInput totalPrice={totalPrice} />);
    const input = component.getByLabelText('Fecha');
    fireEvent.change(input, { target: { value: '2022-12-09' } });
    expect(component.getByText(/Recargo por día festivo/)).not.toBeVisible();
  });
  test('Recargo con pedido fin de semana y entrega lunes festivo', () => {
    const totalPrice = 1000;
    const component = render(<DateInput totalPrice={totalPrice} />);
    const input = component.getByLabelText('Fecha');
    fireEvent.change(input, { target: { value: '2022-11-05' } });
    component.getByText(/Recargo por día festivo/);
  });
  test('Entrega el siguiente lunes', () => {
    const totalPrice = 1000;
    const component = render(<DateInput totalPrice={totalPrice} />);
    const input = component.getByLabelText('Fecha');
    fireEvent.change(input, { target: { value: '2022-11-06' } });
    component.getByText(/2022-11-07/);
  });
});

