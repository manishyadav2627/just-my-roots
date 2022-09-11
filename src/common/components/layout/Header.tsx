import '../../assets/css/Common.scss';
import menu from '../../assets/images/menu.svg';
import user from '../../assets/images/user-pic.svg';
import logo from '../../assets/images/logo-horizontal.svg';
import { Link } from 'react-router-dom';
import HeaderSideNav from './HeaderSideNav';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import { setIsMenuOpen } from './reducers/AppReducer';

const Header = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: RootState) => state.common);
  return (
    <div className="header">
      {isMenuOpen && <HeaderSideNav />}
      <div className="header_left">
        <button
          type="button"
          className="header_menu"
          onClick={() => dispatch(setIsMenuOpen(!isMenuOpen))}
        >
          <img src={menu} alt="menu-bar" />
        </button>
        <Link to="/">
          <img src={logo} className="header_logo" alt="logo" />
        </Link>
      </div>
      <div className="header_right">
        <img src={user} alt="user" className="header_right_user" />
      </div>
    </div>
  );
};
export default Header;
