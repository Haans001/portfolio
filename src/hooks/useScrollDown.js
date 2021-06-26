import { useState, useEffect } from 'react';

const useScrollDown = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScrollPostision = (e) => {
    const { scrollY } = window;

    if (scrollY > 50) return setScrolled(true);

    setScrolled(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScrollPostision);
    return () => document.removeEventListener('scroll', handleScrollPostision);
  }, []);

  return scrolled;
};

export default useScrollDown;
