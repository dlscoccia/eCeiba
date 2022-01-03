import {
  ADD_TO_CART,
  ADJUST_ITEM_QTY,
  GET_ALL_PRODUCTS,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
  Action,
} from '../../acciones/products/ProductsTypes';

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
  products: [],
  cart: [],
  currentItem: null,
};

const shopReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART:
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
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
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
};

export default shopReducer;
