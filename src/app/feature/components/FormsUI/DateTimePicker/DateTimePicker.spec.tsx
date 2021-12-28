// myForm.test.js
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckoutForm from './DateTimePicker';

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn();
  render(<CheckoutForm onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/first name/i), 'John');
  userEvent.type(screen.getByLabelText(/last name/i), 'Dee');
  userEvent.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com');

  userEvent.click(screen.getByRole('button', { name: /submit/i }));
});

jest.mock('react-datepicker', () => (props) => (
  <input
    data-testid="mockedDateField"
    onChange={() => {
      console.log(props.onChange);
      props.onChange('asdfasd');
    }}
  />
));

test('should remove date error id we select date', async () => {
  const handleSubmit = jest.fn();
  const { getByText, getByTestId, queryByTestId } = render(
    <CheckoutForm onSubmit={handleSubmit} />
  );

  const button = getByText('Submit');
  fireEvent.click(button);

  const mockedDateField = getByTestId('mockedDateField');
  fireEvent.change(mockedDateField, { target: { value: new Date() } });

  await waitFor(() => {
    expect(queryByTestId('dateError')).toBe(null);
  });
});
