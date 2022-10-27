import { useEffect, useState } from 'react';
import { baseUrlProducts } from '..';

export const useRelatedProducts = (limit = 4) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrlProducts}/products?limit=${limit}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  }, [setProducts]);

  return [products];
};
