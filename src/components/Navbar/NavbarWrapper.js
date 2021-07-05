import React from 'react';
import useScroll from '@hooks/useScroll';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledNavbarWrapper = styled.nav`
  ${tw` px-4 xl:px-16 flex justify-between items-center fixed top-0 left-0 w-full z-50`}
  height: var(--nav-height);
  transition: all 0.3s ease-in-out;
  background: rgba(19, 19, 19, 0.8);

  ${({ hidden }) => hidden && `transform: translateY(calc(var(--nav-height) * -1));`}
  ${({ active }) =>
    active &&
    `
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.26);
    height: var(--nav-scrolled-height);
  `}
`;

const NavbarWrapper = React.forwardRef(({ children, ...props }, ref) => {
  const [scrolled, scrollDir] = useScroll();

  return (
    <StyledNavbarWrapper
      ref={ref}
      {...props}
      hidden={scrolled && scrollDir === 'down'}
      active={scrolled && scrollDir === 'up'}
    >
      {children}
    </StyledNavbarWrapper>
  );
});

NavbarWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default NavbarWrapper;
