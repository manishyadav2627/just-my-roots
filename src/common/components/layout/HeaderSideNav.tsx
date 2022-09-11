import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store/Store';
import { setIsMenuOpen } from './reducers/AppReducer';
import user from '../../assets/images/user-pic.svg';
import logo from '../../assets/images/logo-horizontal.svg';
import { setActiveTab } from '../../../routes/listings/reducer/ListingReducer';
import { projectData } from '../../data/Data';

const HeaderSideNav = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: RootState) => state.common);
  return (
    <div
      className="header_menu_screen"
      onClick={() => dispatch(setIsMenuOpen(!isMenuOpen))}
    >
      <div className="header_menu_screen_inner">
        <button
          type="button"
          onClick={() => dispatch(setIsMenuOpen(!isMenuOpen))}
          className="w_full"
        >
          <p className="close_header_menu w_full">&times;</p>
        </button>
        <div className="w_full m_auto flex_center">
          <Link to="/">
            <img src={logo} className="header_logo" alt="logo" />
          </Link>
        </div>
        <div className="w_full m_auto flex_center">
          <img
            src={user}
            className="header_menu_screen_inner_user"
            alt="user"
          />
        </div>
        <p className="header_menu_screen_inner_user_mail">
          dukauwa.du@gmail.com
        </p>
        <div>
          <p className="header_menu_screen_inner_explore">Explore</p>
          {projectData?.map((service) => (
            <p
              onClick={() => dispatch(setActiveTab(service.category))}
              key={service.category}
              className="header_menu_screen_inner_category"
            >
              {service.category}
            </p>
          ))}
        </div>
        <button type="button" className="header_menu_screen_inner_logout">
          Log Out
        </button>
      </div>
    </div>
  );
};
export default HeaderSideNav;
