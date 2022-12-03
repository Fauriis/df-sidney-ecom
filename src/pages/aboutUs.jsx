import Head from 'next/head';
import { Layout } from '../layouts';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>

      <Layout>
        <main className="mb-10">
          <div className="container mx-auto mt-4">
            <Image
              src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Company"
              width={1560}
              height={550}
              className="-z-10"
              objectFit="cover"
            ></Image>
          </div>

          <section className="container mx-auto my-10">
            <header className="mx-7 lg:px-10 text-justify ">
              <h1 className="uppercase font-bold mb-8 lg:text-2xl lg:font-medium">
                About us
              </h1>

              <p className="mb-4 font-light lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                dolores! Qui, quaerat pariatur. Dicta eligendi in similique
                commodi. Consequuntur mollitia eaque sint corporis minus
                doloremque delectus quos doloribus voluptate quia.
              </p>

              <p className="mb-4 font-light lg:text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium illo id numquam ratione, asperiores sequi blanditiis,
                saepe in harum, repudiandae natus provident? Voluptate
                perspiciatis, aliquid ullam inventore dolorem sed totam!
              </p>

              <p className="mb-4 font-light lg:text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                sint vel itaque aliquam perspiciatis tempora veniam, voluptas
                laboriosam. Unde nostrum voluptatem fugiat adipisci et ea
                voluptatum voluptas eaque sequi quasi.
              </p>

              <Link href="/">
                <button
                  type="button"
                  className="uppercase lg:font-bold bg-black text-white hover:bg-pink-500 p-2 lg:px-6 lg:py-2"
                >
                  Go to shop
                </button>
              </Link>
            </header>
          </section>
        </main>
      </Layout>
    </>
  );
};

// este obligatoriu sa returnam un default export
// pentru fiecare pagina
export default AboutUs;
