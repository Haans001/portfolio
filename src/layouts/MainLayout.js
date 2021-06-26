import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@assets/css/main.scss';
import SEO from '@components/SEO/SEO';
import Navbar from '@components/Navbar';
import FullScreenMenu from '@components/FullScreenMenu';

const menuItems = [
  { path: '#about', name: 'About' },
  { path: '#work', name: 'Work' },
  { path: '#contact', name: 'Contact' },
];

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <SEO />
      <Navbar menuItems={menuItems} onMenuOpen={() => setOpen(true)} />
      <FullScreenMenu
        menuItems={menuItems}
        open={open}
        onMenuClose={() => setOpen(false)}
      />
      <main className="mt-32 lg:mt-48">{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default MainLayout;
