import React from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Textfield from '../FormsUI/Textfield';
import CheckoutForm from '../FormsUI/DateTimePicker/DateTimePicker';
import Button from '../FormsUI/Button';
import FORM_VALIDATION from '../../utils/validationSchema';
import INITIAL_FORM_STATE from '../../utils/initialValues';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const Checkout = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form role="form">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Información personal</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label="Nombre"
                      htmlFor="firstName"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Apellido" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="phone" label="Teléfono" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Dirección</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="Dirección 1" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine2" label="Dirección 2" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="city" label="Ciudad" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="state" label="Departamento" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Fecha del domicilio</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CheckoutForm onSubmit={() => {}} />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Instrucciones"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>Confirmar pedido</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Checkout;
