import React from 'react';
import '@assets/css/main.scss';
import SEO from '@components/SEO/SEO';
import Navbar from '@components/Navbar';

const index = () => (
  <div>
    <SEO />
    <Navbar />
    <main className="mt-10 lg:mt-24">
      <section className="max-w-7xl px-4 mx-auto">
        <small className="uppercase text-accent text-sm">Personal Portfolio</small>
        <h2 className="text-2xl lg:text-5xl text-white line mt-5">
          I'm a developer and designer. <br />
          Is it me you looking for?
        </h2>
        <p className="text-gray max-w-3xl mt-7">
          I'm a polish web developer and fresh graduate of technical collage on
          Computer Science profile. Currently I'm looking for internship. Get in
          touch if you are interested!
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
      </section>
      <section className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-xl">About me</h2>
      </section>
    </main>
  </div>
);

export default index;
