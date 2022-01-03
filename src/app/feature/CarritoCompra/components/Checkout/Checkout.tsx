import DateInput from 'app/shared/components/DateInput/DateInput';
import TextInput from 'app/shared/components/TextInput/TextInput';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { formFields } from '../../models/checkoutFields';
import { Wrapper } from './Checkout.styles';

const Checkout = ({ carrito }: any) => {
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
    <Wrapper>
      <form
        onSubmit={(e) => handleSubmit(e)}
        data-testid="form"
        className="form"
      >
        <div className="form__inputs">
          {formFields.map((field) => (
            <TextInput
              key={field.id}
              {...field}
              setValidInput={handleValidInput}
            />
          ))}
        </div>
        <div className="form__calendar">
          <DateInput />
          <button
            type="submit"
            disabled={disableSubmit}
            className="form__calendar__button"
          >
            Confirmar
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    carrito: state.productos.carrito,
  };
};

export default connect(mapStateToProps, {})(Checkout);
