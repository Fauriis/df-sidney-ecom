import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

const ContinueShopping = () => {
  return (
    <>
      <Link href="/">
        <button
          type="button"
          title="Back Home"
          className="flex flex-cols pr-6 text-center bg-white text-black text-sm  hover:bg-pink-500 transition-colors"
        >
          <IoIosArrowBack size={33}></IoIosArrowBack>
          <span className="py-2 uppercase font-bold">back to shop</span>
        </button>
      </Link>
    </>
  );
};

export default ContinueShopping;
