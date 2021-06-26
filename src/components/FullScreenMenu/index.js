import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledFullScreenMenu = styled.div`
  ${tw`fixed bg-white w-screen h-screen z-10 top-0 left-0 flex items-center justify-center`}
  transform: ${({ open }) => !open && 'translateX(-100%)'};
  transition: transform 0.5s ease-in-out;
`;

const StyledCloseButton = styled.button`
  height: 20px;

  div {
    ${tw`bg-black w-10`}
    height: 3px;
  }
`;

const FullScreenMenu = ({ menuItems, open, onMenuClose }) => {
  return (
    <StyledFullScreenMenu open={open}>
      <ul className="space-y-20">
        {menuItems.map(({ path, name }) => (
          <li
            key={name}
            className="text-5xl text-center hover:text-accent transition "
          >
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
      <div className="py-7 px-4 xl:px-24 flex justify-end absolute top-0 left-0 w-full">
        <StyledCloseButton type="button" onClick={onMenuClose}>
          <div
            className="bg-black w-10"
            style={{
              height: '3px',
            }}
          />
        </StyledCloseButton>
      </div>
    </StyledFullScreenMenu>
  );
};

FullScreenMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired,
  onMenuClose: PropTypes.func.isRequired,
};

export default FullScreenMenu;
