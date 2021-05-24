import "./styles.scss";
import {useCallback, useEffect, useState} from "react";
import IngredientRowItem from "../../components/IngredientSearch/IngredientRowItem";
import {readDrinksListByIngredients} from "../../api/ingredientsRepository";


export default function IngredientSearch() {
    const [isLoading, setIsLoading] = useState(true);
    const [drinks, setDrinks] = useState([]);

    const loadDrinks = useCallback(() => {
        if (drinks.length === 0) {
            let drinksList = 'Dry_Vermouth,Gin,Anis'
            readDrinksListByIngredients(drinksList).then((data) => {
                console.log(data);
                setIsLoading(false);
            });
        }
    }, [drinks]);

    useEffect(() => {
        loadDrinks();
    }, [loadDrinks]);

    const ingredients = [
        {
            name: "Vodka",
            selected: false
        },
        {
            name: "Lemon",
            selected: false
        },
        {
            name: "Water",
            selected: false
        }
    ]


    return (
        <div className="ingredients-search__container">
            <h1 className="ingredients-search__title">Search by ingredient</h1>
            <h2 className="ingredients-search__subtitle">
                Select ingredients
            </h2>

            <div className="ingredients-search__cards-wrapper">
                {ingredients.map(x => <IngredientRowItem ingredient={x}/>)}
            </div>

            <button onClick={() => setDrinks([])}>
                Find!
            </button>
        </div>
    )
}