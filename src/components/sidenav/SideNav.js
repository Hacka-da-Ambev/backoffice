import './SideNav.css';
import logo_ambev from './ambev-logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faHome, faGlassCheers } from '@fortawesome/free-solid-svg-icons';


function SideNav() {
  const itemMenu = [
    {
      title: 'Dashboard',
      icon: faHome,
      link: '/'
    },
    {
      title: 'Produtos',
      icon: faGlassCheers,
      link: '/produtos'
    }
  ];

  const navLinks = itemMenu.map((value) => {
    return (
      <NavLink exact to={value.link} 
        className="NavLink" 
        activeClassName="NavActive"
        key={value.title} 
        isActive={(match, location) => { 
          if(match){
            return match.isExact ? true : false;
          }
          if(value.link === '/produtos'){
            return location.pathname.indexOf('/produtos') > -1;
          }
        }}>
        <li className="BlocoNav__item grid items-center py-3 rounded-l-full pl-4 mb-3">
          <FontAwesomeIcon icon={value.icon} className="mr-4 text-2xl"/>
          {value.title}
          <div className="BlocoNav__detail"></div>
        </li>
      </NavLink>
    )
  }, '')

  return (
    <div className="SideNav">
      <Link to="/">
        <div className="LogoAmbev">
          <FontAwesomeIcon icon={faBeer} className="text-3xl mx-4"/>
          <img src={logo_ambev} alt="logo ambev" className="LogoAmbev__svg"/>
        </div>
      </Link>
      <div className="BlocoNav pt-7">
        <ul className="BlocoNav__nav">
          {navLinks}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;