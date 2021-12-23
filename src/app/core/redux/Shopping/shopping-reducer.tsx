import { ActionType, Action } from './shopping-types';

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
  products: [
    {
      id: 1,
      title: 'PREMNA 6 AÑOS',
      description:
        'Esta especie es muy apetecida en el bonsai, usada en muchas partes del mundo es un árbol de mediana altura, de madera muy densa y de gran manipulación de sus ramas. Es un árbol de exterior, requiriendo grandes cantidades de radiación solar. Igualmente el agua es muy importante en esta especie. En el vivero Casa del Bonsai podrá encontrar una exposición itinerante, a la venta, de arboles bonsai de diferentes gamas, edades, estilos, especies y tamaños.',
      price: 140000,
      image:
        'https://casadelbonsai.com/wp-content/uploads/2021/05/casadelbonsai_PRENMA_-250x250.jpg',
      qty: 0,
    },
    {
      id: 2,
      title: 'FUKIANTE 3 AÑOS',
      description:
        'Esta especie es muy apetecida en el bonsai, usada en muchas partes del mundo es un árbol de mediana altura, de madera muy densa y de gran manipulación de sus ramas. Es un árbol de exterior, requiriendo grandes cantidades de radiación solar. Igualmente el agua es muy importante en esta especie. En el vivero Casa del Bonsai podrá encontrar una exposición itinerante, a la venta, de arboles bonsai de diferentes gamas, edades, estilos, especies y tamaños.',
      price: 85000,
      image:
        'https://casadelbonsai.com/wp-content/uploads/2021/05/casadelbonsai_FUKIANTE-250x250.jpg',
      qty: 0,
    },
    {
      id: 3,
      title: 'OLMO CHINO 6 AÑOS',
      description:
        'Esta especie es muy apetecida en el bonsai, usada en muchas partes del mundo es un árbol de mediana altura, de madera muy densa y de gran manipulación de sus ramas. Es un árbol de exterior, requiriendo grandes cantidades de radiación solar. Igualmente el agua es muy importante en esta especie. En el vivero Casa del Bonsai podrá encontrar una exposición itinerante, a la venta, de arboles bonsai de diferentes gamas, edades, estilos, especies y tamaños.',
      price: 230000,
      image:
        'https://casadelbonsai.com/wp-content/uploads/2021/05/casadelbonsai_OLMO-250x250.jpg',
      qty: 0,
    },
    {
      id: 4,
      title: 'AZALEA 8 AÑOS',
      description:
        'Esta especie es muy apetecida en el bonsai, usada en muchas partes del mundo es un árbol de mediana altura, de madera muy densa y de gran manipulación de sus ramas. Es un árbol de exterior, requiriendo grandes cantidades de radiación solar. Igualmente el agua es muy importante en esta especie. En el vivero Casa del Bonsai podrá encontrar una exposición itinerante, a la venta, de arboles bonsai de diferentes gamas, edades, estilos, especies y tamaños.',
      price: 195000,
      image:
        'https://casadelbonsai.com/wp-content/uploads/2021/05/casadelbonsai_AZALEA-1-250x250.jpg',
      qty: 0,
    },
  ],
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
