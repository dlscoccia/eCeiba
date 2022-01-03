import React, { useEffect } from 'react';
import { Producto } from '../../../Producto/models/Producto';
import Cart from '../../components/Carrito';

interface GestionCarritoProps {
  productos: Array<Producto>;
  carrito: Array<Producto>;
  listarProductos: () => void;
}

export const GestionProductos: React.FC<GestionCarritoProps> = ({
  productos,
  carrito,
  listarProductos,
}) => {
  useEffect(() => {
    listarProductos();
  }, [listarProductos]);
  return <Cart />;
};
