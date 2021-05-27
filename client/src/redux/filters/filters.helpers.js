import getIngredients from '../../api/getIngredients';
import getCategories from '../../api/getCategories';
import getGlasses from '../../api/getGlasses';
import getAlcoholicFilters from '../../api/getAlcoholicFilter';

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

export const handleGetCategories = () => {
  return new Promise((resolve, reject) => {
    getCategories()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleGetGlasses = () => {
  return new Promise((resolve, reject) => {
    getGlasses()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleGetAlcoholicFilters = () => {
  return new Promise((resolve, reject) => {
    getAlcoholicFilters()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
