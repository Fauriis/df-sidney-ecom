import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '../../layouts/layout';
import { BiLoaderCircle } from 'react-icons/bi';
import { CartControl } from '../../components/cart';
import ContinueShopping from '../../components/cart/ContinueShopping';
import { useProduct } from '../../hooks/useProduct';
import ProductReviews from '../../components/catalog/ProductReviews';
import {
  AddToCart,
  ProductsImages,
  RelatedProducts,
} from '../../components/catalog';

import { ProductZoom } from './ProductZoom';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (product === null && status !== '404') {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
  }

  if (status === '404') {
    return <span>product not found</span>;
  }

  const { id, title, description, price, image, rating, category } = product;
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

          <section className="container mt-16 px-4 mx-auto lg:px-0 grid gap-8 grid-cols-12 ">
            <div className="lg:block hidden ml-12 mt-12">
              <ProductsImages></ProductsImages>
            </div>
            <div className="lg:col-start-4 lg:col-span-6 col-start-2 col-span-9 ">
              <ProductZoom className="-z-10"></ProductZoom>
            </div>

            <header className="lg:col-start-4 lg:col-span-6 lg:text-center lg:pt-12 col-start-2 col-span-10">
              <h1 className="text-2xl uppercase font-medium">{title}</h1>

              <ProductReviews
                rate={rating.rate}
                count={rating.count}
              ></ProductReviews>

              <p className="mt-8 ">{description}</p>

              <div className="mt-12">
                <span className="text-3xl leading-9 font-bold">
                  {formattedPrice}
                </span>
              </div>

              <div className="mt-12 mb-6">
                <AddToCart product={product}></AddToCart>
              </div>
            </header>
          </section>
          <section className="border-t"></section>

          <section className="container px-4 mx-auto lg:px-0">
            <ul className="grid grid-cols-3 text-center my-10 uppercase lg:text-lg">
              <li className="hover:bg-pink-500 transition-colors">
                {' '}
                <a href="">Description</a>{' '}
              </li>

              <li className="hover:bg-pink-500 transition-colors">
                {' '}
                <a href=""> Additional information</a>
              </li>

              <li className="hover:bg-pink-500 transition-colors">
                <a href=""> Reviews</a>
              </li>
            </ul>
          </section>

          <RelatedProducts
            productCategory={category}
            productId={id}
          ></RelatedProducts>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
