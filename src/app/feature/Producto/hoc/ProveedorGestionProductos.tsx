import {
  listarProductosAsync,
  agregarProducto,
  borrarProducto,
  ajustarCantidad,
  cargarProducto,
} from 'app/core/redux/acciones/productos/ProductosAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionProductos } from '../containers/GestionProductos';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.productos;
};

export const ProveedorGestionProductos = connect(mapStateToProps, {
  listarProductos: listarProductosAsync,
  agregarProducto,
  borrarProducto,
  ajustarCantidad,
  cargarProducto,
})(GestionProductos);
