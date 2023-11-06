import { Link } from 'react-router-dom';
import CartIcon from '../utils/CartIcon';
import Button from './Button';

export default function HeaderCart() {
  return (
    <Link to={'/cart'} className="header__cart">
      <Button className="button--cart">
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        <CartIcon />
        <span>3</span>
      </Button>
    </Link>
  );
}
