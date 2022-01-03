import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from 'app/Main';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
import { CarritoRouter } from 'app/feature/CarritoCompra/CarritoRouter';
import Navbar from './shared/components/Navbar/Navbar';
import Footer from './shared/components/Footer/Footer';
import Checkout from './feature/CarritoCompra/components/Checkout/Checkout';
import SingleProduct from './feature/Producto/components/SingleItem/SingleItem';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/productos" component={ProductoRouter} />
        <Route path="/carrito" component={CarritoRouter} />
        <Route path="/producto/:id" component={SingleProduct} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
