import React from 'react';
import Hamburger from '@components/Hamburger';
import Fade from '@components/Fade';
import useScrollDown from '../../hooks/useScrollDown';

const Navbar = ({ onMenuOpen }) => {
  const scrolled = useScrollDown();

  const Menu = () => (
    <menu className="hidden lg:block m-0">
      <ul className="flex space-x-5 text-white list-none">
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </menu>
  );

  return (
    <nav className="py-7 px-2 md:px-24 flex justify-between items-center fixed top-0 left-0 w-full">
      <Fade in={!scrolled}>
        <a href="/" className="text-xl text-white">
          <span className="text-gray">jan.</span>rapacz
        </a>
      </Fade>

      <div className="relative">
        <Fade in={!scrolled}>
          <Menu />
        </Fade>
        <Fade in={scrolled}>
          <Hamburger onClick={onMenuOpen} />
        </Fade>
      </div>
    </nav>
  );
};

export default Navbar;
