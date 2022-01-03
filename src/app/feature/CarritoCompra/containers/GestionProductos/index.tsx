import React from 'react';
import { Producto } from '../../../Producto/models/Producto';
import { useEffect } from 'react';
import Cart from '../../components/Cart/Cart';

interface GestionProductosProps {
  productos: Array<Producto>;
  carrito: Array<Producto>;
  listarProductos: () => void;
}

export const GestionProductos: React.FC<GestionProductosProps> = ({
  productos,
  carrito,
  listarProductos,
}) => {
  useEffect(() => {
    listarProductos();
  }, [listarProductos]);
  return <Cart />;
};
