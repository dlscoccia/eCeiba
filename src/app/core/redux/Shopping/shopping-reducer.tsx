import { ActionType, Action } from './shopping-types';
import productos from '../../api/productos.json';

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  qty: number;
};

interface State {
  products: ProductType[];
  cart: ProductType[];
  currentItem: ProductType | null;
}

const INITIAL_STATE = {
  products: productos,
  cart: [],
  currentItem: null,
};

const shopReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ActionType.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case ActionType.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
