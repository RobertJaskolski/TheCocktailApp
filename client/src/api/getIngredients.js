import { client } from './apiConfig';

const getIngredients = () =>
  client({
    endpoint: 'list.php',
    query: 'i=list',
  }).then((res) => {
    const { drinks } = res;
    return drinks;
  });

export default getIngredients;
