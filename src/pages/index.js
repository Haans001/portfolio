import React from 'react';
import '@assets/css/main.scss';
import MainLayout from '@layouts/MainLayout';
import Button from '@components/Button';
import Projects from '@components/Projects';
import LinkIcon from '@assets/images/icons/iconArrow.inline.svg';

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
    <header className="min-h-screen container flex justify-center flex-col">
      <small className="uppercase text-accent text-sm">Personal Portfolio</small>
      <h2 className="text-3xl md:text-6xl lg:w-3/4 font-bold text-white line mt-5">
        I'm a developer and designer. <br />
        Is it me you looking for?
      </h2>
      <p className="text-gray md:w-1/2 mt-7">
        I'm a polish web developer and fresh graduate of technical collage on
        Computer Science profile. Currently I'm looking for internship. Get in touch
        if you are interested!
      </p>
      <div className="mt-9">
        <Button to="#work">My work</Button>
        <Button to="#about" className="ml-4" accent>
          About me
        </Button>
      </div>
    </header>

    <section id="about" className="px-4 sm:px-10 mx-auto max-w-6xl">
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

    <Projects />

    <footer className="mt-64 pt-24 pb-6 bg-accent-dark">
      <div className="container">
        <a href="#contact" className="text-white text-5xl font-bold">
          Talk <br /> with me.
          <LinkIcon className="w-10 h-10 mt-1" />
        </a>
        <p className="text-white mt-14">
          Or email me at:
          <br />
          <span className="underline">rapacz2001@gmail.com</span>
        </p>
      </div>
      <div className="mt-16 text-center font-bold text-white text-sm opacity-70">
        Designed and built by Jan Rapacz
      </div>
    </footer>
  </MainLayout>
);

export default index;
