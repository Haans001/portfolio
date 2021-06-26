import React from 'react';
import ProjectCard from '@components/ProjectCard';
import Button from '@components/Button';

const Projects = () => {
  return (
    <section className="mt-80 container">
      <h3 className="section-title">My projects</h3>
      <div className="grid md:grid-cols-2 mt-14 gap-7">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className="flex justify-center mt-14">
        <Button large>See my github</Button>
      </div>
    </section>
  );
};

export default Projects;
