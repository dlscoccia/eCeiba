import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Carrito from './index';
import store from '../../../../core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

describe('Pruebas al carrito de compras vacio', () => {
  test('Renders the Carrito', () => {
    const component = render(<Carrito />);
    expect(component).toBeDefined();
  });

  test('Tiene los elementos estaticos', () => {
    const component = render(<Carrito />);
    component.getByText('Resumen de tu compra');
    component.getByText('TOTAL: (0 artículos)');
    component.getByText('$ 0');
    component.getByText('Realizar pedido');
    component.getByText('No tienes ningun producto agregado');
    component.getByText('Ver productos');
  });
});

