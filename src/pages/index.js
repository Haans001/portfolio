import React from 'react';
import '@assets/css/main.scss';
import { graphql } from 'gatsby';
import MainLayout from '@layouts/MainLayout';
import Projects from '@components/Projects';
import Hero from '@sections/Hero';
import About from '@sections/About';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const index = ({ data: { allContentfulProject: nodes, allFile } }) => {
  return (
    <MainLayout resumeUrl={allFile.edges[0].node.publicURL}>
      <Hero />
      <About />
      <Projects data={nodes.nodes} />
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

    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

export default index;
