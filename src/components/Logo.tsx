import { Link } from 'react-router-dom';
import logo from '../assets/img/pizza-logo.svg';
export default function Logo() {
  return (
    <Link to={'/'} className="header__logo">
      <img width="38" src={logo} alt="Pizza logo" />
      <div>
        <h1>Pizza Market</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </Link>
  );
}
