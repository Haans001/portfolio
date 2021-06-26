import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledButton = styled.a`
  ${tw`uppercase py-2 px-5 bg-white inline-block cursor-pointer`}
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: rgb(241, 241, 241);
  }

  ${({ accent }) => accent && tw`text-white bg-accent hover:bg-accent-dark`}
  ${({ large }) => large && tw`text-xl`}
`;

const Button = ({ accent, large, to, children, ...props }) => {
  return (
    <StyledButton accent={accent} large={large} href={to} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  accent: PropTypes.bool,
  to: PropTypes.string,
  large: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

Button.defaultProps = {
  accent: false,
  large: false,
  to: null,
};

export default Button;
