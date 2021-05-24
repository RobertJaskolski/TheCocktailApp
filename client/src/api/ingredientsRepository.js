import {client} from "./apiClient";

const readDrinksListByIngredients = async (drinksList) => {
    return client(`filter.php?i=${drinksList}`);
};

export {readDrinksListByIngredients};