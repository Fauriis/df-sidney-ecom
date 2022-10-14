import Link from 'next/link';
import { useState } from 'react';
import { CgClose, CgFacebook, CgMenu } from 'react-icons/cg';
import { FaPinterest, FaSun, FaYoutube } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center h-full z-30 relative lg:flex-col lg:py-4 ">
        <Link href="/">
          <a title="Home" className=" flex flex-col">
            <FaSun size="32" className="hover:animate-spin"></FaSun>
            <p className="text-center">SUN</p>
          </a>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <CgClose size="32"></CgClose>
          ) : (
            <CgMenu size="32"></CgMenu>
          )}
        </button>

        <div className="lg:block hidden">
          <ul className="flex flex-col gap-3 py-5">
            <li className="hover:text-pink-200">
              <Link href="https://www.facebook.com/">
                <a title="Facebook" target="_blank" rel="noopener noreferrer">
                  <CgFacebook size="26"></CgFacebook>
                </a>
              </Link>
            </li>

            <li className="hover:text-pink-200">
              <Link href="https://www.youtube.com/">
                <a title="Youtube" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size="26"></FaYoutube>
                </a>
              </Link>
            </li>

            <li className="hover:text-pink-200">
              <Link href="https://ro.pinterest.com/">
                <a title="Pinterest" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size="26"></FaPinterest>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <nav
        className={`absolute left-0 -top-full transition-transform transform-gpu ${
          menuOpen ? 'translate-y-full' : ' '
        } h-screen w-screen lg:w-screen-1/3 text-white bg-neutral-900 lg:pl-26 pt-80`}
      >
        <ul className="text-lg text-center uppercase lg:text-3xl flex flex-col justify-center gap-y-5 animate-pulse">
          <li className="hover:text-pink-200">
            <Link href="/">
              <a title="Home">Home</a>
            </Link>
          </li>

          <li className="hover:text-pink-200">
            <Link href="/contact">
              <a title="Contact">Contact</a>
            </Link>
          </li>

          <li className="hover:text-pink-200">
            <Link href="/aboutUs">
              <a title="About us">About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
