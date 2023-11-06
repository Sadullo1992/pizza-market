import { useState } from 'react';
import { clsx } from 'clsx';

type CategoriesProps = {
  selectCategory: (name: string) => void;
  items: string[];
};

export default function Categories({ selectCategory, items }: CategoriesProps) {
  const [activeItem, setActiveItem] = useState('Все');
  const handleOnClick = (name: string) => {
    selectCategory(name);
    setActiveItem(name);
  };
  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
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
