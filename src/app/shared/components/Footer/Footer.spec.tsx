import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Componente footer', () => {
  test('Carga el componente', () => {
    const component = render(<Footer />);
    expect(component).toBeDefined();
  });
  test('Tiene el texto', () => {
    const component = render(<Footer />);
    component.getByText(/Todos los derechos reservados/i);
  });
});
