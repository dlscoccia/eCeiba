import ProductType from './shopping-reducer';

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  ADJUST_ITEM_QTY = 'ADJUST_ITEM_QTY',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM',
}

interface AddToCart {
  type: ActionType.ADD_TO_CART;
  payload: {
    id: number;
  };
}

interface RemoveFromCart {
  type: ActionType.REMOVE_FROM_CART;
  payload: {
    id: number;
  };
}

interface AdjustItemQty {
  type: ActionType.ADJUST_ITEM_QTY;
  payload: {
    id: number;
    qty: number;
  };
}

interface LoadCurrentItem {
  type: ActionType.LOAD_CURRENT_ITEM;
  payload: typeof ProductType;
}

export type Action =
  | AddToCart
  | RemoveFromCart
  | AdjustItemQty
  | LoadCurrentItem;
