import { MinusIcon, PlusIcon } from '../utils';
import Button from './Button';

export default function CartItem() {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>Сырный цыпленок</h3>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className="cart__item-count">
        <Button className="button--outline button--circle cart__item-count-minus">
          <MinusIcon />
        </Button>
        <b>2</b>
        <Button className="button--outline button--circle cart__item-count-plus">
          <PlusIcon size={10} />
        </Button>
      </div>
      <div className="cart__item-price">
        <b>770 ₽</b>
      </div>
      <div className="cart__item-remove">
        <Button className="button--outline button--circle">
          <PlusIcon size={10} />
        </Button>
      </div>
    </div>
  );
}
