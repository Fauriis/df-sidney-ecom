import Link from 'next/link';
import Image from 'next/image';
import { AddToCart } from './AddToCart';

export const ProductTile = ({ product }) => {
  const { title, price, image, id } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <article article="w-full ">
      <header>
        <div className="w-full text-center">
          <Link href={`/products/${id}`}>
            <a title={title}>
              <Image
                alt={`Image for product ${title}`}
                src={image}
                width={200}
                height={400}
                objectFit="contain"
                className="inline -z-10"
              ></Image>
            </a>
          </Link>
        </div>
      </header>

      <section className="mt-8 text-center text-sm">
        <h1 className="uppercase text-black text-xl mb-2">{title}</h1>

        <div className="text-pink-500 font-bold my-4 text-lg">
          {formattedPrice}
        </div>

        <AddToCart product={product}></AddToCart>
      </section>
    </article>
  );
};
