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
    <div className='fixed w-screen top-0 left-0'>
       <div
        className={`z-40 fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-600 sm:hidden ${
          menuMobile ? 'opacity-70' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuMobile(false)}
      ></div>
      <nav className='relative p-7 z-50'>
        <div className='text-base flex justify-between sm:hidden max-sm:bg-white max-sm:p-4'>
          <h1 className='text-sm'>Sofia Oliveira</h1>
          <button
            className='block text-sm'
            onClick={() => setMenuMobile(!menuMobile)}>
            {menuMobile ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className='max-sm:bg-white max-sm:py-8 max-sm:pl-6 max-sm:mt-5'>
          <ul
            className={`${
              menuMobile ? 'flex' : 'hidden'
            } flex-col text-3xl sm:flex sm:flex-row sm:gap-2 justify-center sm:text-base `}>
            {navItems.map((navItem) => (
              <li key={navItem.id}>
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
