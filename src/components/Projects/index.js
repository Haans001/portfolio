import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '@components/Button';
import ProjectCard from '@components/ProjectCard';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Projects = ({ data }) => {
  const wrapper = useRef();
  const title = useRef();
  const button = useRef();

  const { t } = useTranslation(['projects']);

  useEffect(() => {
    gsap.set(wrapper.current.children, { opacity: 0 });

    gsap.from(title.current, {
      opacity: 0,
      y: 40,
      ease: 'power4',
      scrollTrigger: title.current,
    });

    gsap.from(button.current, {
      opacity: 0,
      y: 40,
      ease: 'power4',
      scrollTrigger: button.current,
    });

    ScrollTrigger.batch(wrapper.current.children, {
      once: true,
      interval: 0.1,
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          {
            y: 40,
            ease: 'power4',
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
          }
        ),

      start: 'top 80%',
    });
  }, []);

  return (
    <section className="mt-80 container" id="work">
      <h3 ref={title} className="section-title">
        {t('projects:title')}
      </h3>
      <div ref={wrapper} className="grid md:grid-cols-2 mt-14 gap-7">
        {data.map((project) => (
          <ProjectCard data={project} key={project.id} />
        ))}
      </div>

      <div ref={button} className="flex justify-center mt-14">
        <Button href="https://github.com/Haans001" large>
          {t('projects:github')}
        </Button>
      </div>
    </section>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf().isRequired,
};

export default Projects;
