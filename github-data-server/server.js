const express = require('express');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const corsOptions = {
  origin: '*', // Allow all origins (you can restrict this to your Vercel frontend URL)
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const fetchGitHubData = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    const repos = response.data;

    const languageCounts = {};
    const validLanguages = ['CSS', 'HTML', 'JavaScript', 'Python', 'Java', 'C++', 'C', 'TypeScript'];

    const languageRequests = repos.map(async (repo) => {
      const languagesUrl = repo.languages_url;
      const languagesResponse = await axios.get(languagesUrl, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`
        }
      });
      const languages = languagesResponse.data;

      for (const [language, count] of Object.entries(languages)) {
        if (validLanguages.includes(language)) {
          if (languageCounts[language]) {
            languageCounts[language] += count;
          } else {
            languageCounts[language] = count;
          }
        }
      }
    });

    await Promise.all(languageRequests);
    return languageCounts;
  } catch (error) {
    console.error('Error fetching GitHub data:', error.message);
    console.error('Stack Trace:', error.stack);
    throw error;
  }
};

const fetchProjectData = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    const repos = response.data;

    const projectData = repos.map(repo => ({
      name: repo.name,
      description: repo.description || 'No description provided.',
      technologies: [],  // This will be filled in by language data
      link: repo.html_url
    }));

    const languageRequests = repos.map(async (repo, index) => {
      const languagesUrl = repo.languages_url;
      const languagesResponse = await axios.get(languagesUrl, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`
        }
      });
      const languages = Object.keys(languagesResponse.data);
      projectData[index].technologies = languages;
    });

    await Promise.all(languageRequests);
    return projectData;
  } catch (error) {
    console.error('Error fetching GitHub project data:', error.message);
    console.error('Stack Trace:', error.stack);
    throw error;
  }
};

const saveDataToFile = (data, filename) => {
  try {
    const dataDir = path.join(__dirname, '../src/data');
    const dataFilePath = path.join(dataDir, filename);

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error saving data to file ${filename}:`, error.message);
    console.error('Stack Trace:', error.stack);
    throw error;
  }
};

app.get('/api/github-data', async (req, res) => {
  try {
    const languageCounts = await fetchGitHubData();
    const projectData = await fetchProjectData();
    
    saveDataToFile(languageCounts, 'github-coding-data.json');
    saveDataToFile(projectData, 'github-projects.json');

    res.json({ languages: languageCounts, projects: projectData });
  } catch (error) {
    res.status(500).send('Error fetching GitHub data');
  }
});

// Root URL route
app.get('/', (req, res) => {
  res.send('Welcome to the GitHub Data Server!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});