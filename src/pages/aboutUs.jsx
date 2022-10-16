import Head from 'next/head';
import { Layout } from '../layouts';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>

      <Layout>
        <main>About SUN</main>
      </Layout>
    </>
  );
};

// este obligatoriu sa returnam un default export
// pentru fiecare pagina
export default AboutUs;
