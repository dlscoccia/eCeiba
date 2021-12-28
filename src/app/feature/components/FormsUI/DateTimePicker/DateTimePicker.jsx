// myForm.js
import React from 'react';
import { Formik, Field, Form } from 'formik';
import DatePicker from 'react-datepicker';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CheckoutForm = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    await sleep(500);
    onSubmit(values);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          date: '',
        }}
        validate={(values) => {
          let errors = {};
          if (!values.date) {
            errors.date = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <DatePicker
              selected={values.date}
              onChange={(event) => {
                setFieldValue('date', event);
              }}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CheckoutForm;
