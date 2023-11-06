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

export const SortTypes = ['rating', 'price', 'name'] as const;

export type TSortType = (typeof SortTypes)[number];
