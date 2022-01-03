import {
  agregarNuevoProducto,
  eliminarProducto,
  listarProductosAsync,
  addToCart,
  removeFromCart,
  adjustItemQty,
  loadCurrentItem,
} from '../../../core/redux/acciones/productos/ProductosAcciones';
import { EstadoGeneral } from '../../../core/redux/modelo/EstadoGeneral';
import { GestionProductos } from '../containers/GestionProductos';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.productos;
};

export const ProveedorGestionProductos = connect(mapStateToProps, {
  listarProductos: listarProductosAsync,
  agregarNuevoProducto,
  eliminarProducto,
  addToCart,
  removeFromCart,
  adjustItemQty,
  loadCurrentItem,
})(GestionProductos);
