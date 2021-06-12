import getDrinksByName from '../../api/getDrinksByName';
import { INGREDIENTS_STR } from '../../consts';

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

export const handleFilterByIngredients = (list, ingredients) => {
  const newList = [];
  list.map((item) => {
    const itemIngredients = [];
    INGREDIENTS_STR.map((str) => {
      if (item[str]) itemIngredients.push(item[str].toLowerCase());
      return str;
    });
    if (ingredients.every((x) => itemIngredients.includes(x.toLowerCase())))
      newList.push(item);
    return item;
  });
  return newList;
};
