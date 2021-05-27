import { client } from './apiConfig';

const getCategories = () =>
  client({
    endpoint: 'list.php',
    query: 'c=list',
  }).then((res) => {
    const { drinks } = res;
    return drinks;
  });

export default getCategories;
