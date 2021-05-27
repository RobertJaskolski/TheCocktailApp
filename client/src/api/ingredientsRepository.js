import {client} from "./apiConfig";

const fetchDrinksListByIngredients = (drinksList) =>
    client({
        endpoint: 'filter.php',
        query: `i=${drinksList}`
    }).then((res) => {
        const {drinks} = res;
        return drinks
    });

export default fetchDrinksListByIngredients;
