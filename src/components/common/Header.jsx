<<<<<<< HEAD
import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center h-full z-10 relative">
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
          <CgMenu size="32"></CgMenu>
        </button>
      </section>

      <nav
        className={`absolute left-0 ${
          menuOpen ? 'top-0' : '-top-full'
        } h-screen w-screen text-white bg-neutral-900`}
      >
        <ul>
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
=======
import {useState} from 'react';
import {CgMenu} from 'react-icons-cg'
import {FaApple} from 'react-icons-fa'
import Link from 'next/link';

export const Header = () =>{
const [menuOpen, setMenuOpen] = useState(false)

  return(
    <>
    <section className='flex justify-between items-center h-full'>

    </section>

    <nav className='{ absolute top-0 left-0 h-screen w-screen text-white bg-neutral-900'>
    </nav>
    </>
  )
}

>>>>>>> 697912ceb38cb0af8043295238f3990baf5ca77d
