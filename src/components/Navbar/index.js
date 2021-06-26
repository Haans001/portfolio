import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from '@components/Hamburger';
import Fade from '@components/Fade';
import { useMediaQuery } from 'react-responsive';
import useScrollDown from '../../hooks/useScrollDown';

const Navbar = ({ menuItems, onMenuOpen }) => {
  const scrolled = useScrollDown();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  const Menu = () => (
    <menu className="hidden lg:block m-0">
      <ul className="flex space-x-5 text-white list-none">
        {menuItems.map(({ path, name }) => (
          <li>
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </menu>
  );

  return (
    <nav className="py-7 px-4 xl:px-24 flex justify-between fixed top-0 left-0 w-full">
      <Fade in={!scrolled}>
        <a href="/" className="text-xl text-white">
          <span className="text-gray">jan.</span>rapacz
        </a>
      </Fade>

      <div className="relative">
        <Fade
          in={!scrolled}
          mountOnEnter
          unmountOnExit
          className="absolute top-0 right-0"
        >
          <Menu />
        </Fade>
        <Fade in={scrolled} mountOnEnter unmountOnExit className="absolute top-0">
          <Hamburger onClick={onMenuOpen} />
        </Fade>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;
