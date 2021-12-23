import { ActionType } from './shopping-types';
import ProductType from './shopping-reducer';

export const addToCart = (itemID: number) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID: number) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID: number, qty: number) => {
  return {
    type: ActionType.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item: typeof ProductType) => {
  return {
    type: ActionType.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
