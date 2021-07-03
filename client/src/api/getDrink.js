import { client } from './apiConfig';

const getDrink = ({ id }) =>
  client({
    endpoint: 'lookup.php',
    query: `i=${id}`,
  }).then((res) => {
    const { drinks } = res;
    return drinks[0];
  });

export default getDrink;
