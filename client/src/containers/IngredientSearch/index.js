import "./styles.scss";
import { useCallback, useEffect, useState } from "react";
import IngredientRowItem from "../../components/IngredientSearch/IngredientRowItem";


export default function IngredientSearch() {
    const [isLoading, setIsLoading] = useState(true);
    const ingredients = [{ name: "Vodka", selected: false }, { name: "Lemon", selected: false }, { name: "Water", selected: false }]
    return (
        <div className="ingredients-search__container">
            <h1 className="ingredients-search__title">Search by ingredient</h1>
            <h2 className="ingredients-search__subtitle">
                Select ingredients
        </h2>

            <div className="ingredients-search__cards-wrapper">
                {ingredients.map(x => <IngredientRowItem ingredient={x} />)}

            </div>


        </div>
    )
}