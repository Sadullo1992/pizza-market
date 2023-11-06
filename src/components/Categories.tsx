import { useState } from 'react';
import { clsx } from 'clsx';
import { PIZZA_CATEGORIES } from '../constants/constants';

type CategoriesProps = {
  getCategoryName: (name: string) => void;
};

export default function Categories({ getCategoryName }: CategoriesProps) {
  const [activeItem, setActiveItem] = useState('Все');
  const handleOnClick = (name: string) => {
    getCategoryName(name);
    setActiveItem(name);
  };
  return (
    <div className="categories">
      <ul>
        {PIZZA_CATEGORIES.map((name, index) => (
          <li
            className={clsx(activeItem === name && 'active')}
            key={`${name}__${index}`}
            onClick={() => handleOnClick(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
