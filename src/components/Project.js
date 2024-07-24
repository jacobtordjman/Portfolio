// src/components/Project.js
import React from 'react';
import './Project.css';

const Project = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Project;
