import { client } from './apiConfig';

const randomDrinks = () =>
  client({
    endpoint: 'randomselection.php',
  }).then((res) => {
    const { drinks } = res;
    return [drinks[0], drinks[1], drinks[2]];
  });

export default randomDrinks;
