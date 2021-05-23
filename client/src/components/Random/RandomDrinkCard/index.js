import "./styles.scss";
const RandomDrinkCard = (props) => {
  return (
    <div className="random-drink-card__container">
      <h1>{props.drink.strDrink}</h1>
    </div>
  );
};

export default RandomDrinkCard;
