import React from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
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

  return <Grid container></Grid>;
};

export default Checkout;
