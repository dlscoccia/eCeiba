import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Producto } from '../../models/Producto';
import { useEffect } from 'react';
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
