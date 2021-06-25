import React from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ in: inProp, children, mountOnEnter, unmountOnExit }) => (
  <Transition
    in={inProp}
    timeout={duration}
    mountOnEnter={mountOnEnter}
    unmountOnExit={unmountOnExit}
  >
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default Fade;

Fade.propTypes = {
  in: PropTypes.bool,
};

Fade.defaultProps = {
  in: false,
};
