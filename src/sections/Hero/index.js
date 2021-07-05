import React, { useRef, useEffect } from 'react';
import Button from '@components/Button';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const wrapper = useRef();

  const { t } = useTranslation(['hero']);

  useEffect(() => {
    gsap.set(wrapper.current, { visibility: 'visible' });
    gsap.from(wrapper.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.1,
      delay: 0.7,
      ease: 'power4',
    });
  }, []);

  return (
    <section
      ref={wrapper}
      className="min-h-screen container flex justify-center flex-col"
      style={{
        visibility: 'hidden',
      }}
    >
      <small className="uppercase text-accent text-sm">Personal Portfolio</small>
      <h2 className="text-3xl md:text-5xl 3xl:text-6xl font-bold text-white line mt-5">
        {t('hero:title-1')}
      </h2>
      <h2 className="text-3xl md:text-5xl 3xl:text-6xl font-bold text-white line">
        {t('hero:title-2')}
      </h2>
      <p className="text-gray md:w-1/2 mt-7">{t('hero:description')}</p>
      <div className="mt-9">
        <Button to="#work">{t('hero:my-work')}</Button>
        <Button to="#about" className="ml-4" accent>
          {t('hero:about-me')}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
