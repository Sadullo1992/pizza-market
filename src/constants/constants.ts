import { TSortType } from '../types/types';

export const PIZZA_CATEGORIES = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const BASE_URL = 'http://localhost:3000';

export const SORT_TYPES: { [key in TSortType]: string } = {
  rating: 'популярности',
  price: 'цене',
  name: 'алфавиту',
};
