import React, { useState, useEffect, memo } from "react";
import { FaGithub, FaShareAlt } from "react-icons/fa";
import "../styles/Projects.css";
import projectData from "../data/github-projects.json";

// Create a memoized ProjectCard component
const ProjectCard = memo(({ project, isDarkMode }) => (
  <div className={`project-card ${isDarkMode ? "light-card" : "dark-card"}`}>
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <p>
      <strong>Technologies Used:</strong> {project.technologies.join(", ")}
    </p>
    <div className="project-actions">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <button>
        <FaShareAlt />
      </button>
    </div>
  </div>
));

const Projects = ({ isDarkMode }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <div className={`projects-container ${isDarkMode ? "dark" : "light"}`}>
      <h1 className={`${isDarkMode ? "dark" : "light"}`}>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
