import { createContext, useState } from 'react';
import { ICartPizza, TCartContext, TCartItems } from '../types/types';

type CartProviderProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const CartContext = createContext<TCartContext>({
  cartItems: {},
  totalCount: 0,
  totalPrice: 0,
  addPizzaToCart: () => {},
});

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<TCartItems>({});
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalSum = (arr: ICartPizza[]) => {
    return arr.reduce((sum, obj) => obj.price + sum, 0);
  };

  const getTotalCount = (obj: TCartItems) => {
    return Object.values(obj).reduce((sum, obj) => obj.items.length + sum, 0);
  };

  const getTotalPrice = (obj: TCartItems) => {
    return Object.values(obj).reduce((sum, obj) => getTotalSum(obj.items) + sum, 0);
  };

  const addPizzaToCart = (obj: ICartPizza) => {
    const currentPizzaItems = !cartItems[obj.id] ? [obj] : [...cartItems[obj.id].items, obj];

    const newItems = {
      ...cartItems,
      [obj.id]: { items: currentPizzaItems },
    };

    const newCounts = getTotalCount(newItems);
    const newPrices = getTotalPrice(newItems);

    setCartItems(newItems);
    setTotalCount(newCounts);
    setTotalPrice(newPrices);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addPizzaToCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
