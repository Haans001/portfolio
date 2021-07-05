import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  const [scrollDir, setScrollDir] = useState('down');

  // /** CHECKS SCROLL DIRECTION */

  const handleScroll = function () {
    if (this.prev > window.scrollY) {
      setScrollDir('up');
    } else if (this.prev < window.scrollY) {
      setScrollDir('down');
    }
    this.prev = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /** CHECKS IF USER SCROLLED DOWN UNDER SOME TRESHOLD */
  useEffect(() => {
    const treshold = 20;

    const updateScrolled = () => setScrolled(window.pageYOffset > treshold);

    updateScrolled();

    document.addEventListener('scroll', updateScrolled);

    return () => document.removeEventListener('scroll', updateScrolled);
  }, []);

  return [scrolled, scrollDir];
};

export default useScroll;
