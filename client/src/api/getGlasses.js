import { client } from './apiConfig';

const getGlasses = () =>
  client({
    endpoint: 'list.php',
    query: 'g=list',
  }).then((res) => {
    const { drinks } = res;
    return drinks;
  });

export default getGlasses;
