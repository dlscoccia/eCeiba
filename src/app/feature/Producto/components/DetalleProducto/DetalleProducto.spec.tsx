import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import DetalleProducto from './index';
import { Provider } from 'react-redux';
import store from '../../../../core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component: React.ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

test('Carga el componente', () => {
  const component = render(<DetalleProducto />);
  expect(component).toBeDefined();
  component.getByText('Regresar');
  component.getByText('Añadir al Carrito');
});
