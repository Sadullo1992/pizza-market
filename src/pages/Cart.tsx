import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import { CartIcon, TrashIcon } from '../utils';

export default function Cart() {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <CartIcon />
              Корзина
            </h2>
            <div className="cart__clear">
              <TrashIcon />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="content__items">
            <CartItem />
            <CartItem />
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>3 шт.</b>
              </span>
              <span>
                Сумма заказа: <b>900 ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to={'/'}>
                <Button className="button--outline button--add go-back-btn">
                  {backIcon()}
                  <span>Вернуться назад</span>
                </Button>
              </Link>
              <Button className="pay-btn">
                <span>Оплатить сейчас</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function backIcon() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 13L1 6.93015L6.86175 1"
        stroke="#D3D3D3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
