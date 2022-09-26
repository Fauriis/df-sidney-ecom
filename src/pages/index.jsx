import Head from 'next/head';

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main className="text-3xl text-center font-bold underline bg-red-500">
        Homepage
      </main>
    </>
  );
};

export default Homepage;
// obligatoriu returnat un default export
