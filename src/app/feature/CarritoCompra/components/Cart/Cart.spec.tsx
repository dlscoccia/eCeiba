import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Cart from './Cart';
import { productos } from '../../../../core/api/db.json';
import store from '../../../../core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

test('Renders the cart', () => {
  const component = render(<Cart />);
  component.getByText('Resumen de tu compra');
  component.getByText('TOTAL: (0 artículos)');
  component.getByText('$ 0');
  component.getByText('Realizar pedido');
  component.getByText('No tienes ningun producto agregado');
  component.getByText('Ver productos');
});
test('Renders the cart', () => {
  const carrito = [productos[0]];
  const component = render(<Cart carrito={carrito}></Cart>);
  expect(component).toBeDefined();
});
