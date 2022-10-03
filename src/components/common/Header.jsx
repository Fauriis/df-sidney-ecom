import Link from 'next/link';
import { useState } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center h-full z-10 relative lg:flex-col lg:py-8">
        <Link href="/">
          <a title="Home">
            <FaApple size="32"></FaApple>
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
      </section>

      <nav
        className={`absolute left-0 ${
          menuOpen ? 'top-0 ' : '-top-full '
        }  h-screen w-screen lg:w-1/2 text-white bg-neutral-900 `}
      >
        <ul className="hover:text-pink-200 text-lg text-center uppercase lg:mt-7">
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
        </ul>
      </nav>
    </>
  );
};
