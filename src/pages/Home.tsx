import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { BASE_URL, PIZZA_CATEGORIES } from '../constants/constants';

import { IPizza, TSortType } from '../types/types';

export default function Home() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [category, setCategory] = useState(0);
  const [sortBy, setSortBy] = useState<TSortType>('rating');

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/pizzas?_sort=${sortBy}${category !== 0 ? `&category=${category}` : ''}`
        );
        setPizzas(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPizzas();
  }, [category, sortBy]);

  const onSelectCategory = useCallback((name: string) => {
    const index = PIZZA_CATEGORIES.findIndex((item) => item === name);
    setCategory(index);
  }, []);

  const onSelectSort = useCallback((type: TSortType) => {
    setSortBy(type);
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories selectCategory={onSelectCategory} />
          <Sort selectSort={onSelectSort} />
        </div>
        <h2 className="content__title">{PIZZA_CATEGORIES[category]} пиццы</h2>
        <div className="content__items">
          {pizzas.map((item) => (
            <PizzaBlock key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
