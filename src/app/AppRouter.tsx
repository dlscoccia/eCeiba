import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Cart from './feature/components/Cart/Cart';
import SingleItem from './feature/components/SingleItem/SingleItem';
import Checkout from './feature/components/Checkout/Checkout';

export const AppRouter = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/product/:id" component={SingleItem} />
      <Route exact path="/checkout" component={Checkout} />
    </>
  );
};
