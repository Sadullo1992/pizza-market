import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartIcon from '../utils/CartIcon';
import Button from './Button';

export default function HeaderCart() {
  const { totalCount, totalPrice } = useContext(CartContext);

  return (
    <Link to={'/cart'} className="header__cart">
      <Button className="button--cart">
        <span>{totalPrice} ₽</span>
        <div className="button__delimiter"></div>
        <CartIcon />
        <span>{totalCount}</span>
      </Button>
    </Link>
  );
}
