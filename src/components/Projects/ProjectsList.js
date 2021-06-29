import React from 'react';
import ProjectCard from '@components/ProjectCard';
import { useTranslation } from 'react-i18next';

const ProjectsList = (props) => {
  const {
    i18n: { language },
  } = useTranslation();

  console.log(props);
  // const {
  //   allContentfulProject: { nodes },
  // } = useStaticQuery(
  //   graphql`
  //     query ProjectQuery($locale: String) {
  //       allContentfulProject(filter: { node_locale: { eq: $locale } }) {
  //         nodes {
  //           description {
  //             description
  //           }
  //           subtitle
  //           title
  //           projectUrl
  //           stack
  //           githubUrl
  //           id
  //           node_locale
  //         }
  //       }
  //     }
  //   `
  // );

  const nodes = [];

  console.log(nodes);

  return (
    <>
      {nodes.map((project) => (
        <ProjectCard data={project} key={project.id} />
      ))}
    </>
  );
};

export default ProjectsList;
