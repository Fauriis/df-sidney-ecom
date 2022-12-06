import { IoIosArrowDropup } from 'react-icons/io';

export const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  return (
    <>
      <section className="container px-4 lg:px-0 mx-auto ">
        <div className="grid grid-cols-2 my-6 gap-8 lg:my-6 lg:gap-5  lg:grid-cols-4">
          <ul className="text-gray-700 lg:text-lg">
            <li>
              <h1 className="uppercase text-xl text-black mb-5 lg:text-2xl">
                Los Angeles
              </h1>
            </li>

            <li>
              <a href="">
                145 Oliveshka Street, <br /> Los Angeles, LA 903
              </a>
            </li>

            <li>
              <a href="tel:+44987065901">+44 987 065 901</a>
            </li>

            <li>
              <a href="mailto:info@sun.com">info@sun.com</a>
            </li>
          </ul>

          <ul className="text-gray-700 lg:text-lg">
            <li>
              <h1 className="uppercase text-xl text-black mb-5 lg:text-2xl">
                San Francisco
              </h1>
            </li>

            <li>
              <a href="">
                210 Pier Street, <br /> San Francisco, CA 9411
              </a>
            </li>

            <li>
              <a href="tel:+44987065902">44 987 065 902</a>
            </li>

            <li>
              <a href="mailto:info@sun.com">info@sun.com</a>
            </li>
          </ul>

          <ul className="text-gray-700 lg:text-lg">
            <li>
              <h1 className="uppercase text-black text-xl mb-5 lg:text-2xl mt-10 lg:mt-0">
                New York
              </h1>
            </li>

            <li>
              <a href="">
                711 Snow Street, <br /> New York, NY 10014
              </a>
            </li>

            <li>
              <a href="tel:+44987065903">+44 987 065 903</a>
            </li>

            <li>
              <a href="mailto:info@Sun.com">info@Sun.com</a>
            </li>
          </ul>

          <div>
            <h1 className="uppercase text-xl text-black mb-5 lg:text-2xl mt-10 lg:mt-0">
              Follow Us
            </h1>

            <ul className="text-gray-700 text lg:text-lg grid grid-cols-2">
              <li>
                <a href="">Facebook</a>
              </li>

              <li>
                <a href="">Twitter</a>
              </li>

              <li>
                <a href="">Instagram</a>
              </li>

              <li>
                <a href="">LinkedIn</a>
              </li>

              <li>
                <a href="">Dribble</a>
              </li>

              <li>
                <a href="">Behance</a>
              </li>

              <li>
                <a href="">Pinterest</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-400 "></div>
      <div className="text-center relative bottom-4">
        <button
          onClick={scrollToTop}
          className="hover:animate-bounce hover:text-pink-600 bg-gray-100"
        >
          <IoIosArrowDropup
            size="36"
            title="Back to top!"
            className=""
          ></IoIosArrowDropup>
        </button>
      </div>

      <section className="container lg:px-0 mx-auto">
        <h2 className="text-center mt-5 mb-5">© 2022. Created by Sun.</h2>
      </section>
    </>
  );
};
