import {
  AGREGAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  LISTAR_PRODUCTOS,
  ADD_TO_CART,
  ADJUST_ITEM_QTY,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
  TiposAccionesProducto,
} from '../../acciones/productos/ProductosTiposAcciones';
import { EstadoProducto } from '../../modelo/EstadoProducto';
import { Producto } from 'app/feature/Producto/models/Producto';

const initialState: EstadoProducto = {
  productos: Array<Producto>(),
  carrito: [],
  currentItem: {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: '',
    qty: 0,
    species: '',
  },
};

export default function (
  state = initialState,
  action: TiposAccionesProducto
): EstadoProducto {
  switch (action.type) {
    case LISTAR_PRODUCTOS: {
      const productos = action.payload;
      return {
        ...state,
        productos,
      };
    }
    case AGREGAR_PRODUCTO: {
      const producto = action.payload;
      return {
        ...state,
        productos: [...state.productos, producto],
      };
    }

    case ELIMINAR_PRODUCTO: {
      const producto = action.payload;
      return {
        ...state,
        productos: [
          ...state.productos.filter((p) => p.title !== producto.title),
        ],
      };
    }

    case ADD_TO_CART:
      // Great Item data from products array
      const item = state.productos.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.carrito.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        // @ts-ignore: any
        carrito: inCart
          ? state.carrito.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    qty: item.qty + 1,
                  }
                : item
            )
          : [...state.carrito, { ...item, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.id !== action.payload.id),
      };
    case ADJUST_ITEM_QTY:
      return {
        ...state,
        carrito: state.carrito.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
}
