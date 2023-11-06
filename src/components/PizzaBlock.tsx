import PlusIcon from '../utils/PlusIcon';
import Button from './Button';

export default function PizzaBlock() {
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">Чизбургер-пицца</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от 395 ₽</div>
        <Button className="button--outline button--add">
          <PlusIcon />
          <span>Добавить</span>
          <i>2</i>
        </Button>
      </div>
    </div>
  );
}