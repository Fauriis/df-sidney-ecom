import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export const CartTotals = () => {
  const { cart } = useContext(AppContext);
  return (
    <>
      <header>
        <h1>Cart Totals</h1>
      </header>

      <section>
        <ul>
          <li>Total:</li>
        </ul>
      </section>

      <footer></footer>
    </>
  );
};
