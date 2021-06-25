import React from 'react';
import '@assets/css/main.scss';
import MainLayout from '@layouts/MainLayout';

const technologies = [
  'React',
  'Vue',
  'Javascript (ES6)',
  'HTML & CSS',
  'Laravel',
  'Node.js',
];

const index = () => (
  <MainLayout>
    <header className="max-w-7xl px-4 mx-auto">
      <small className="uppercase text-accent text-sm">Personal Portfolio</small>
      <h2 className="text-2xl lg:text-5xl text-white line mt-5">
        I'm a developer and designer. <br />
        Is it me you looking for?
      </h2>
      <p className="text-gray max-w-3xl mt-7">
        I'm a polish web developer and fresh graduate of technical collage on
        Computer Science profile. Currently I'm looking for internship. Get in touch
        if you are interested!
      </p>
      <div className="mt-9">
        <a href="#work" className="button">
          My work
        </a>
        <a href="#about" className="button button-accent ml-4">
          About me
        </a>
      </div>
      <div className="grid place-content-center mt-24 lg:mt-36">
        <div className="scroll-icon" />
      </div>
    </header>

    <section id="about" className="mt-36 max-w-6xl mx-auto">
      <h2 className="text-xl section-title">About me</h2>
      <div className="grid grid-cols-2 mt-8">
        <div>
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
  </MainLayout>
);

export default index;
