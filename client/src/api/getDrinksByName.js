import { client } from './apiConfig';

const getDrinksByName = (name) =>
  client({
    endpoint: 'search.php',
    query: `s=${name}`,
  }).then((res) => {
    const { drinks } = res;
    return drinks;
  });

export default getDrinksByName;
