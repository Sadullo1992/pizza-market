import HeaderCart from './HeaderCart';
import Logo from './Logo';

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <HeaderCart />
      </div>
    </div>
  );
}
