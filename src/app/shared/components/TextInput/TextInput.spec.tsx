import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import TextInput from './TextInput';

test('Renders the component', () => {
  let component = render(
    <TextInput
      label={'nombre'}
      minLength={4}
      email={false}
      id={0}
      setValidInput={() => {}}
      formState={[]}
    />
  );
  expect(component).toBeDefined();
  component.getByText('nombre');

  let input = component.getByPlaceholderText('nombre');
  expect(input).toHaveValue('');

  fireEvent.change(input, { target: { value: 'Paco' } });
  expect(input).toHaveValue('Paco');

  // email
  component = render(
    <TextInput
      label={'email'}
      minLength={8}
      id={2}
      email={true}
      setValidInput={() => {}}
      formState={[]}
    />
  );
  expect(component).toBeDefined();
  component.getByText('email');

  input = component.getByPlaceholderText('email');
  expect(input).toHaveValue('');

  fireEvent.change(input, { target: { value: 'paco@email.com' } });
  expect(input).toHaveValue('paco@email.com');
  fireEvent.change(input, { target: { value: 'no es un email' } });
  fireEvent.blur(input);
  component.getByText('Ingrese un email valido.');

  // blur message
  component = render(
    <TextInput
      label={'apellido'}
      minLength={4}
      email={false}
      id={1}
      setValidInput={() => {}}
      formState={[]}
    />
  );
  const minLength = 4;
  input = component.getByPlaceholderText('apellido');
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
