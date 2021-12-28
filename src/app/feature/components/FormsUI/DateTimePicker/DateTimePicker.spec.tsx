// myForm.test.js
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckoutForm from './DateTimePicker';

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn();
  render(<CheckoutForm onSubmit={handleSubmit} />);
screen.getByText(/sign up/i);
screen.getByText(/first name/i);
const firstName = screen.getByLabelText(/first name/i);
fireEvent.change(firstName, { target: { value: 'Alfonso' } });
expect(firstName).toHaveValue('Alfonso');
screen.getByText(/last name/i);
const lastName = screen.getByLabelText(/last name/i);
fireEvent.change(lastName, { target: { value: 'Alfonso' } });
expect(lastName).toHaveValue('Alfonso');
screen.getByText(/email/i);
const email = screen.getByLabelText(/email/i);
fireEvent.change(email, { target: { value: 'Alfonso@gmail.com' } });
expect(email).toHaveValue('Alfonso@gmail.com');
const submitButton = screen.getByText(/submit/i);
fireEvent.submit(submitButton, handleSubmit);


});
