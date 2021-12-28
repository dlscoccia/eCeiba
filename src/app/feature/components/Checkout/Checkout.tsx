import DateInput from 'app/shared/components/DateInput/DateInput';
import TextInput from 'app/shared/components/TextInput/TextInput';
import React, { useState, useEffect } from 'react';
import { formFields } from './checkoutFields';
import './Checkout.css';

const Checkout = () => {
  const [validInput, setValidInput] = useState([false, false, false, false]);
  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    const totalValidInputs = validInput.filter(
      (input) => input === true
    ).length;
    if (totalValidInputs === validInput.length) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [validInput]);

  const handleValidInput = (id: number, value: boolean) => {
    const validated = [...validInput];
    validated[id] = value;
    setValidInput(validated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Gracias por tu pedido');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {formFields.map((field) => (
        <TextInput
          key={field.id}
          {...field}
          setValidInput={handleValidInput}
          formState={validInput}
        />
      ))}

      <DateInput />
      <button type="submit" disabled={disableSubmit} className="button1 bouncy">
        Confirmar
      </button>
    </form>
  );
};

export default Checkout;
