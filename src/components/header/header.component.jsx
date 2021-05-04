
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/snakedragoncirclering.svg';
import './header.styles.scss';
import * as Path from '../route/constants.path'
const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to={Path.PATH_SHOP}>
        SHOP
      </Link>
      <Link className='option' to={Path.PATH_HOMEPAGE}>
Home      </Link>
    </div>
  </div>
);

export default Header;