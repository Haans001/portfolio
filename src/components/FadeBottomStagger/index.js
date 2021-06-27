import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const FadeBottomStagger = ({ children }) => {
  const refs = useRef([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    refs.current = refs.current.slice(0, children.length);
    gsap.from(refs.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.1,
      autoAlpha: 0,
    });
  }, []);

  return React.Children.map(children, (element, idx) => {
    return React.cloneElement(element, { ref: (el) => (refs.current[idx] = el) });
  });
};

export default FadeBottomStagger;
