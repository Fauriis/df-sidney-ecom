import Link from 'next/link';
import { useState } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import { FaSun } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center h-full z-10 relative lg:flex-col lg:py-4">
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

        <div className="lg:block hidden ">
          <span className="block w-4 h-4 bg-white rounded-full"></span>
        </div>
      </section>

      <nav
        className={`absolute left-0 -top-full transition-transform transform-gpu ${
          menuOpen ? 'translate-y-full' : ' '
        }  h-screen w-screen lg:w-screen-1/3 text-white bg-neutral-900 `}
      >
        <ul className="hover:text-pink-200 text-lg text-center uppercase lg:text-2xl lg:pt-8 animate-pulse">
          <li>
            <Link href="/">
              <a title="Home">Home</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a title="Contact">Contact</a>
            </Link>
          </li>

          <li>
            <Link href="/aboutUs">
              <a title="About us">About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
