import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmptyCart';
import { CartContext } from '../context/CartContext';
import { TCartContext } from '../types/types';
import { BackIcon, CartIcon, TrashIcon } from '../utils';

export default function Cart() {
  const { cartItems, totalCount, totalPrice, onClearCart } = useContext<TCartContext>(CartContext);

  const cartPizzas = Object.keys(cartItems).map((key) => cartItems[key].items[0]);

  return (
    <div className="content">
      <div className="container container--cart">
        {totalCount > 0 ? (
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <CartIcon />
                Корзина
              </h2>
              <div className="cart__clear" onClick={() => onClearCart()}>
                <TrashIcon />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              {cartPizzas.map((obj) => (
                <CartItem key={obj.id} item={obj} />
              ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Всего пицц: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} ₽</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link to={'/'}>
                  <Button className="button--outline button--add go-back-btn">
                    <BackIcon />
                    <span>Вернуться назад</span>
                  </Button>
                </Link>
                <Button className="pay-btn">
                  <span>Оплатить сейчас</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}
