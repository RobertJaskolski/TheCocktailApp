import getDrinksByName from '../../api/getDrinksByName';
const INGREDIENTS_STR = [
  'strIngredient1',
  'strIngredient2',
  'strIngredient3',
  'strIngredient4',
  'strIngredient5',
  'strIngredient6',
  'strIngredient7',
  'strIngredient8',
  'strIngredient9',
  'strIngredient10',
  'strIngredient11',
  'strIngredient12',
  'strIngredient13',
  'strIngredient14',
  'strIngredient15',
];

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
