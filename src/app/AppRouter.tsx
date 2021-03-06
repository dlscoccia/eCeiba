import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeRouter } from './feature/Home/HomeRouter';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
import { CarritoRouter } from 'app/feature/CarritoCompra/CarritoRouter';
import Navbar from './shared/components/Navbar/Navbar';
import Footer from './shared/components/Footer/Footer';
import Checkout from './feature/CarritoCompra/components/Checkout/Checkout';
import DetalleProducto from './feature/Producto/components/DetalleProducto';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeRouter} />
        <Route path="/productos" component={ProductoRouter} />
        <Route path="/carrito" component={CarritoRouter} />
        <Route path="/producto/:id" component={DetalleProducto} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
