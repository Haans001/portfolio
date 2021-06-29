import React from 'react';
import '@assets/css/main.scss';
import { graphql } from 'gatsby';

import MainLayout from '@layouts/MainLayout';
import Projects from '@components/Projects';
import Hero from '@sections/Hero';
import About from '@sections/About';
import Footer from '@sections/Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const index = ({ data: { allContentfulProject: nodes } }) => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects data={nodes.nodes} />
      <Footer />
    </MainLayout>
  );
};

export const query = graphql`
  query ProjectQuery($locale: String) {
    allContentfulProject(filter: { node_locale: { eq: $locale } }) {
      nodes {
        description {
          description
        }
        subtitle
        title
        projectUrl
        stack
        githubUrl
        id
        node_locale
      }
    }
  }
`;

export default index;
