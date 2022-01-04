import {
  listarProductosAsync,
  agregarProducto,
  borrarProducto,
  ajustarCantidad,
  cargarProducto,
} from '../../../core/redux/acciones/productos/ProductosAcciones';
import { EstadoGeneral } from '../../../core/redux/modelo/EstadoGeneral';
import { GestionCarritoCompras } from '../containers/GestionCarritoCompras';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.productos;
};

export const ProveedorGestionCarritoCompras = connect(mapStateToProps, {
  listarProductos: listarProductosAsync,
  agregarProducto,
  borrarProducto,
  ajustarCantidad,
  cargarProducto,
})(GestionCarritoCompras);
