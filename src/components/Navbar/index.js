import React, { useState } from 'react';
import Hamburger from '@components/Hamburger';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const Menu = () => (
    <menu className="hidden lg:block">
      <ul className="flex space-x-5 text-white list-none">
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </menu>
  );

  return (
    <header className="py-7 px-2 md:px-24 flex justify-between items-center">
      <a href="/" className="text-xl text-white">
        <span className="text-gray">jan.</span>rapacz
      </a>
      {scrolled ? <Hamburger /> : <Menu />}
    </header>
  );
};

export default Navbar;
