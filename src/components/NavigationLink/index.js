import React from 'react';
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

export default NavigationLink;
