import { useEffect, useState } from 'react';
import { BiRectangle } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import { useIsMobile, useLocalStorage } from '../../hooks';

const buttonClasses = `w-24 h-24 border-l border-zinc-400 flex justify-center items-center`;

export const GridControls = ({ setPerRow = () => {} }) => {
  const [itemsPerRow, setItemsPerRow] = useLocalStorage('perRow', '4/row');
  const isMobile = useIsMobile();

  // de fiecare data cand itemsPerRow se schimba
  // ruleaza acest callbacks
  useEffect(() => {
    const perRow = parseInt(itemsPerRow);

    setPerRow(perRow);
  }, [itemsPerRow, setPerRow]);

  if (isMobile === true) {
    return <></>;
  }

  return (
    <ul className="flex border border-zinc-400 border-r-0 border-l-0">
      <li>
        <button
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <BiRectangle size="32"></BiRectangle>
        </button>
      </li>

      <li>
        <button
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <BiRectangle size="32"></BiRectangle>
          <BiRectangle size="32"></BiRectangle>
        </button>
      </li>

      <li>
        <button
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <BsGrid size="32"></BsGrid>
        </button>
      </li>
    </ul>
  );
};
