import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

import './TimePicker.css';
const DateTimePicker = ({ name, ...otherProps }) => {
  const [shippingMessage, setShippingMessage] = useState('');
  const [field, meta] = useField(name);
  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  useEffect(() => {
    const selectedShippingDay = new Date(field.value);
    console.log(selectedShippingDay);
    console.log(typeof field.value);
    if (
      selectedShippingDay.getDay() === 5 ||
      selectedShippingDay.getDay() === 6
    ) {
      setShippingMessage('$8000 - Se envía el siguiente día habil.');
    } else {
      setShippingMessage('$16000 - entrega en día festivo');
    }
  }, [field.value]);

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return (
    <div className="container">
      <TextField {...configDateTimePicker} className="date-picker" />
      <div className="shipping-cost">
        <p>Envio: {shippingMessage}</p>
        <p>Día de entrega: {field.value}</p>
      </div>
    </div>
  );
};

export default DateTimePicker;
