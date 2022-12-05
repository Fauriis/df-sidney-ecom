import Head from 'next/head';
import Map from '../components/information/Map';
import ContactDetails from '../components/information/ContactDetails';
import { Layout } from '../layouts';
import { CartControl } from '../components/cart';
import ContinueShopping from '../components/cart/ContinueShopping';

const ContactPage = () => {
  return (
    <>
      <Head className="flex">
        <title>Contact </title>
      </Head>

      <Layout>
        <main className="container lg:px-0 mx-auto ">
          <header className="flex justify-between text-zinc-400 items-center">
            <ContinueShopping></ContinueShopping>
            <CartControl></CartControl>
          </header>
        </main>

        <div className="-z-10 lg:mx-10 lg:my-4">
          <Map></Map>
        </div>

        <div className="lg:mb-6">
          <ContactDetails></ContactDetails>
        </div>
      </Layout>
    </>
  );
};

// este obligatoriu sa returnam un default export
// pentru fiecare pagina
export default ContactPage;
