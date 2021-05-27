import getIngredients from '../../api/getIngredients';

export const handleGetIngraedients = () => {
  return new Promise((resolve, reject) => {
    getIngredients()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
