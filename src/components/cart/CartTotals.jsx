import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export const CartTotals = () => {
  const { cart } = useContext(AppContext);
  return (
    <>
      <header className="border bg-zinc-200 p-2 lg:p-4">
        <h1 className="uppercase font-bold text-sm lg:text-md">Cart Totals</h1>
      </header>

      <section>
        <ul className="mt-2">
          <li className="p-2 border-b flex justify-between ">
            <h1 className="lg:text-xl">Subtotal:</h1>{' '}
            <span className="lg:font-bold">$4013.90</span>{' '}
          </li>

          <li className="p-2  border-b flex justify-between">
            <h1 className="lg:text-xl">Shipping: </h1>

            <form action="" className="flex flex-col justify-center">
              <div className="flex gap-3">
                <input type="radio" name="standard" id="standard" />
                <label htmlFor="standard">Standard (free)</label>
              </div>

              <div className="flex gap-3 ">
                <input type="radio" name="express" id="express" />
                <label htmlFor="express">Express ($49.00)</label>
              </div>
            </form>
          </li>

          <li className="p-2 border-b flex justify-between lg:text-xl">
            Total: <span className="font-bold">$4013.90</span>
          </li>
        </ul>
      </section>

      <footer className="bg-black my-4 text-center hover:bg-pink-300">
        <button
          type="button"
          title="Pleace Order"
          className="uppercase text-white p-2 font-bold"
        >
          Proceed to checkout
        </button>
      </footer>
    </>
  );
};
