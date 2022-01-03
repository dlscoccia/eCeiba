import { Producto } from '../../../../feature/Producto/models/Producto';

export const LISTAR_PRODUCTOS = 'LISTAR_PRODUCTOS';
export const AGREGAR_PRODUCTO_AL_CARRO = 'AGREGAR_PRODUCTO_AL_CARRO';
export const AJUSTAR_CANTIDAD = 'AJUSTAR_CANTIDAD';
export const CARGAR_PRODUCTO = 'CARGAR_PRODUCTO';
export const BORRAR_PRODUCTO_DEL_CARRO = 'BORRAR_PRODUCTO_DEL_CARRO';

interface AccionListarProductos {
  type: typeof LISTAR_PRODUCTOS;
  payload: Producto[];
}

interface AgregarProducto {
  type: typeof AGREGAR_PRODUCTO_AL_CARRO;
  payload: {
    id: number;
  };
}

interface BorrarProducto {
  type: typeof BORRAR_PRODUCTO_DEL_CARRO;
  payload: {
    id: number;
  };
}

interface AjustarCantidad {
  type: typeof AJUSTAR_CANTIDAD;
  payload: {
    id: number;
    qty: number;
  };
}

interface CargarProductoActual {
  type: typeof CARGAR_PRODUCTO;
  payload: Producto;
}

export type TiposAccionesProducto =
  | AccionListarProductos
  | AgregarProducto
  | BorrarProducto
  | AjustarCantidad
  | CargarProductoActual;
