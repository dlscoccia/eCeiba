import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Producto } from '../../models/Producto';
import ListarProductos from '../../components/ListarProductos';

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
  return <ListarProductos />;
};

GestionProductos.propTypes = {
  productos: PropTypes.array.isRequired,
  listarProductos: PropTypes.func.isRequired,
};
