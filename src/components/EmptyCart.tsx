import { Link } from 'react-router-dom';
import epmtyCart from '../assets/img/empty-cart.png';
import Button from './Button';
export default function EmptyCart() {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={epmtyCart} alt="Empty cart" />
      <Link to={'/'}>
        <Button className="button button--black">
          <span>Вернуться назад</span>
        </Button>
      </Link>
    </div>
  );
}
