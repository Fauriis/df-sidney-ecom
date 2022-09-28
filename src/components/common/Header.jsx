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

