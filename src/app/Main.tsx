import React from 'react';
import MainBanner from './feature/components/MainBanner';
import ProductoDestacado from './feature/componentes/ProductoDestacado';
import ListaProductos from './feature/componentes/ListaProductos';
import Suscribete from './feature/components/Suscribete';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const Main = () => {
  return (
    <div>
      <MainBanner />
      <ProductoDestacado />
      <ListaProductos />
      <Suscribete />
    </div>
  );
};

export default Main;
