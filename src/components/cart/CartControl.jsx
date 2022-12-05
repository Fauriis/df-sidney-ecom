import Link from 'next/link';
import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AppContext } from '../../pages/_app';

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cartQty += quantity;

    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center hover:text-pink-500"
            title="Cart"
          >
            <AiOutlineShoppingCart
              size={32}
              className=""
            ></AiOutlineShoppingCart>
            {cartQty}
          </a>
        </Link>
      </li>
    </ul>
  );
};
