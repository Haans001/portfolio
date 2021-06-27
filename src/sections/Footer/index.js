import React from 'react';
import LinkIcon from '@assets/images/icons/iconArrow.inline.svg';
import GithubIcon from '@assets/images/icons/iconGithub.inline.svg';

const Footer = () => {
  return (
    <footer className="mt-64 pt-24 pb-6 bg-accent-dark">
      <div className="container flex flex-col md:flex-row justify-between">
        <div>
          <a href="#contact" className="text-white text-5xl font-bold">
            Talk <br /> with me.
            <LinkIcon className="w-10 h-10 mt-1" />
          </a>
          <p className="text-white mt-7 md:mt-14">
            Or email me at:
            <br />
            <span className="underline">rapacz2001@gmail.com</span>
          </p>
        </div>
        <menu className="p-0 mt-20 md:mt-0">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <ul>
            <li className="text-white opacity-70 md:text-right">
              <a href="">About</a>
            </li>
            <li className="text-white opacity-70 md:text-right">
              <a href="">Work</a>
            </li>
          </ul>
          <div className="flex md:justify-end mt-4">
            <a href="">
              <GithubIcon />
            </a>
          </div>
        </menu>
      </div>

      <div className="mt-16 text-center font-bold text-white text-sm opacity-70">
        Designed and built by Jan Rapacz
      </div>
    </footer>
  );
};

export default Footer;
