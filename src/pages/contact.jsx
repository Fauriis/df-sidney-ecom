import Head from 'next/head';
import { Layout } from '../layouts';
import ContactDetails from './Contact/ContactDetails';
import Map from './Contact/Map';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>

      <Layout>
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
