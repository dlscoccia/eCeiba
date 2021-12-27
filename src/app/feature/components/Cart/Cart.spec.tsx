import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Cart from './Cart';
import store from '../../../core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';


const cart = [
  {
    id: 1,
    title: 'PREMNA 6 AÑOS',
    description:
      'Esta especie es muy apetecida en el bonsai, usada en muchas partes del mundo es un árbol de mediana altura, de madera muy densa y de gran manipulación de sus ramas. Es un árbol de exterior, requiriendo grandes cantidades de radiación solar. Igualmente el agua es muy importante en esta especie. En el vivero Casa del Bonsai podrá encontrar una exposición itinerante, a la venta, de arboles bonsai de diferentes gamas, edades, estilos, especies y tamaños.',
    price: 140000,
    image:
      'https://casadelbonsai.com/wp-content/uploads/2021/05/casadelbonsai_PRENMA_-250x250.jpg',
    qty: 5,
  },
];

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

test('Renders the cart', () => {
  const component = render(<Cart />);
  component.getByText('Cart Summary');
  component.getByText('TOTAL: (0 items)');
  component.getByText('$ 0');
  component.getByText('Proceed To Checkout');
});
