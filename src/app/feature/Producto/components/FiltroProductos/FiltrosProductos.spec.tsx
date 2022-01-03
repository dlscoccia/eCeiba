import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender } from '@testing-library/react';
import FiltrosProductos from './index';
import { Provider } from 'react-redux';
import store from 'app/core/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const render = (component: React.ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <Router>{component}</Router>
    </Provider>
  );

test('Renders the component', () => {
  const producto = [
    {
      id: 1,
      title: 'PREMNA 6 AÑOS',
      description:
        'Esta especie es muy apetecida en el bonsai, usada en muchas partes del mundo es un árbol de mediana altura, de madera muy densa y de gran manipulación de sus ramas. Es un árbol de exterior, requiriendo grandes cantidades de radiación solar. Igualmente el agua es muy importante en esta especie. ',
      price: 140000,
      image:
        'https://static.wixstatic.com/media/dcb053_54d4f642967740b09a3611287149c19c~mv2.jpg/v1/fill/w_474,h_316,al_c,q_80,usm_0.66_1.00_0.01/dcb053_54d4f642967740b09a3611287149c19c~mv2.webp',
      qty: 0,
      species: 'arbolito de navidad',
      age: 6,
    },
  ];
  const opciones = {
    etiqueta: 'Menor edad',
    filtro: 'age',
    condicion: 'menor',
  };
  const handler = () => {};
  const component = render(
    <FiltrosProductos
      {...opciones}
      productos={producto}
      setListaFiltrada={handler}
    />
  );
  expect(component).toBeDefined();
  component.getByText('Menor edad');
});
