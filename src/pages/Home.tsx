import { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { BASE_URL, PIZZA_CATEGORIES } from '../constants/constants';

import { IPizza, TSortType } from '../types/types';

export default function Home() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [sort, setSort] = useState<TSortType>('rating');

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/pizzas?_sort=${sort}${
            categoryIndex !== 0 ? `&category=${categoryIndex}` : ''
          }`
        );
        setPizzas(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPizzas();
  }, [categoryIndex, sort]);

  const onSelectCategory = (name: string) => {
    const index = PIZZA_CATEGORIES.findIndex((item) => item === name);
    setCategoryIndex(index);
  };

  const onSelectSort = (type: TSortType) => {
    setSort(type);
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories selectCategory={onSelectCategory} items={PIZZA_CATEGORIES} />
          <Sort selectSort={onSelectSort} />
        </div>
        <h2 className="content__title">{PIZZA_CATEGORIES[categoryIndex]} пиццы</h2>
        <div className="content__items">
          {pizzas.map((item) => (
            <PizzaBlock key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
