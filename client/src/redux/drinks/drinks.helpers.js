import getDrinksByName from '../../api/getDrinksByName';
export const handleFetchDrinks = (name) => {
  return new Promise((resolve, reject) => {
    getDrinksByName(name)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
