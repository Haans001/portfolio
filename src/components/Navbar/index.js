import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Hamburger from '@components/Hamburger';
import Button from '@components/Button';
import FullScreenMenu from '@components/FullScreenMenu';
import NavigationLink from '@components/NavigationLink';
import gsap from 'gsap';
import NavbarWrapper from './NavbarWrapper';

const Navbar = ({ menuItems, open, setOpen }) => {
  const wrapper = useRef();
  const menu = useRef();
  const logo = useRef();

  useEffect(() => {
    gsap.set(wrapper.current, { visibility: 'visible' });
    gsap.from(logo.current, { opacity: 0, duration: 0.2, ease: 'power4' });
    gsap.from(menu.current.children, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      stagger: 0.1,
      ease: 'power4',
    });
  }, []);

  const Menu = () => (
    <menu className="hidden md:block m-0">
      <ul ref={menu} className="flex space-x-8 text-white list-none items-center">
        {menuItems.map(({ path, name }) => (
          <li key={name} className="text-sm hover:text-accent transition-colors">
            <NavigationLink to={path}>{name}</NavigationLink>
          </li>
        ))}
        <Button accent>Resume</Button>
      </ul>
    </menu>
  );

  return (
    <NavbarWrapper
      style={{
        visibility: 'hidden',
      }}
      ref={wrapper}
    >
      <a ref={logo} href="/" className="text-xl text-white">
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
