import logo from '../assets/img/pizza-logo.svg';
export default function Logo() {
  return (
    <div className="header__logo">
      <img width="38" src={logo} alt="Pizza logo" />
      <div>
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </div>
  );
}
