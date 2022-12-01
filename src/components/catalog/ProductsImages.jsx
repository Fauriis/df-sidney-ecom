import { BsFillImageFill } from 'react-icons/bs';

const buttonClasses = `w-24 h-24 border border-zinc-400 flex justify-center items-center`;

export const ProductsImages = () => {
  return (
    <ul className="flex flex-col mt-8 ml-14 border-zinc-400 border-r-0 border-l-0 ">
      <li>
        <button title="Image" className={`${buttonClasses} hover:bg-pink-500`}>
          <BsFillImageFill size={20}></BsFillImageFill>
        </button>
      </li>

      <li>
        <button title="Image" className={`${buttonClasses} hover:bg-pink-500 `}>
          <BsFillImageFill size={20}></BsFillImageFill>
        </button>
      </li>

      <li>
        <button title="Image" className={`${buttonClasses} hover:bg-pink-500 `}>
          <BsFillImageFill size={20}></BsFillImageFill>
        </button>
      </li>

      <li>
        <button title="Image" className={`${buttonClasses} hover:bg-pink-500 `}>
          <BsFillImageFill size={20}></BsFillImageFill>
        </button>
      </li>
    </ul>
  );
};
