import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
      <h2 className="text-xl section-title">About me</h2>
      <div className="grid grid-cols-2 mt-8">
        <div className="col-span-2 lg:col-span-1">
          <p className="text-gray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            beatae laborum voluptatem earum delectus dignissimos unde molestias ad
            libero cum, expedita fugiat velit veritatis adipisci voluptates
            praesentium obcaecati perferendis, sequi quos dolorum explicabo sed?
          </p>
          <p className="text-gray mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            quasi expedita laborum ab? Vitae repellat eveniet beatae. Ducimus ex
            dolor, aliquid expedita iusto recusandae.
          </p>
          <p className="text-accent mt-5">
            Here is the list of technologies that I have experience with:
          </p>
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
