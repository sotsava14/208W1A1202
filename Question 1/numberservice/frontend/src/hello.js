const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  const urlArray = Array.isArray(urls) ? urls : [urls];
  const result = [];
  const timeout = 500;

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url, { timeout });

      if (response.status === 200) {
        return response.data.numbers;
      }
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
      return [];
    }
  };

  try {
    const promises = urlArray.map(fetchData);

    Promise.all(promises)
      .then((responses) => {
        const mergedNumbers = [...new Set(responses.flat())].sort((a, b) => a - b);
        res.json({ numbers: mergedNumbers });
      })
      .catch((error) => {
        console.error('Error processing responses:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});