import { memo, useState } from 'react';
import { clsx } from 'clsx';

import { PIZZA_CATEGORIES } from '../constants/constants';

type CategoriesProps = {
  selectCategory: (name: string) => void;
};

const Categories = memo(function ({ selectCategory }: CategoriesProps) {
  const [activeItem, setActiveItem] = useState('Все');
  const handleOnClick = (name: string) => {
    selectCategory(name);
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
});

export default Categories;
