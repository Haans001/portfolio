import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '@components/Button';

const StyledFullScreenMenu = styled.div`
  ${tw`fixed bg-white h-screen z-10 top-0 left-0 flex items-center justify-center md:hidden`}
  transform: ${({ open }) => !open && 'translateX(-100%)'};
  transition: transform 0.5s ease-in-out;
  width: min(70vw, 400px);
`;

const FullScreenMenu = ({ menuItems, open, setOpen }) => {
  return (
    <StyledFullScreenMenu open={open}>
      <ul className="space-y-20">
        {menuItems.map(({ path, name }) => (
          <li
            key={name}
            className="text-2xl text-center hover:text-accent transition "
          >
            <a onClick={() => setOpen(false)} href={path}>
              {name}
            </a>
          </li>
        ))}
        <li>
          <Button accent>Resume</Button>
        </li>
      </ul>
    </StyledFullScreenMenu>
  );
};

FullScreenMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default FullScreenMenu;
