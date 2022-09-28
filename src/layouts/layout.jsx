import { css } from '@emotion/css';

const black = '#101010';
const white = '#fff'

export const Layout = ({ children }) => {
  const gridCss = css `display: css;
  grid-template-areas:
  'header'
  'main-area';

  grid-template-rows: 40px 1fr;
  `
const headerCss = css `background-color: ${black};
color: ${white};
`

  return (
    <div className={gridCss}>
    <header className={headerCss} >x</header>

    <div>
    {children}
    <footer>x</footer>
    </div>
    </div>
  );
};




