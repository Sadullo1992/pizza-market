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
  onPlusCartItem: () => {},
  onMinusCartItem: () => {},
  onRemoveCartItem: () => {},
  onClearCart: () => {},
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

  const updateState = (newCartItems: TCartItems) => {
    const newCounts = getTotalCount(newCartItems);
    const newPrices = getTotalPrice(newCartItems);

    setCartItems(newCartItems);
    setTotalCount(newCounts);
    setTotalPrice(newPrices);
  };

  const addPizzaToCart = (obj: ICartPizza) => {
    const currentPizzaItems = !cartItems[obj.id] ? [obj] : [...cartItems[obj.id].items, obj];

    const newItems = {
      ...cartItems,
      [obj.id]: { items: currentPizzaItems },
    };

    updateState(newItems);
  };

  const onPlusCartItem = (id: number) => {
    const newItems = {
      ...cartItems,
      [id]: { items: [...cartItems[id].items, cartItems[id].items[0]] },
    };

    updateState(newItems);
  };

  const onMinusCartItem = (id: number) => {
    const oldPizzaItems = cartItems[id].items;

    const currentPizzaItems = oldPizzaItems.length > 1 ? oldPizzaItems.slice(1) : oldPizzaItems;

    const newItems = {
      ...cartItems,
      [id]: { items: currentPizzaItems },
    };

    updateState(newItems);
  };

  const onRemoveCartItem = (id: number) => {
    delete cartItems[id];
    updateState(cartItems);
  };

  const onClearCart = () => {
    setCartItems({});
    setTotalCount(0);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addPizzaToCart,
        totalCount,
        totalPrice,
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
