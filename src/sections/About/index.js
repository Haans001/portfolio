import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

const technologies = [
  'React',
  'Vue',
  'Javascript (ES6)',
  'HTML & CSS',
  'Laravel',
  'Node.js',
];

const About = () => {
  const wrapper = useRef();

  const { t } = useTranslation(['about']);

  useEffect(() => {
    gsap.from(wrapper.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.1,
      ease: 'power4',
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'top 70%',
      },
    });
  }, []);

  return (
    <section ref={wrapper} id="about" className="px-4 sm:px-10 mx-auto max-w-6xl">
      <h2 className="text-xl section-title">{t('about:title')}</h2>
      <div className="grid grid-cols-2 mt-8">
        <div className="col-span-2 lg:col-span-1">
          <p className="text-gray">{t('about:description-1')}</p>
          <p className="text-gray mt-3">{t('about:description-2')}</p>
          <p className="text-accent mt-5">{t('about:description-3')}:</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {technologies.map((technology) => (
              <li className="text-sm text-white" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
