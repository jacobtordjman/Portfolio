// src/pages/Projects.js
import React from 'react';
import Project from '../components/Project';

const projectData = [
  { title: 'Project 1', description: 'Description of Project 1', imageUrl: '/path/to/image1.jpg', imageAlt: 'Project 1' },
  { title: 'Project 2', description: 'Description of Project 2', imageUrl: '/path/to/image2.jpg', imageAlt: 'Project 2' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      {projectData.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} imageAlt={project.imageAlt} />
      ))}
    </div>
  );
};

export default Projects;
