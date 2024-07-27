// src/pages/Projects.js
import React from 'react';
import Project from '../components/Project';
import '../styles/Projects.css';

const Projects = ({ isDarkMode }) => {
  const projectData = [
    {
      title: 'Project One',
      description: 'This is the first project description.',
      techStack: ['React', 'Node.js', 'Express'],
    },
    {
      title: 'Project Two',
      description: 'This is the second project description.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <div className={`projects-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Projects</h1>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
