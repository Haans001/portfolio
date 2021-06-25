import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '@assets/css/main.scss';
import SEO from '@components/SEO/SEO';
import Navbar from '@components/Navbar';
import FullScreenMenu from '@components/FullScreenMenu';
import Fade from '@components/Fade';

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <SEO />
      <Navbar onMenuOpen={() => setOpen(true)} />
      <FullScreenMenu open={open} onMenuClose={() => setOpen(false)} />
      <main className="mt-24 lg:mt-48">{children}</main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default MainLayout;
