import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const StyledHamburger = styled.button`
  ${tw`md:hidden`}
  padding: 15px;
`;

const StyledHamburgerBox = styled.div`
  height: 24px;
  width: 30px;
  position: relative;

  span {
    display: block;
    height: 2px;
    background: white;
    width: 100%;
    position: absolute;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  span:nth-child(2) {
    top: 9px;
  }

  span:nth-child(3) {
    top: 18px;
  }

  ${({ active }) =>
    active &&
    css`
      span:first-child {
        transform: translateY(9px) rotate(45deg);
      }
      span:last-child {
        transform: translateY(-9px) rotate(135deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
    `}
`;

const Hamburger = ({ open, ...props }) => {
  return (
    <StyledHamburger type="button" {...props}>
      <StyledHamburgerBox active={open}>
        <span />
        <span />
        <span />
      </StyledHamburgerBox>
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Hamburger;
