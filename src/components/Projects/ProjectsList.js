import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectCard from '@components/ProjectCard';

const ProjectsList = () => {
  const {
    allContentfulProject: { nodes },
  } = useStaticQuery(graphql`
    query ProjectQuery {
      allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          subtitle
          projectUrl
          title
          description {
            description
          }
          stack
          githubUrl
          id
        }
      }
    }
  `);

  return (
    <>
      {nodes.map((project) => (
        <ProjectCard data={project} key={project.id} />
      ))}
    </>
  );
};

export default ProjectsList;
