import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Hamburger from '@components/Hamburger';
import Button from '@components/Button';
import FullScreenMenu from '@components/FullScreenMenu';
import NavbarWrapper from './NavbarWrapper';

const Navbar = ({ menuItems, open, setOpen }) => {
  const Menu = () => (
    <menu className="hidden md:block m-0">
      <ul className="flex space-x-8 text-white list-none items-center">
        {menuItems.map(({ path, name }) => (
          <li className="text-sm hover:text-accent transition">
            <a href={path}>{name}</a>
          </li>
        ))}
        <Button accent>Resume</Button>
      </ul>
    </menu>
  );

  return (
    <NavbarWrapper>
      <a href="/" className="text-xl text-white">
        <span className="text-gray">jan.</span>rapacz
      </a>
      <Menu />
      <Hamburger open={open} onClick={() => setOpen(!open)} />
      <FullScreenMenu menuItems={menuItems} open={open} setOpen={setOpen} />
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Navbar;
