import { client } from './apiConfig';

const getAlcoholicFilter = () =>
  client({
    endpoint: 'list.php',
    query: 'a=list',
  }).then((res) => {
    const { drinks } = res;
    return drinks;
  });

export default getAlcoholicFilter;
