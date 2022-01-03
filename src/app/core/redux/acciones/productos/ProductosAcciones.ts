import {
  TiposAccionesProducto,
  LISTAR_PRODUCTOS,
  AGREGAR_PRODUCTO_AL_CARRO,
  AJUSTAR_CANTIDAD,
  CARGAR_PRODUCTO,
  BORRAR_PRODUCTO_DEL_CARRO,
} from './ProductosTiposAcciones';
import { Producto } from '../../../../feature/Producto/models/Producto';
import { ProductoRepositorio } from '../../../../core/api/productos.repositorio';

export function listarProductos(
  productos: Array<Producto>
): TiposAccionesProducto {
  return {
    type: LISTAR_PRODUCTOS,
    payload: productos,
  };
}

export function listarProductosAsync() {
  return function (dispacth: any) {
    ProductoRepositorio.getAllProducts().then((respuesta: any) =>
      dispacth(listarProductos(respuesta.data))
    );
  };
}

export const agregarProducto = (productoID: number) => {
  return {
    type: AGREGAR_PRODUCTO_AL_CARRO,
    payload: {
      id: productoID,
    },
  };
};

export const borrarProducto = (productoID: number) => {
  return {
    type: BORRAR_PRODUCTO_DEL_CARRO,
    payload: {
      id: productoID,
    },
  };
};

export const ajustarCantidad = (productoID: number, qty: number) => {
  return {
    type: AJUSTAR_CANTIDAD,
    payload: {
      id: productoID,
      qty,
    },
  };
};

export const cargarProducto = (producto: Producto) => {
  return {
    type: CARGAR_PRODUCTO,
    payload: producto,
  };
};
