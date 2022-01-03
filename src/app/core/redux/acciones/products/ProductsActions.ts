import {
  ADD_TO_CART,
  ADJUST_ITEM_QTY,
  LOAD_CURRENT_ITEM,
  REMOVE_FROM_CART,
} from './ProductsTypes';
import { Product } from '../../../../feature/Producto/models/Product';

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
