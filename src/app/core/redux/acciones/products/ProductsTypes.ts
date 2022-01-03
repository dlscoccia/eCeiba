import { Product } from '../../../../feature/Producto/models/Product';

export const ADD_TO_CART = 'ADD_PRODUCT_TO_CART';
export const ADJUST_ITEM_QTY = 'ADJUST_ITEM_QTY';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

interface AddToCart {
  type: typeof ADD_TO_CART;
  payload: {
    id: number;
  };
}

interface RemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: {
    id: number;
  };
}

interface AdjustItemQty {
  type: typeof ADJUST_ITEM_QTY;
  payload: {
    id: number;
    qty: number;
  };
}

interface LoadCurrentItem {
  type: typeof LOAD_CURRENT_ITEM;
  payload: Product;
}

export type Action =
  | AddToCart
  | RemoveFromCart
  | AdjustItemQty
  | LoadCurrentItem;
