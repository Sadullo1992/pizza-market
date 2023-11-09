import { useReducer } from 'react';
import { ICartPizza } from '../types/types';
import { addPizza, clearCart, minusPizza, plusPizza, removePizza } from './actions';
import { CartContext } from './CartContext';
import { cartReducer } from './reducer';

type CartProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

const initialState = {
  cartItems: {},
  totalCount: 0,
  totalPrice: 0,
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addPizzaToCart = (obj: ICartPizza) => dispatch(addPizza(obj));

  const onPlusCartItem = (id: number) => dispatch(plusPizza(id));

  const onMinusCartItem = (id: number) => dispatch(minusPizza(id));

  const onRemoveCartItem = (id: number) => dispatch(removePizza(id));

  const onClearCart = () => dispatch(clearCart());

  return (
    <CartContext.Provider
      value={{
        ...state,
        addPizzaToCart,
        onPlusCartItem,
        onMinusCartItem,
        onRemoveCartItem,
        onClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
