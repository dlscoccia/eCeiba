import {
  LISTAR_PRODUCTOS,
  AGREGAR_PRODUCTO_AL_CARRO,
  AJUSTAR_CANTIDAD,
  CARGAR_PRODUCTO,
  BORRAR_PRODUCTO_DEL_CARRO,
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
    age: 0,
  },
};
const productosReductor = (
  state = initialState,
  action: TiposAccionesProducto
): EstadoProducto => {
  switch (action.type) {
    case LISTAR_PRODUCTOS: {
      const productos = action.payload;
      return {
        ...state,
        productos,
      };
    }
    case AGREGAR_PRODUCTO_AL_CARRO:
      const item = state.productos.find(
        (product) => product.id === action.payload.id
      );
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
    case BORRAR_PRODUCTO_DEL_CARRO:
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.id !== action.payload.id),
      };
    case AJUSTAR_CANTIDAD:
      return {
        ...state,
        carrito: state.carrito.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case CARGAR_PRODUCTO:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default productosReductor;
