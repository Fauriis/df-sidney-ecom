import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { baseUrl } from '../..';
import { useProduct } from '../../hooks';
import { AppContext } from '../../pages/_app';
import { AiOutlineClose } from 'react-icons/ai';
import ProductReviews from '../catalog/ProductReviews';
import { GiTrashCan } from 'react-icons/gi';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;

  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { cart, alterProduct } = useContext(AppContext);

  const { id: cartId } = cart;

  if (!isLoaded) {
    return <>Please wait!</>;
  }

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'DELETE',
    }).then((_) => {
      alterProduct(productId, -quantity);
    });
  };

  const { image, price, id, title, rating } = cartItem;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(price * quantity);

  const { rate, count } = rating;

  return (
    <tr className="border-b">
      <td>
        <button type="button" title={`Remove ${title}`} onClick={onClick}>
          <AiOutlineClose
            className="border rounded hover:bg-pink-500"
            size="20"
          ></AiOutlineClose>
        </button>
      </td>

      <td className="lg:py-2 lg:px-2 lg:flex ">
        <Link href={`/products/${id}`}>
          <a title={title}>
            <Image
              alt={title}
              src={image}
              width="100"
              height="100"
              objectFit="contain"
              className="-z-10"
            ></Image>
          </a>
        </Link>

        <div className="lg:block hidden">
          <Link href={`/products/${id}`}>
            <a title={title} className="font-bold my-4 justify-end">
              {title}
            </a>
          </Link>

          <ProductReviews rate={rate} count={count}></ProductReviews>
        </div>
      </td>

      <td className="pb-10 px-2 font-medium text-center">{formattedPrice}</td>

      <td className="text-center px-2">
        <div className="border flex items-center justify-center gap-1 lg:mb-8 mb-4 ">
          {quantity === 1 ? (
            <span className="cursor-pointer">
              <GiTrashCan
                size={20}
                className="hover:text-pink-300"
                title="Delete"
                onClick={() => {
                  alterProduct(id, -1);
                }}
              ></GiTrashCan>
            </span>
          ) : (
            <button
              type="button"
              title="Delete"
              className=" p-2"
              onClick={() => {
                alterProduct(id, -1);
              }}
            >
              -
            </button>
          )}
          {quantity}

          <button
            type="button"
            title="Add"
            className="p-2"
            onClick={() => {
              alterProduct(id, 1);
            }}
          >
            +
          </button>
        </div>
      </td>

      <td className="pb-10 px-2 font-medium text-center">{formattedPrice}</td>
    </tr>
  );
};
