import { css } from '@emotion/css';

import { ProductTile } from './ProductTile';

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  if (products.length <= 0) {
    return (
      <>
        <div>no products</div>
      </>
    );
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${perRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product, index) => {
        return (
          <li key={index}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};

// rafc
// rafc
// rafc
// rafc
// rafc
