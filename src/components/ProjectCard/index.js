import React from 'react';
import PropTypes from 'prop-types';
import GithubIcon from '@assets/images/icons/iconGithub.inline.svg';
import LinkIcon from '@assets/images/icons/iconLink.inline.svg';

const ProjectCard = ({ data }) => {
  console.log(data);
  return (
    <div className="contents">
      <div className="bg-card shadow p-6 transform hover:-translate-y-3 transition-transform duration-300 flex flex-col">
        <header>
          <div className="flex justify-between">
            <h2 className="text-xl text-white">{data.title}</h2>
            <div className="flex">
              {data.githubUrl && (
                <a target="_blank" href={data.githubUrl} rel="noreferrer">
                  <GithubIcon className="mr-4" />
                </a>
              )}

              {data.projectUrl && (
                <a target="_blank" href={data.projectUrl} rel="noreferrer">
                  <LinkIcon />
                </a>
              )}
            </div>
          </div>
          <h2 className="text-xs text-accent uppercase">{data.subtitle}</h2>
        </header>
        <p className="mt-6 text-gray text-sm flex-grow">
          {data.description.description}
        </p>
        <footer className="mt-6 flex space-x-4">
          {data.stack.map((item) => (
            <div className="breadcrumb">{item}</div>
          ))}
        </footer>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    githubUrl: PropTypes.string,
    projectUrl: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.objectOf({
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default ProjectCard;
