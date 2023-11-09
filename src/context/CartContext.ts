import { createContext } from 'react';
import { TCartContext } from '../types/types';

export const CartContext = createContext<TCartContext>({
  cartItems: {},
  totalCount: 0,
  totalPrice: 0,
  addPizzaToCart: () => {},
  onPlusCartItem: () => {},
  onMinusCartItem: () => {},
  onRemoveCartItem: () => {},
  onClearCart: () => {},
});
