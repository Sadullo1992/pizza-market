import CartIcon from '../utils/CartIcon';
import Button from './Button';

export default function HeaderCart() {
  return (
    <div className="header__cart">
      <Button href="/cart" className="button--cart">
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        <CartIcon />
        <span>3</span>
      </Button>
    </div>
  );
}
