import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '@assets/css/main.scss';
import SEO from '@components/SEO/SEO';
import Navbar from '@components/Navbar';
import styled from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from '../config/i18next';

const menuItems = [
  { path: '#about', name: 'About' },
  { path: '#work', name: 'Work' },
  { path: '#contact', name: 'Contact' },
];

const StyledContainer = styled.main(({ blur }) => [blur && `filter: blur(2px)`]);

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(
    () =>
      open
        ? document.body.classList.add('overflow-hidden')
        : document.body.classList.remove('overflow-hidden'),
    [open]
  );

  return (
    <div>
      <SEO />
      <Navbar menuItems={menuItems} open={open} setOpen={() => setOpen(!open)} />
      <StyledContainer blur={open}>{children}</StyledContainer>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default MainLayout;
