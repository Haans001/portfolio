import React from 'react';
import PropTypes from 'prop-types';
import LinkIcon from '@assets/images/icons/iconArrow.inline.svg';
import GithubIcon from '@assets/images/icons/iconGithub.inline.svg';
import NavigationLink from '@components/NavigationLink';
import { useTranslation } from 'react-i18next';

const Footer = ({ menuItems }) => {
  const { t } = useTranslation(['footer']);

  return (
    <footer id="contact" className="mt-64 pt-24 pb-6 bg-accent-dark">
      <div className="container flex flex-col md:flex-row justify-between">
        <div>
          <a
            href="#contact"
            className="text-white text-5xl font-bold whitespace-pre-line"
          >
            {t('footer:title')}
            <LinkIcon className="w-10 h-10 mt-1" />
          </a>
          <p className="text-white mt-7 md:mt-14">
            {t('footer:email')}:
            <br />
            <span className="underline">rapacz2001@gmail.com</span>
          </p>
        </div>
        <menu className="p-0 mt-20 md:mt-0">
          <h2 className="text-2xl font-bold text-white text-right">Menu</h2>
          <ul>
            {/* <li className="text-white opacity-70 md:text-right">
              <NavigationLink to="#about">About</NavigationLink>
            </li>
            <li className="text-white opacity-70 md:text-right">
              <NavigationLink to="#work">Work</NavigationLink>
            </li> */}
            {menuItems.map(({ name, path }) => (
              <li className="text-white opacity-70 md:text-right">
                <NavigationLink to={path}>{name}</NavigationLink>
              </li>
            ))}
          </ul>
          <div className="flex md:justify-end mt-4">
            <a href="https://github.com/Haans001" target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
          </div>
        </menu>
      </div>

      <div className="mt-16 text-center font-bold text-white text-sm opacity-70">
        {t('footer:creator')}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  menuItems: PropTypes.arrayOf().isRequired,
};

export default Footer;
