import { css } from '@emotion/css';
import {Header} from '../components/common';


const black = '#171717';
const white = '#fff'
const gray = '#f2f2f2'

export const Layout = ({ children }) => {

const [menuOpen, setMenuOpen] = useState(false)


  const gridCss = css `display: css;
  grid-template-areas:
  'header'
  'main-area';

  grid-template-rows: 60px 1fr;


  @media (min-width: 1024px){
  grid-template-areas: 'header main-area'
  header-main-area;

  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  }
  `

  const headerCss = css `background-color: ${black};
  color: ${white};
  grid-area: header;
  padding: 0 16px;

  `

  const mainAreaCss = css `
  grid-area: main-area;
  `

  const footerCss = css `
  background-color: ${gray};
  padding: 0 16px;
  `

  return (
    <div className={gridCss}>
    <header className={headerCss} >
<Header></Header>
      <section>

      <Link href="/" > <a title='Home'> <FaApple size="32"></FaApple> </a> </Link>


<button title='menu' type='button' onClick={() =>{setMenuOpen(!menuOpen)}}> <CgMenu size="32"></CgMenu> </button>
</section>

<nav>
  <ul>
    <li>
<Link href='/'><a title="home">home</a></Link>

    </li>

    <Link href="/contact"><a title='contact'>contact</a></Link>
  </ul>
</nav>

</header>


{menuOpen ? 'menuOpen' : 'menu closed'}

    <div className={mainAreaCss}>
    {children}
    <footer>x</footer>
    </div>
    </div>
  );
};




