import { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { BASE_URL } from '../constants/constants';
import { IPizza } from '../types/types';

export default function Home() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/pizzas`);
        setPizzas(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPizzas();
  }, []);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories getCategoryName={(name) => console.log(name)} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((item) => (
            <PizzaBlock key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
