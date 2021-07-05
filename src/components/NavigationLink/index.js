import React from 'react';
import PropTypes from 'prop-types';

import gsap from 'gsap';

const NavigationLink = ({ to, children, ...props }) => {
  const navigate = () => {
    gsap.to(window, { duration: 1, scrollTo: to, ease: 'power4' });
  };
  return (
    <button {...props} type="button" onClick={navigate}>
      {children}
    </button>
  );
};

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default NavigationLink;
