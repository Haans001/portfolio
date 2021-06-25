import React from 'react';

const Hamburger = ({ ...props }) => {
  return (
    <button type="button" className="hamburger" {...props}>
      <span />
      <span />
    </button>
  );
};

export default Hamburger;
