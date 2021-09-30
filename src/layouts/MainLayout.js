import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '@assets/css/main.scss';
import SEO from '@components/SEO/SEO';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const menuItems = {
  en: [
    { path: '#about', name: 'About' },
    { path: '#work', name: 'Work' },
    { path: '#contact', name: 'Contact' },
  ],
  pl: [
    { path: '#about', name: 'O mnie' },
    { path: '#work', name: 'Projekty' },
    { path: '#contact', name: 'Kontakt' },
  ],
};

const StyledContainer = styled.main(({ blur }) => [blur && `filter: blur(2px)`]);

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const {
    i18n: { language },
  } = useTranslation();

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
      <Navbar
        menuItems={menuItems[language]}
        open={open}
        setOpen={() => setOpen(!open)}
      />
      <StyledContainer blur={open}>{children}</StyledContainer>
      <Footer menuItems={menuItems[language]} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default MainLayout;
