import React from 'react';
import '@assets/css/main.scss';
import MainLayout from '@layouts/MainLayout';
import Projects from '@components/Projects';
import Hero from '@sections/Hero';
import About from '@sections/About';
import Footer from '@sections/Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const index = () => (
  <MainLayout>
    <Hero />
    <About />
    <Projects />
    <Footer />
  </MainLayout>
);

export default index;
