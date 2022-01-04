import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import ImageSlider from './ImageSlider';
import { SliderData } from '../../utils/slider';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Componente imageslider pruebas', () => {
  test('Carga el componente', () => {
    const component = render(
      <Router>
        <ImageSlider slides={SliderData} />
      </Router>
    );
    expect(component).toBeDefined();
  });

  test('Tiene los elementos', () => {
    const component = render(
      <Router>
        <ImageSlider slides={SliderData} />
      </Router>
    );
    component.getByAltText('slide');
    const left = component.getAllByRole('button')[0];
    expect(left).toBeDefined();
    const right = component.getAllByRole('button')[1];
    expect(right).toBeDefined();
  });

  let active;
  test('Funciona el boton derecho', () => {
    const component = render(
      <Router>
        <ImageSlider slides={SliderData} />
      </Router>
    );
    const right = component.getAllByRole('button')[1];
    fireEvent.click(right);
    fireEvent.click(right);
    active = document.getElementsByClassName('slide active')[0];
    expect(active).toHaveAttribute('data-testid', '2');
  });

  test('Regresa al inicio con el boton derecho', () => {
    const component = render(
      <Router>
        <ImageSlider slides={SliderData} />
      </Router>
    );
    const right = component.getAllByRole('button')[1];
    fireEvent.click(right);
    fireEvent.click(right);
    active = document.getElementsByClassName('slide active')[0];
    expect(active).toHaveAttribute('data-testid', '2');
    fireEvent.click(right);
    fireEvent.click(right);
    active = document.getElementsByClassName('slide active')[0];
    active = document.getElementsByClassName('slide active')[0];
    expect(active).toHaveAttribute('data-testid', '0');
  });
  test('Funciona boton izquierdo', () => {
    const component = render(
      <Router>
        <ImageSlider slides={SliderData} />
      </Router>
    );
    component.getByAltText('slide');
    const left = component.getAllByRole('button')[0];
    fireEvent.click(left);
    active = document.getElementsByClassName('slide active')[0];
    expect(active).toHaveAttribute('data-testid', '3');
  });
  test('regresa al inicio con el boton izquierdo', () => {
    const component = render(
      <Router>
        <ImageSlider slides={SliderData} />
      </Router>
    );
    component.getByAltText('slide');
    const left = component.getAllByRole('button')[0];
    fireEvent.click(left);
    active = document.getElementsByClassName('slide active')[0];
    expect(active).toHaveAttribute('data-testid', '3');
  });
});


