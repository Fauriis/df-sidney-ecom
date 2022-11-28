import { useContext, useEffect, useReducer, useState } from 'react';
import { AppContext } from '../../pages/_app';
import { CartLineItem } from './CartLineItem';
import { ProductReviwes } from './../catalog/ProductReviews';

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <>no products here</>;
  }

  const { products } = cart;

  if (products.length <= 0) {
    return <></>;
  }

  return (
    <table>
      <thead className=" border-b-2 border-zinc-200 ">
        <tr className="uppercase text-zinc-400 lg:text-xl">
          <th className="py-3 font-normal"></th>
          <th className="py-3 font-normal">Product</th>
          <th className="font-normal">Price</th>
          <th className="font-normal">Quantity</th>
          <th className="font-normal">Total</th>
        </tr>
      </thead>

      <div className="mt-5"></div>

      <tbody className="">
        {products.map((product) => {
          return (
            <CartLineItem
              product={product}
              key={product.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
