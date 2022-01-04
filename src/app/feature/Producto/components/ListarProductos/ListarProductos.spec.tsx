import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import ListarProductos from './index';
import { Provider } from 'react-redux';
import store from '../../../../core/redux/store';
import { productos } from '../../../../core/api/db.json';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component: React.ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

describe('Lista los productos en la pagina', () => {
  test('carga el componente', () => {
    const component = render(<ListarProductos />);
    expect(component).toBeDefined();
  });

  test('Tiene los elementos estaticos', () => {
    const component = render(<ListarProductos />);
    component.getByText('Productos Destacados');
    component.getByText('Mayor precio');
  });

  test('Carga los productos', () => {
    const component = render(<ListarProductos />);
    component.getByText('Mayor precio').click();
    const numeroProductos = productos.length;
    expect(component.getAllByText('Ver Bonsai')).toHaveLength(numeroProductos);
    expect(component.getAllByText('Añadir al carrito')).toHaveLength(
      numeroProductos
    );
  });
});

