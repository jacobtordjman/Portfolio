const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.use(cors());

let cachedData = null;
let cacheTimestamp = null;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

app.get('/api/github-data', async (req, res) => {
  const now = Date.now();

  if (cachedData && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return res.json(cachedData);
  }

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

    cachedData = languageCounts;
    cacheTimestamp = now;

    res.json(languageCounts);
  } catch (error) {
    console.error('Error fetching GitHub data:', error.message);
    console.error('Stack Trace:', error.stack);
    res.status(500).send('Error fetching GitHub data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
