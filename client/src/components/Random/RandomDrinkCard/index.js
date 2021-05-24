import "./styles.scss";
const RandomDrinkCard = (props) => {
  return (
    <div className="random-drink-card__container">
      <img src={props.drink.strDrinkThumb} alt={props.drink.strDrink} />
      <h1 className="random-drink-card__title">{props.drink.strDrink}</h1>
    </div>
  );
};

export default RandomDrinkCard;
