import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ProjectCard from '@components/ProjectCard';
import Button from '@components/Button';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Projects = () => {
  const wrapper = useRef();
  const title = useRef();
  const button = useRef();

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
    <section className="mt-80 container">
      <h3 ref={title} className="section-title">
        My projects
      </h3>
      <div ref={wrapper} className="grid md:grid-cols-2 mt-14 gap-7">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div ref={button} className="flex justify-center mt-14">
        <Button large>See my github</Button>
      </div>
    </section>
  );
};

export default Projects;
