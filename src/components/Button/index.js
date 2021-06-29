import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import NavigationLink from '@components/NavigationLink';

const buttonCss = css`
  ${tw`uppercase py-2 px-5 bg-white inline-block cursor-pointer`}
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: rgb(241, 241, 241);
  }

  ${({ accent }) => accent && tw`text-white bg-accent hover:bg-accent-dark`}
  ${({ large }) => large && tw`text-xl`}
`;

const StyledButton = styled.a`
  ${buttonCss}
`;

const StyledNavigationLink = styled(NavigationLink)`
  ${buttonCss}
`;

const Button = ({ accent, large, to, href, children, ...props }) => {
  if (to) {
    return (
      <StyledNavigationLink accent={accent} large={large} to={to} {...props}>
        {children}
      </StyledNavigationLink>
    );
  }

  return (
    <StyledButton accent={accent} large={large} href={href} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  accent: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  large: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

Button.defaultProps = {
  accent: false,
  large: false,
  href: '',
  to: null,
};

export default Button;
