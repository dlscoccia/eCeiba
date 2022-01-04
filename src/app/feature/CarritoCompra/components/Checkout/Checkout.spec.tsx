import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Checkout from './Checkout';
import store from '../../../../core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

    describe('Proceso de checkout', () => {
      const component = render(<Checkout />);

      test('Renders the cart', () => {
        expect(component).toBeDefined();
      });
      const button = component.getByText('Confirmar');

      test('Tiene el boton confirmar desabilitado al inicio', () => {
        expect(button).toBeDisabled();
      });

      test('Cambia el input nombre', () => {
        const component = render(<Checkout />);
        const nombre = component.getByPlaceholderText('nombre');
        fireEvent.change(nombre, { target: { value: 'Alfonso' } });
        fireEvent.blur(nombre);

      });

      test('Cambia el input apellido', () => {
        const component = render(<Checkout />);
        const apellido = component.getByPlaceholderText('apellido');
        fireEvent.change(apellido, { target: { value: 'Tijanero' } });
        fireEvent.blur(apellido);
      });

      test('El boton sigue desabilitado por faltar 2 inputs', () => {
        expect(button).toBeDisabled();
      });

      test('Cambia el email', () => {
        const component = render(<Checkout />);
        const email = component.getByPlaceholderText('email');
        fireEvent.change(email, { target: { value: 'paco@gmail.com' } });
        fireEvent.blur(email);
      });

      test('Cambia la direccion', () => {
        const component = render(<Checkout />);
        const direccion = component.getByPlaceholderText('direccion');
        fireEvent.change(direccion, {
          target: { value: 'la casa de la esquina' },
        });
        fireEvent.blur(direccion);
      });
    });


