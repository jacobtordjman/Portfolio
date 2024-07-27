// src/pages/Project.js
import React from 'react';

const Project = ({ title, description, techStack }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
