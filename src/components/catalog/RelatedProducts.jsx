import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { baseUrl } from '../..';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { AddToCart } from './AddToCart';

export const RelatedProducts = ({ productCategory }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/products/category/${productCategory}?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  }, [productCategory]);

  if (products === null) {
    return <></>;
  }

  return (
    <section className="text-center mt-10">
      <h1 className=" uppercase text-lg font-bold my-5">Related Products</h1>

      <ul className="flex lg:flex-row flex-col lg:justify-center lg:items-center gap-5 my-5 ">
        <RiArrowLeftSLine
          size={40}
          className="cursor-pointer hover:text-pink-500 lg:block hidden"
        ></RiArrowLeftSLine>

        {products.map((product) => {
          const { title, price, image, id } = product;
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(price);

          return (
            <div className="items-center" key={id}>
              <article article="w-full ">
                <header>
                  <div className="w-full">
                    <Link href={`/products/${id}`}>
                      <a title={title}>
                        <Image
                          alt={`Image for product ${title}`}
                          src={image}
                          width={500}
                          height={200}
                          objectFit="contain"
                          className="inline -z-10 cursor-pointer"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                </header>

                <section className="mt-8 text-center text-sm lg:text-md">
                  <h1 className="uppercase text-black mb-2 cursor-pointer">
                    {title}
                  </h1>

                  <div className="text-pink-500 font-bold cursor-pointer">
                    {formattedPrice}
                  </div>

                  <div className="mt-12 mb-6">
                    <AddToCart product={product}></AddToCart>
                  </div>
                </section>
              </article>
            </div>
          );
        })}

        <RiArrowRightSLine
          size={40}
          className="cursor-pointer hover:text-pink-500 lg:block hidden"
        ></RiArrowRightSLine>
      </ul>
    </section>
  );
};
