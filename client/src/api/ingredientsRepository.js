import { client } from './apiConfig';

const readDrinksListByIngredients = async (drinksList) => {
    return client({ endpoint: `filter.php`, query: `i=${drinksList}` });
};

export { readDrinksListByIngredients };