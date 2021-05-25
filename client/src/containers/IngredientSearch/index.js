import "./styles.scss";
import { useCallback, useEffect, useState } from "react";
import IngredientRowItem from "../../components/IngredientSearch/IngredientRowItem";


export default function IngredientSearch() {
    const [isLoading, setIsLoading] = useState(true);
    const ingredientsSample = [{ id: "002", name: "Vodka", selected: false }, { id: "001", name: "Lemon", selected: false }, { id: "003", name: "Water", selected: false }]
    const [ingredients, setIngredients] = useState(ingredientsSample)

    const handleIngredientSelection = id => {
        console.log(id)
        setIngredients(ingredients.map(
            item => {
                if (item.id === id) {
                    return { ...item, selected: !item.selected };
                }
                else {
                    return item;
                }
            }
        ))
    }

    return (
        <div className="ingredients-search__container">
            <h1 className="ingredients-search__title">Search by ingredient</h1>
            <h2 className="ingredients-search__subtitle">
                Select ingredients
        </h2>

            <div className="ingredients-search__list_container">
                {ingredients.map(x => <IngredientRowItem ingredient={x} onSelect={handleIngredientSelection} />)}
            </div>


        </div>
    )
}