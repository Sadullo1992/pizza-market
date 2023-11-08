import { clsx } from 'clsx';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { IPizza, TCartContext } from '../types/types';
import PlusIcon from '../utils/PlusIcon';
import Button from './Button';

type PizzaBlockProps = {
  item: IPizza;
};

export default function PizzaBlock({ item }: PizzaBlockProps) {
  const { id, imageUrl, name, price, sizes, types } = item;
  const pizzaSizes = [26, 30, 40];
  const typeNames = ['тонкое', 'традиционное'];
  const initialActiveType = typeNames[types[0]];

  const [activeType, setActiveType] = useState(initialActiveType);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const { cartItems, addPizzaToCart } = useContext<TCartContext>(CartContext);

  const addedCount = cartItems[item.id] && cartItems[item.id].items.length;

  const onAddClickPizza = () => {
    const obj = {
      id,
      imageUrl,
      name,
      type: activeType,
      size: activeSize,
      price,
    };
    addPizzaToCart(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={name} />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeNames.map((type, index) => (
            <li
              className={clsx(
                !types.includes(index) && 'disabled',
                activeType === type && 'active'
              )}
              key={type}
              onClick={() => setActiveType(type)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {pizzaSizes.map((size) => (
            <li
              className={clsx(!sizes.includes(size) && 'disabled', activeSize === size && 'active')}
              key={size}
              onClick={() => setActiveSize(size)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className="button--outline button--add" onClick={() => onAddClickPizza()}>
          <PlusIcon size={12} />
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}
