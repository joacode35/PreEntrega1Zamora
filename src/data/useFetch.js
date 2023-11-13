import products from "./asyncmock";

export const useFetch = () => {
  return new Promise((resolve) => {
    resolve(products);
  });
};

export const getData = (id) => {
  return new Promise((resolve) => {
    resolve(products.find((sound) => sound.id === id));
  });
};

export const getCategories = (category) => {
  return new Promise((resolve) => {
    resolve(category.filter((sounds) => sounds.category === category));
  });
};
