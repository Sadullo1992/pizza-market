import { ICartPizza, ICartState, TCartItems } from '../types/types';
import { ActionTypes, IAction, IPayloadAction } from './actions';

const getTotalSum = (arr: ICartPizza[]) => {
  return arr.reduce((sum, obj) => obj.price + sum, 0);
};

const getTotalCount = (obj: TCartItems) => {
  return Object.values(obj).reduce((sum, obj) => obj.items.length + sum, 0);
};

const getTotalPrice = (obj: TCartItems) => {
  return Object.values(obj).reduce((sum, obj) => getTotalSum(obj.items) + sum, 0);
};

export const cartReducer = (state: ICartState, actions: IAction): ICartState => {
  switch (actions.type) {
    case ActionTypes.ADD_PIZZA: {
      const action = actions as IPayloadAction<ICartPizza>;
      const currentPizzaItems = !state.cartItems[action.payload.id]
        ? [action.payload]
        : [...state.cartItems[action.payload.id].items, action.payload];

      const newItems = {
        ...state.cartItems,
        [action.payload.id]: { items: currentPizzaItems },
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }

    case ActionTypes.PLUS_PIZZA: {
      const action = actions as IPayloadAction<string>;
      const newItems = {
        ...state.cartItems,
        [action.payload]: {
          items: [
            ...state.cartItems[action.payload].items,
            state.cartItems[action.payload].items[0],
          ],
        },
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }

    case ActionTypes.MINUS_PIZZA: {
      const action = actions as IPayloadAction<string>;
      const oldPizzaItems = state.cartItems[action.payload].items;

      const currentPizzaItems = oldPizzaItems.length > 1 ? oldPizzaItems.slice(1) : oldPizzaItems;

      const newItems = {
        ...state.cartItems,
        [action.payload]: { items: currentPizzaItems },
      };

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }

    case ActionTypes.REMOVE_PIZZA: {
      const action = actions as IPayloadAction<string>;
      const newItems = {
        ...state.cartItems,
      };

      delete newItems[action.payload];

      const totalCount = getTotalCount(newItems);
      const totalPrice = getTotalPrice(newItems);

      return {
        ...state,
        cartItems: newItems,
        totalCount,
        totalPrice,
      };
    }

    case ActionTypes.CLEAR_CART: {
      return {
        cartItems: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }

    default:
      return state;
  }
};
