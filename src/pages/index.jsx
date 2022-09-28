import Head from 'next/head';
import { Layout } from '../layouts';

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main>www</main>
      </Layout>
    </>
  );
};

export default Homepage;
// obligatoriu returnat un default export
