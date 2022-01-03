import {
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LISTAR_PRODUCTOS,
  TiposAccionesProducto,
  ADD_TO_CART,
  ADJUST_ITEM_QTY,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
} from './ProductosTiposAcciones';
import { Producto } from '../../../../feature/Producto/models/Producto';
import { Product } from '../../../../feature/Producto/models/Product';
//

import { ProductoRepositorio } from '../../../../core/api/productos.repositorio';

export function listarProductos(
  productos: Array<Producto>
): TiposAccionesProducto {
  return {
    type: LISTAR_PRODUCTOS,
    payload: productos,
  };
}

export function agregarNuevoProducto(
  producto: Producto
): TiposAccionesProducto {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto,
  };
}

export function eliminarProducto(producto: Producto): TiposAccionesProducto {
  return {
    type: ELIMINAR_PRODUCTO,
    payload: producto,
  };
}

export function listarProductosAsync() {
  return function (dispacth: any) {
    ProductoRepositorio.getAllProducts().then((respuesta: any) =>
      dispacth(listarProductos(respuesta.data))
    );
  };
}

export const addToCart = (itemID: number) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID: number) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID: number, qty: number) => {
  return {
    type: ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item: Product) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
