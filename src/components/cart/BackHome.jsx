import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

const BackHome = () => {
  return (
    <>
      <Link href="/">
        <button
          type="button"
          title="Back Home"
          className="flex flex-cols pr-6 py-1 text-center bg-black text-white uppercase font-medium text-sm hover:animate-pulse hover:bg-pink-500 transition-colors"
        >
          <IoIosArrowBack size={33}></IoIosArrowBack>
          <span className="py-2">back home</span>
        </button>
      </Link>
    </>
  );
};

export default BackHome;
