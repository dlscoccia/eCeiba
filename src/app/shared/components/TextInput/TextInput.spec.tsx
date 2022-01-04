import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import TextInput from './TextInput';


describe('Componente input generico', () => {
  test('Carga el componente', () => {
    let component = render(
      <TextInput
        label={'nombre'}
        minLength={4}
        email={false}
        id={0}
        setValidInput={() => {}}
      />
    );
    expect(component).toBeDefined();
  });

  test('el componente tiene valor y label correcto', () => {
    let component = render(
      <TextInput
        label={'nombre'}
        minLength={4}
        email={false}
        id={0}
        setValidInput={() => {}}
      />
    );
    component.getByText('NOMBRE');
    let input = component.getByPlaceholderText('nombre');
    expect(input).toHaveValue('');
  });

  test('el input cambia el valor', () => {
    let component = render(
      <TextInput
        label={'nombre'}
        minLength={4}
        email={false}
        id={0}
        setValidInput={() => {}}
      />
    );
    let input = component.getByPlaceholderText('nombre');
    fireEvent.change(input, { target: { value: 'Alfonso' } });
    expect(input).toHaveValue('Alfonso');
  });

  test('crea un input email', () => {
    const component = render(
      <TextInput
        label={'email'}
        minLength={8}
        id={2}
        email={true}
        setValidInput={() => {}}
      />
    );
    expect(component).toBeDefined();
    component.getByText('EMAIL');
  });
  test('cambia el valor del input', () => {
    const component = render(
      <TextInput
        label={'email'}
        minLength={8}
        id={2}
        email={true}
        setValidInput={() => {}}
      />
    );
    const input = component.getByPlaceholderText('email');
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'paco@email.com' } });
    expect(input).toHaveValue('paco@email.com');
    fireEvent.change(input, { target: { value: 'no es un email' } });
    fireEvent.blur(input);
    component.getByText('Ingrese un email valido.');
  });

  test('muestra mensajes de verificacion', () => {
    // email

    const component = render(
      <TextInput
        label={'apellido'}
        minLength={4}
        email={false}
        id={1}
        setValidInput={() => {}}
      />
    );
    const minLength = 4;
    const input = component.getByPlaceholderText('apellido');
    fireEvent.change(input, { target: { value: 'pac' } });
    fireEvent.blur(input);
    component.getByText(
      `Su apellido es requerido, Minimo ${minLength} caracteres`
    );
    fireEvent.change(input, { target: { value: 'paco' } });
    fireEvent.blur(input);
    expect(
      component.queryByText(
        `Su apellido es requerido, Minimo ${minLength} caracteres`
      )
    ).toBeNull();
  });
});


