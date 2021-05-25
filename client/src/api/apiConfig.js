const url = 'https://www.thecocktaildb.com/api/json/v2/9973533';

export const client = ({ endpoint, query = '', options = {} }) => {
  return fetch(`${url}/${endpoint}?${query}`, options)
    .then((res) => {
      if (res.ok) return res.json();
      if (!res.ok) return Promise.reject(`Http error: ${res.status}`);
    })
    .catch((error) => {
      return Promise.reject(`Network error: ${error}`);
    });
};
