import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../styles/About.css";

// Importing images
import windowsIcon from "../assets/images/windows-icon.webp";
import linuxIcon from "../assets/images/linux-icon.webp";
import androidIcon from "../assets/images/android-icon.webp";
import htmlIcon from "../assets/images/html-icon.webp";
import cssIcon from "../assets/images/css-icon.webp";
import javascriptIcon from "../assets/images/javascript-icon.webp";
import reactIcon from "../assets/images/react-icon.webp";
import nodeIcon from "../assets/images/node-icon.webp";
import pythonIcon from "../assets/images/python-icon.webp";
import javaIcon from "../assets/images/java-icon.webp";
import cppIcon from "../assets/images/cpp-icon.webp";
import cIcon from "../assets/images/c-icon.webp";

// Importing the JSON data
import githubCodingData from "../data/github-coding-data.json";

// Register necessary elements
ChartJS.register(ArcElement, Tooltip, Legend);

const About = ({ isDarkMode }) => {
  const [techStack, setTechStack] = useState(null);

  useEffect(() => {
    // Initialize the state with the imported JSON data
    setTechStack(githubCodingData);
  }, []);

  const data = {
    labels: techStack ? Object.keys(techStack) : [],
    datasets: [
      {
        data: techStack ? Object.values(techStack) : [],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6347",
          "#36EB99",
          "#EB36D2",
          "#56FFCE",
          "#8A2BE2", // Adding an extra color for TypeScript
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6347",
          "#36EB99",
          "#EB36D2",
          "#56FFCE",
          "#8A2BE2", // Adding an extra hover color for TypeScript
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: isDarkMode ? "white" : "black",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.raw / total) * 100).toFixed(1);
            return `${context.label}: ${percentage}%`;
          },
        },
      },
    },
    cutout: "65%",
  };

  const technologies = [
    { name: "Windows", icon: windowsIcon },
    { name: "Linux", icon: linuxIcon },
    { name: "Android", icon: androidIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Node", icon: nodeIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Java", icon: javaIcon },
    { name: "C++", icon: cppIcon },
    { name: "C", icon: cIcon },
  ];

  return (
    <div className={`about-container ${isDarkMode ? "dark" : "light"}`}>
      <h1>About Me</h1>
      <p>
        {
          "I'm a passionate student software developer with a strong interest in mobile and full-stack development. Currently honing my skills in building dynamic, user-centric applications, I enjoy working on both front-end and back-end technologies to create seamless, end-to-end solutions. Driven by curiosity and a love for problem-solving, I'm excited to explore new technologies and contribute to innovative projects that enhance user experiences. My goal is to continuously learn and grow in the tech industry while delivering impactful and efficient software solutions."
        }
      </p>
      <h2>My Tech Stack</h2>
      <div className="layout-container">
        <div className="tech-stack">
          {technologies.map((tech, index) => (
            <div className="tech" key={index}>
              <img src={tech.icon} loading="lazy" alt={`${tech.name} icon`} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
        {techStack && (
          <div className="chart-container">
            <Doughnut data={data} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
