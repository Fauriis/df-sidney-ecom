import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Layout } from '../../layouts/layout';
import { BiLoaderCircle } from 'react-icons/bi';
import { CartControl } from '../../components/cart';
import { baseUrl } from '../..';
import Link from 'next/link';
import ContinueShopping from '../../components/cart/ContinueShopping';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (pid === undefined) {
      return;
    }

    fetch(`${baseUrl}/products/${pid}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProduct(result);
      });
  }, [pid]);

  if (product === null) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
  }

  const { id, title, description, price, image } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(price);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <main>
          <header className="container">
            <ContinueShopping></ContinueShopping>
          </header>

          <div className="container flex justify-end mx-auto">
            <CartControl></CartControl>
          </div>

          <section className="container mt-16 px-4 mx-auto lg:px-0 grid gap-8 grid-cols-12">
            <div className="col-start-1 col-span-5">
              <img
                alt={`Image of ${title}`}
                src={image}
                className="block w-full"
              ></img>
            </div>

            <header className="col-start-7 col-span-6 pt-12">
              <h1 className="text-2xl uppercase font-medium">{title}</h1>
              <p className="mt-12">{description}</p>

              <div className="mt-12">
                <span className="text-3xl leading-9 font-bold">
                  {formattedPrice}
                </span>
              </div>

              <div className="mt-12 mb-6">
                <button
                  className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:animate-pulse hover:bg-pink-500 transition-colors"
                  title={`Add ${title} to cart`}
                  type="button"
                  onClick={() => {
                    alert(id);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </header>
          </section>
          <section className="border-t"></section>
          <section className="container px-4 mx-auto lg:px-0">jos</section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
