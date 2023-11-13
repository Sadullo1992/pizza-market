import { useCallback, useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { PIZZA_CATEGORIES } from '../constants/constants';

import { db } from '../db/firebaseDB';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import { IPizza, TSortType } from '../types/types';

export default function Home() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [category, setCategory] = useState(0);
  const [sortBy, setSortBy] = useState<TSortType>('rating');

  const pizzasCollectionRef = collection(db, 'pizzas');

  useEffect(() => {
    const getPizzaList = async () => {
      const q = !category
        ? query(pizzasCollectionRef, orderBy(sortBy))
        : query(pizzasCollectionRef, where('category', '==', category), orderBy(sortBy));
      try {
        const data = await getDocs(q);

        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }) as IPizza);
        setPizzas(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    getPizzaList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
