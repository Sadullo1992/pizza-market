import { useCallback, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { PIZZA_CATEGORIES } from '../constants/constants';

import { IPizza, TSortType } from '../types/types';
import { useQuery } from '@tanstack/react-query';
import { fetchPizzas } from '../db/fetchPizzas';
import PizzaLoading from '../components/PizzaLoading';

export default function Home() {
  const [category, setCategory] = useState(0);
  const [sortBy, setSortBy] = useState<TSortType>('rating');

  const { data, isLoading, isError, error } = useQuery<IPizza[], string>({
    queryKey: ['pizzas', category, sortBy],
    queryFn: () => fetchPizzas(category, sortBy),
  });

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
          {data && data?.map((item) => <PizzaBlock key={item.id} item={item} />)}
          {isLoading &&
            Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoading key={index} />)}
          {isError && <h3 style={{ color: 'red' }}>Something went worong((: Error: {error}</h3>}
        </div>
      </div>
    </div>
  );
}
