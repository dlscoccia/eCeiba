// PLUGINS IMPORTS //
import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';

// COMPONENTS IMPORTS //
import ProductDetails from './Product';
import ShippingDetails from './Shipping';
import PaymentDetails from './Payment';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const ReviewOrder = () => {
  const { values } = useFormikContext();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ProductDetails />
      <Grid container spacing={2}>
        <ShippingDetails formValues={values} />
        {/* <PaymentDetails formValues={values} /> */}
      </Grid>
    </>
  );
};

export default ReviewOrder;
