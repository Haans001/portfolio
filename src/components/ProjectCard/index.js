import React from 'react';
import GithubIcon from '@assets/images/icons/iconGithub.inline.svg';
import LinkIcon from '@assets/images/icons/iconLink.inline.svg';

const ProjectCard = () => {
  return (
    <div>
      <div className="bg-card shadow p-6 transform hover:-translate-y-3 transition-transform duration-300">
        <header>
          <div className="flex justify-between">
            <h2 className="text-xl text-white">Project Title</h2>
            <div className="flex">
              <a href="">
                <GithubIcon className="mr-4" />
              </a>
              <a href="">
                <LinkIcon />
              </a>
            </div>
          </div>
          <h2 className="text-xs text-accent uppercase">Project subtitle</h2>
        </header>
        <p className="mt-9 text-gray text-sm">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
          prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex
          nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
        </p>
        <footer className="mt-6 flex space-x-4">
          <div className="breadcrumb">Laravel</div>
          <div className="breadcrumb">Mysql</div>
          <div className="breadcrumb">Vue</div>
        </footer>
      </div>
    </div>
  );
};

export default ProjectCard;
