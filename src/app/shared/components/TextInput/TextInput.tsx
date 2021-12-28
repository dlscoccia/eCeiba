import React, { SetStateAction, useState } from 'react';
import './TextInput.css';

type TextInputProps = {
  label: string;
  minLength: number;
  email: boolean;
  id: number;
  setValidInput: (id: number, value: boolean) => void;
  formState: object;
};

const TextInput = ({
  label,
  minLength,
  email,
  id,
  setValidInput,
  formState,
}: TextInputProps) => {
  const [data, setData] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const validateInput = () => {
    if (data.length < minLength) {
      setMessage(`Su ${label} es requerido, Minimo ${minLength} caracteres`);
      setValidInput(id, false);
    } else if (email) {
      const validEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          data
        );
      if (!validEmail) {
        setMessage('Ingrese un email valido.');
        setValidInput(id, false);
      } else {
        setMessage('');
        setValidInput(id, true);
      }
    } else {
      setMessage('');
      setValidInput(id, true);
    }
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={email ? 'email' : 'text'}
        id={label}
        placeholder={label}
        name={label}
        value={data}
        onChange={(e) => handleInputChange(e)}
        onBlur={validateInput}
      />
      {message.length > 0 && <span>{message}</span>}
    </div>
  );
};

export default TextInput;
