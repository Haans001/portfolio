import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  transition: opacity 500ms cubic-bezier(0.83, 0, 0.17, 1);
  opacity: 0;

  &.fade-appear-active,
  &.fade-appear-done {
    opacity: 1;
    transition: none;
  }

  &.fade-enter-active,
  &.fade-enter-done {
    opacity: 1;
    transition: opacity 500ms cubic-bezier(0.83, 0, 0.17, 1);
  }

  &.fade-exit-active,
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms cubic-bezier(0.83, 0, 0.17, 1);
  }
`;

const duration = 500;

const Fade = ({ in: inProp, children, ...props }) => (
  <CSSTransition
    in={inProp}
    timeout={duration}
    {...props}
    appear
    classNames="fade"
    {...props}
  >
    <StyledContainer {...props}>{children}</StyledContainer>
  </CSSTransition>
);

Fade.propTypes = {
  in: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

Fade.defaultProps = {
  in: false,
};

export default Fade;
