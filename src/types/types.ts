export interface IPizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface ICartPizza {
  id: number;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  price: number;
}

export type TCartItems = { [key in string]: { items: ICartPizza[] } };

export type TCartContext = {
  cartItems: TCartItems;
  totalCount: number;
  totalPrice: number;
  addPizzaToCart: (obj: ICartPizza) => void;
  onPlusCartItem: (id: number) => void;
  onMinusCartItem: (id: number) => void;
  onRemoveCartItem: (id: number) => void;
  onClearCart: () => void;
};

export const SortTypes = ['rating', 'price', 'name'] as const;

export type TSortType = (typeof SortTypes)[number];
