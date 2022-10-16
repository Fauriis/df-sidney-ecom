import Head from 'next/head';
import { CartControl } from '../components/cart';
import ContinueShopping from '../components/cart/ContinueShopping';
import { useCart } from '../hooks';
import { Layout } from '../layouts';

const Cart = () => {
  const cart = useCart(2);

  if (cart === null) {
    return;
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <div> </div>

            {/* <CartControl></CartControl> */}
            <CartControl cart={cart}></CartControl>
          </header>

          <div className="flex justify-end mt-10">
            <ContinueShopping></ContinueShopping>
          </div>
          {/* <section className="mt-16"></section> */}
          <section className="mt-16">{cart.id}</section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
