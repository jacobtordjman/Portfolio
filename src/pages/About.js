// src/pages/About.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../styles/About.css';

// Register necessary elements
ChartJS.register(ArcElement, Tooltip, Legend);

const About = ({ isDarkMode }) => {
  const [techStack, setTechStack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/github-data');
        setTechStack(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: techStack ? Object.keys(techStack) : [],
    datasets: [
      {
        data: techStack ? Object.values(techStack) : [],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6347',
          '#36EB99',
          '#EB36D2',
          '#56FFCE',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6347',
          '#36EB99',
          '#EB36D2',
          '#56FFCE',
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className={`about-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>About Me</h1>
      <p>{"I'm a passionate developer..."}</p>
      <h2>My Tech Stack</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
      {techStack && (
        <>
          <h2>Languages Used in My Projects</h2>
          <div className="chart-container">
            <Doughnut data={data} options={options} />
          </div>
        </>
      )}
    </div>
  );
};

export default About;
