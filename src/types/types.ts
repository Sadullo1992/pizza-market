export interface IPizza {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface ICartPizza {
  id: string;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  price: number;
}

export type TCartItems = { [key in string]: { items: ICartPizza[] } };

export interface ICartState {
  cartItems: TCartItems;
  totalCount: number;
  totalPrice: number;
}

export interface TCartContext extends ICartState {
  addPizzaToCart: (obj: ICartPizza) => void;
  onPlusCartItem: (id: string) => void;
  onMinusCartItem: (id: string) => void;
  onRemoveCartItem: (id: string) => void;
  onClearCart: () => void;
}

export const SortTypes = ['rating', 'price', 'name'] as const;

export type TSortType = (typeof SortTypes)[number];
