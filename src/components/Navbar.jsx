import { useLocation } from 'react-router-dom';
import { navItems } from '../data';
import FlipLink from './animations/FlipLink';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [menuMobile, setMenuMobile] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const currentNavItem = navItems.find(
      (navItem) => navItem.link === location.pathname,
    );
    setActiveLink(currentNavItem ? currentNavItem.id : navItems[0].id);
  }, [location.pathname]);

  const handleClick = (navLink) => {
    setActiveLink(navLink);
    setMenuMobile(false);
  };

  return (
    <div className='fixed w-screen top-0 left-0 p-7'>
      <nav>
        <div className='text-base flex justify-between sm:hidden'>
          <h1 className='text-sm'>Sofia Oliveira</h1>
          <button
            className='block text-sm'
            onClick={() => setMenuMobile(!menuMobile)}>
            {menuMobile ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className='max-sm:bg-white max-sm:pt-3 max-sm:pl-5 max-sm:mt-7'>
          <ul
            className={`${
              menuMobile ? 'flex' : 'hidden'
            } flex-col text-3xl sm:flex sm:flex-row sm:gap-2 justify-center sm:text-base `} >
            {navItems.map((navItem) => (
              <li key={navItem.id} >
                <FlipLink
                  href={navItem.link}
                  isActive={activeLink === navItem.id}
                  onClick={(e) => {
                    handleClick(navItem.id);
                  }}>
                  {navItem.name}
                </FlipLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
