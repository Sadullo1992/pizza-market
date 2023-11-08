import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ICartPizza, TCartContext } from '../types/types';
import { MinusIcon, PlusIcon } from '../utils';
import Button from './Button';

type CartItemProps = {
  item: ICartPizza;
};

export default function CartItem({ item }: CartItemProps) {
  const { id, name, imageUrl, size, type } = item;

  const { cartItems, onPlusCartItem, onMinusCartItem, onRemoveCartItem } =
    useContext<TCartContext>(CartContext);

  const cartItemCount = cartItems[id].items.length;
  const cartItemPrice = cartItems[id].items.reduce((sum, obj) => sum + obj.price, 0);
  id;

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <Button
          className="button--outline button--circle cart__item-count-minus"
          onClick={() => onMinusCartItem(id)}
        >
          <MinusIcon />
        </Button>
        <b>{cartItemCount}</b>
        <Button
          className="button--outline button--circle cart__item-count-plus"
          onClick={() => onPlusCartItem(id)}
        >
          <PlusIcon size={10} />
        </Button>
      </div>
      <div className="cart__item-price">
        <b>{cartItemPrice} ₽</b>
      </div>
      <div className="cart__item-remove">
        <Button className="button--outline button--circle" onClick={() => onRemoveCartItem(id)}>
          <PlusIcon size={10} />
        </Button>
      </div>
    </div>
  );
}
